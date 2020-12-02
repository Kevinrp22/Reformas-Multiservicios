import {
  writable
} from "svelte/store"
import URL from "../strapi/URL"
import getServicios from "../strapi/getServicios"
const servicios = writable([], () => {
  setServicios()
  return () => {}
});
async function setServicios() {
  let _servicios = await getServicios()

  servicios.set(_servicios)

}


export default servicios