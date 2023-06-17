import React from "react";
import { usePost } from "../providers/post";
import { useParams } from "react-router-dom";

const BlogPost = () => {
	const posts = usePost();
	const params = useParams();

	const post = React.useMemo(() => {
		return posts.find((p) => {
			return p.id == params.id;
		});
	}, [posts, params]);

	if (!post) return <>loading</>;
	return (
		<div>
			<h1>{post?.title}</h1>
			<p>{post?.body}</p>
		</div>
	);
};

export default BlogPost;
