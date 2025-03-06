import { API_URL } from "./url";

export default async function getProducts(search?: string) {
  const url = new URL(`${API_URL}/products`);
  url.searchParams.append("limit", "20");
  if (search) {
    url.searchParams.append("search", search);
  }
  const resp = await fetch(url.toString(), {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      "x-api-key": process.env.X_API_KEY ?? "",
    },
  });
  if (resp.ok) {
    const data = await resp.json();
    return data;
  }
  return [];
}
