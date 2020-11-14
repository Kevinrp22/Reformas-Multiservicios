import getServicios from "../../strapi/getServicios"
let lookup;

async function setServicios() {
	let servicios = await getServicios();
	lookup = new Map();
	servicios.forEach((post) => {
		lookup.set(post.url, JSON.stringify(post));
	});
}

setServicios();

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