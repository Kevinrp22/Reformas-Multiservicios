import {
  writable
} from "svelte/store"
import URL from "../strapi/URL"
import getCategorias from "../strapi/getCategorias"
const servicios = writable([], () => {
  setCategorias()
  return () => {}
});
async function setCategorias() {
  let _categorias = await getCategorias()

  servicios.set(_categorias)

}


export default servicios