import { readFile } from "node:fs/promises";

export default async function (request, response) {
	const file = JSON.parse(await readFile("./pages/posts.json"));
	console.log(file);
	return response.status(200).json(file);
}
