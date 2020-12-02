import getCategorias from "../../strapi/getCategorias"
export async function get(req, res) {
	let categorias = await getCategorias()
	categorias = JSON.stringify(categorias.map(post => {
		return {
			...post
		}
	}));
	res.writeHead(200, {
		'Content-Type': 'application/json'
	});

	res.end(categorias);
}