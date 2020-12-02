 import fetch from "node-fetch";
 import URL from "./URL"
 async function getServicios() {
   let response = await fetch(`${URL}/servicios`)
   return response.json()
 }

 function flattenProducts(data) {
   return data.map((item) => {
     let portada = URL + item.portada.url
     let categoria = URL + item.categoria.portada.url
     return {
       ...item,
       portada,
       categoria
     }
   });
 }
 getServicios()
 export default async () => {
   let servicios = ""
   servicios = await getServicios()
   servicios = flattenProducts(servicios)
   return servicios
 }