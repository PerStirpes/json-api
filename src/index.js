import fetch from "node-fetch";

export default async () => {
  const url = `https://api.github.com/emojis`;
  const response = await fetch(url);
  const assets = await response.json();

  if (response.status !== 200) throw Error(assets.message);

  return assets;
};
