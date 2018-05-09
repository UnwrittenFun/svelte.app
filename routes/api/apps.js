import apps from '../../apps.json';

const contents = JSON.stringify(apps);

export function get(req, res) {
	res.writeHead(200, {
		'Content-Type': 'application/json'
	});

	res.end(contents);
}