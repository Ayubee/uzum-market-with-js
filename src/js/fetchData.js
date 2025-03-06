import { showLoader } from "./loader.js";

export const fetchData = async (url) => {
  const req = await fetch(url);
  showLoader(true);
  if (!req.ok) {
    showLoader(false);
    throw new Error("Something went wrong !");
  }

  const data = await req.json();
  showLoader(false);
  return data;
};
