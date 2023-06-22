import { readFile, writeFile } from "node:fs/promises";

export default async function (request, response) {
  const file = JSON.parse(await readFile("./pages/posts.json"));
  switch (request.method) {
    case "GET":
      return response.status(200).json(file);
    case "POST":
      file.push({
        id: file.at(-1).id + 1 || 1,
        title: request.body.title,
        body: request.body.body,
      });
      await writeFile("./pages/posts.json", JSON.stringify(file));
      return response.status(201).json(file);
  }
}
