import getCategorias from "../../strapi/getServicios"
let lookup;

async function setCategorias() {
	let categorias = await getCategorias();
	lookup = new Map();
	categorias.forEach((post) => {
		lookup.set(post.url, JSON.stringify(post));
	});
}

setCategorias();

export function get(req, res, next) {
	// the `url` parameter is available because
	// this file is called [url].json.js
	const {
		url
	} = req.params;

	if (lookup.has(url)) {
		res.writeHead(200, {
			'Content-Type': 'application/json'
		});

		res.end(lookup.get(url));
	} else {
		res.writeHead(404, {
			'Content-Type': 'application/json'
		});

		res.end(JSON.stringify({
			message: `Not found`
		}));
	}
}