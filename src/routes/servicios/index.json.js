import getServicios from "../../strapi/getServicios"
import URL from "../../strapi/URL"

export async function get(req, res) {
	let servicios = await getServicios()
	servicios = JSON.stringify(servicios.map(post => {
		return {
			titulo: post.titulo,
			url: post.url,
			portada: `${URL}${post.portada.url}`
		};
	}));
	res.writeHead(200, {
		'Content-Type': 'application/json'
	});

	res.end(servicios);
}