import fetch from "node-fetch";

export default async () => {
  const url = `https://api.github.com`;
  const response = await fetch(url);
  const asset = await response.json();

  if (response.status !== 200) throw Error(asset.message);

  return asset.dragon;
};
