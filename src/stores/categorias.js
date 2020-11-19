import {
  writable
} from "svelte/store"
import URL from "../strapi/URL"
import getCategorias from "../strapi/getCategorias"
const servicios = writable([], () => {
  setServicios()
  return () => {}
});
async function setServicios() {
  let _servicios = await getCategorias()
  if (_servicios) {
    _servicios = flattenProducts(_servicios)
    servicios.set(_servicios)
  }
}

function flattenProducts(data) {
  return data.map(item => {
    /* let image = item.image.URL; */
    let portada = URL + item.portada.url
    /* let get_full_imagenes = item.full_imagenes */
    /* let full_imagenes = get_full_imagenes.map((item) => {
      return URL + item.url
    }) */
    return {
      ...item,
      portada,
      /* full_imagenes */
    };
  });
}
export default servicios