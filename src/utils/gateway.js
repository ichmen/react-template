const URL = "https://is-api-sd57.onrender.com/irrigated";

export async function getData() {
  const result = await fetch(URL);
  const json = await result.json();
  return json;
}
