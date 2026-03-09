const fs = require("fs");
const path = require("path");

const API_BASE_URL =
  process.env.API_BASE_URL || "https://knowing-narcolepsy-backend.onrender.com";
const SUCCESS_STORIES_ENDPOINT = `${API_BASE_URL.replace(/\/$/, "")}/api/success-stories/`;

const PROJECT_ROOT = path.resolve(__dirname, "..");
const SEED_JSON_PATH = path.resolve(PROJECT_ROOT, "src", "json", "success-stories.json");
const DEFAULT_IMAGE_PATH = path.resolve(
  PROJECT_ROOT,
  "src",
  "images",
  "about_me",
  "AboutMe.jpg"
);

const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

const storyCollectionFromPayload = (payload) => {
  if (Array.isArray(payload)) return payload;
  if (Array.isArray(payload?.stories)) return payload.stories;
  if (Array.isArray(payload?.successStories)) return payload.successStories;
  if (Array.isArray(payload?.data)) return payload.data;
  return [];
};

const firstDetail = (story) => {
  if (Array.isArray(story?.narc_details) && story.narc_details.length > 0) {
    return story.narc_details[0];
  }
  if (Array.isArray(story?.details) && story.details.length > 0) {
    return story.details[0];
  }
  return {};
};

const toKey = (firstName, lastName, city, state) =>
  [firstName, lastName, city, state]
    .map((part) => String(part || "").trim().toLowerCase())
    .join("|");

const resolveImagePath = (imgName) => {
  const imageName = String(imgName || "").trim();
  if (!imageName || imageName === "./") {
    return DEFAULT_IMAGE_PATH;
  }

  const candidates = [
    path.resolve(path.dirname(SEED_JSON_PATH), imageName),
    path.resolve(PROJECT_ROOT, imageName),
    path.resolve(PROJECT_ROOT, "src", "images", imageName),
    path.resolve(PROJECT_ROOT, "src", "images", path.basename(imageName)),
  ];

  const match = candidates.find((candidate) => fs.existsSync(candidate));
  return match || DEFAULT_IMAGE_PATH;
};

const fetchWithRetry = async (url, options, attempts = 4) => {
  let lastError = null;

  for (let attempt = 1; attempt <= attempts; attempt += 1) {
    try {
      const response = await fetch(url, options);

      if (response.status >= 500 && attempt < attempts) {
        await sleep(1000 * attempt);
        continue;
      }

      return response;
    } catch (error) {
      lastError = error;
      if (attempt < attempts) {
        await sleep(1000 * attempt);
        continue;
      }
    }
  }

  throw lastError || new Error("Request failed after retries.");
};

const readJsonSeed = () => {
  if (!fs.existsSync(SEED_JSON_PATH)) {
    throw new Error(`Seed JSON file not found: ${SEED_JSON_PATH}`);
  }

  const raw = fs.readFileSync(SEED_JSON_PATH, "utf-8");
  const parsed = JSON.parse(raw);
  if (!Array.isArray(parsed)) {
    throw new Error("Seed JSON root must be an array of success stories.");
  }

  return parsed;
};

const getExistingStories = async () => {
  const response = await fetchWithRetry(SUCCESS_STORIES_ENDPOINT, { method: "GET" });
  if (!response.ok) {
    const body = await response.text();
    throw new Error(`GET failed: HTTP ${response.status} ${body}`);
  }

  const payload = await response.json();
  return storyCollectionFromPayload(payload);
};

const createStory = async (seedStory) => {
  const detail = firstDetail(seedStory);
  const formData = new FormData();

  formData.append("firstName", seedStory.first_name || "");
  formData.append("lastName", seedStory.last_name || "");
  formData.append("diagnosed", detail.date_diagnosed || "");
  formData.append("type", detail.type_of_narcolepsy || "");
  formData.append("story", detail.user_text || "");
  formData.append("state", seedStory.state || "");
  formData.append("city", seedStory.city || "");

  const imagePath = resolveImagePath(seedStory.img_name);
  if (fs.existsSync(imagePath)) {
    const imageBlob = await fs.openAsBlob(imagePath);
    formData.append("img", imageBlob, path.basename(imagePath));
  }

  const response = await fetchWithRetry(SUCCESS_STORIES_ENDPOINT, {
    method: "POST",
    body: formData,
  });

  if (!response.ok) {
    const body = await response.text();
    throw new Error(
      `POST failed for ${seedStory.first_name} ${seedStory.last_name}: HTTP ${response.status} ${body}`
    );
  }

  return response.json();
};

const run = async () => {
  console.log(`Seeding endpoint: ${SUCCESS_STORIES_ENDPOINT}`);
  const seedStories = readJsonSeed();
  const existingStories = await getExistingStories();

  const existingKeys = new Set(
    existingStories.map((story) =>
      toKey(
        story.first_name ?? story.firstName,
        story.last_name ?? story.lastName,
        story.city,
        story.state
      )
    )
  );

  let created = 0;
  let skipped = 0;
  let failed = 0;

  for (const seedStory of seedStories) {
    const key = toKey(
      seedStory.first_name,
      seedStory.last_name,
      seedStory.city,
      seedStory.state
    );

    if (existingKeys.has(key)) {
      skipped += 1;
      console.log(`SKIP  ${seedStory.first_name} ${seedStory.last_name} (already exists)`);
      continue;
    }

    try {
      await createStory(seedStory);
      created += 1;
      existingKeys.add(key);
      console.log(`CREATE ${seedStory.first_name} ${seedStory.last_name}`);
    } catch (error) {
      failed += 1;
      console.error(`FAIL  ${seedStory.first_name} ${seedStory.last_name} :: ${error.message}`);
    }
  }

  console.log("");
  console.log(`Seed complete. created=${created}, skipped=${skipped}, failed=${failed}`);

  if (failed > 0) {
    process.exitCode = 1;
  }
};

run().catch((error) => {
  console.error(`Seed aborted: ${error.message}`);
  process.exit(1);
});
