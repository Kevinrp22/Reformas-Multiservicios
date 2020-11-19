import fetch from "node-fetch";
import URL from "./URL"
export default async () => {
  let response = await fetch(`${URL}/categorias`)
  return response.json()
}