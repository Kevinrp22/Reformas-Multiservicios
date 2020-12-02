import fetch from "node-fetch";
import URL from "./URL"

async function getCategorias() {
  let response = await fetch(`${URL}/categorias`)
  return response.json()
}

function flattenProducts(data) {
  return data.map((item) => {
    let portada = URL + item.portada.url
    let servicios = item.servicios.map(servicio => {
      let portada = URL + servicio.portada.url
      return {
        ...servicio,
        portada
      }
    })
    return {
      ...item,
      portada,
      servicios
    }
  });


}
getCategorias()
export default async () => {
  let categorias = ""
  categorias = await getCategorias()
  categorias = flattenProducts(categorias)
  return categorias
}