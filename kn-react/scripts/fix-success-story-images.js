const fs = require("fs");
const path = require("path");

const API_BASE_URL =
  process.env.API_BASE_URL || "https://knowing-narcolepsy-backend.onrender.com";
const API_ROOT = API_BASE_URL.replace(/\/$/, "");
const SUCCESS_STORIES_ENDPOINT = `${API_ROOT}/api/success-stories/`;

const BACKEND_IMAGE_DIR =
  process.env.BACKEND_IMAGE_DIR ||
  "C:\\Users\\hdriv\\Documents\\Coding\\GitHub\\Knowing-Narcolepsy-Backend\\public\\images";

const getStoryCollection = (payload) => {
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

const imageNameForStory = (story) => {
  const firstName = String(story?.first_name ?? story?.firstName ?? "").trim();
  if (!firstName) return "";
  return `${firstName}.jpg`;
};

const putStoryWithImage = async (story, imagePath) => {
  const detail = firstDetail(story);
  const formData = new FormData();

  formData.append("firstName", story.first_name ?? story.firstName ?? "");
  formData.append("lastName", story.last_name ?? story.lastName ?? "");
  formData.append("diagnosed", detail.date_diagnosed ?? "");
  formData.append("type", detail.type_of_narcolepsy ?? "");
  formData.append("story", detail.user_text ?? "");
  formData.append("state", story.state ?? "");
  formData.append("city", story.city ?? "");

  const blob = await fs.openAsBlob(imagePath);
  formData.append("img", blob, path.basename(imagePath));

  const response = await fetch(`${SUCCESS_STORIES_ENDPOINT}${story._id}`, {
    method: "PUT",
    body: formData,
  });

  if (!response.ok) {
    const body = await response.text();
    throw new Error(`HTTP ${response.status} ${body}`);
  }

  return response.json();
};

const run = async () => {
  console.log(`Updating success story images via: ${SUCCESS_STORIES_ENDPOINT}`);
  console.log(`Using local image directory: ${BACKEND_IMAGE_DIR}`);

  const getResponse = await fetch(SUCCESS_STORIES_ENDPOINT);
  if (!getResponse.ok) {
    const body = await getResponse.text();
    throw new Error(`GET stories failed: HTTP ${getResponse.status} ${body}`);
  }

  const payload = await getResponse.json();
  const stories = getStoryCollection(payload);
  if (stories.length === 0) {
    console.log("No stories found. Nothing to update.");
    return;
  }

  let updated = 0;
  let skipped = 0;
  let failed = 0;

  for (const story of stories) {
    const imageName = imageNameForStory(story);
    if (!imageName) {
      skipped += 1;
      console.log(`SKIP  ${story._id} missing first_name`);
      continue;
    }

    const imagePath = path.join(BACKEND_IMAGE_DIR, imageName);
    if (!fs.existsSync(imagePath)) {
      skipped += 1;
      console.log(`SKIP  ${story.first_name} ${story.last_name} -> image not found: ${imageName}`);
      continue;
    }

    try {
      const result = await putStoryWithImage(story, imagePath);
      updated += 1;
      console.log(
        `UPDATE ${story.first_name} ${story.last_name}: ${story.img_name || "(empty)"} -> ${result.img_name}`
      );
    } catch (error) {
      failed += 1;
      console.log(`FAIL  ${story.first_name} ${story.last_name}: ${error.message}`);
    }
  }

  console.log("");
  console.log(`Done. updated=${updated}, skipped=${skipped}, failed=${failed}`);
  if (failed > 0) {
    process.exitCode = 1;
  }
};

run().catch((error) => {
  console.error(`Image update aborted: ${error.message}`);
  process.exit(1);
});
