import getCategorias from "../../strapi/getCategorias"
import URL from "../../strapi/URL"
let servicios;
async function setServicios() {
	servicios = await getCategorias()
	servicios = JSON.stringify(servicios.map(post => {
		return {
			titulo: post.titulo,
			url: post.url,
			portada: `${URL}${post.portada.url}`
		};
	}));
}
setServicios()
export function get(req, res) {
	res.writeHead(200, {
		'Content-Type': 'application/json'
	});

	res.end(servicios);
}