import getServicios from "../../strapi/getServicios"
import URL from "../../strapi/URL"
let servicios;
async function setServicios() {
	servicios = await getServicios()
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