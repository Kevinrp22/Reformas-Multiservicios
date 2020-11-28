import getCategorias from "../../strapi/getCategorias"
import URL from "../../strapi/URL"
let categorias;
async function setCategorias() {
	categorias = await getCategorias()
	categorias = JSON.stringify(categorias.map(post => {
		return {
			titulo: post.titulo,
			url: post.url,
			portada: `${URL}${post.portada.url}`
		};
	}));
}
setCategorias()
export function get(req, res) {
	res.writeHead(200, {
		'Content-Type': 'application/json'
	});

	res.end(categorias);
}