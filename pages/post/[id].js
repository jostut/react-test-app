import { readFile } from "node:fs/promises";

export const getServerSideProps = async (context) => {
	const file = JSON.parse(await readFile("./pages/posts.json"));
	return {
		props: {
			post: file.find((f) => {
				return f.id == context.params.id;
			}),
		},
	};
};

export default function postPage(props) {
	return (
		<div>
			from postPage {router.query.id} {props.hi}
		</div>
	);
}
