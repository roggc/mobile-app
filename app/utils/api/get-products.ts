import { API_URL } from "./url";

export default async function getProducts() {
  const resp = await fetch(`${API_URL}/products?limit=${20}`, {
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
