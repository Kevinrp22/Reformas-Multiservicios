import fetch from "node-fetch";
import URL from "./URL";
export default async () => {
  const response = await fetch(`${URL}/imagenes`)
    .catch(error => console.log(error))
  const imagenes = await response.json()
  if (imagenes.error) {
    return null
  }
  return imagenes
}