// Ordinarily, you'd generate this data from markdown files in your
// repo, or fetch them from a database of some kind. But in order to
// avoid unnecessary dependencies in the starter template, and in the
// service of obviousness, we're just going to leave it here.

// This file is called `_posts.js` rather than `posts.js`, because
// we don't want to create an `/blog/posts` route — the leading
// underscore tells Sapper not to do that.

// Normalmente, generaría estos datos a partir de archivos de rebajas en su
// repositorio o recuperarlos de una base de datos de algún tipo. Pero para
// evitar dependencias innecesarias en la plantilla de inicio y en el
// servicio de obviedad, lo vamos a dejar aquí.

// Este archivo se llama `_posts.js` en lugar de` posts.js`, porque
// no queremos crear una ruta `/ blog / posts` - la principal
// El subrayado le dice a Sapper que no haga eso.
/* import URL from "../../strapi/URL"
import getCategorias from "../../strapi/getCategorias"
export default async () => {
  let categorias = ""
  categorias = await getCategorias()
  categorias = flattenProducts(categorias)
  return categorias
}

function flattenProducts(data) {
  return data.map((item, index) => {
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


} */

/* 
ESTABA PLANTEADO PARA HACERLO AQUI, PERO UNA MJEOR MANERA
ES DESDE STRAPI/GETCATEGORIAS.JS
*/