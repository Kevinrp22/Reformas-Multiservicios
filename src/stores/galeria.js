import {
  writable,
  derived
} from "svelte/store"
import localImagenes from "../localImagenes"
import getImagenes from "../strapi/getImagenes"
import URL from "../strapi/URL"
const galeria = writable([], () => {
  setImagenes()
  return () => {}
});

async function setImagenes() {
  let imagenes = await getImagenes()
  if (imagenes) {
    imagenes = flattenProducts(imagenes)
    galeria.set(imagenes)
  }
}

function flattenProducts(data) {
  return data.map(item => {
    /* let image = item.image.URL; */
    let portada = URL + item.portada.url
    let get_imagenes = item.imagenes
    let imagenes = get_imagenes.map((item) => {
      return URL + item.url
    })
    return {
      ...item,
      portada,
      imagenes
    };
  });
}
export const updateFilterImage = (Gallery, data_filter) => {
  console.log(data_filter)
  console.log(Gallery)
  Gallery.map(storeValue => {
    console.log(storeValue)
    return {
      ...storeValue,
      data_filter
    }
  })

}

export function iterarItem(id) {
  let item = localImagenes.find(item => {
    return item.id === id
  })
  setTitulo = item.id
  setDescripcion = item.descripcion
  setportada = item.portada
  setimagenes = item.imagenes
  setTags = item.tags

  return {
    setTitulo,
    setDescripcion,
    setportada,
    setimagenes,
    setTags
  }

}

export const obraDestacada = derived(galeria, ($galeria) => {
  return $galeria.filter(item => item.destacado === true)
})



export default galeria