const PROD_API_BASE_URL = "https://knowing-narcolepsy-backend.onrender.com";
const LOCAL_API_BASE_URL = "http://localhost:3001";

export const API_BASE_URL =
  process.env.REACT_APP_API_BASE_URL ||
  (window.location.hostname === "localhost"
    ? LOCAL_API_BASE_URL
    : PROD_API_BASE_URL);

export const buildApiUrl = (path = "") => {
  const normalizedPath = path.startsWith("/") ? path : `/${path}`;
  return `${API_BASE_URL}${normalizedPath}`;
};

export const buildImageUrl = (imgName) => {
  if (!imgName) {
    return "";
  }

  return buildApiUrl(`/images/${imgName}`);
};
