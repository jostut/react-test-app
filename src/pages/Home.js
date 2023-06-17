import React from "react";
import { Link } from "react-router-dom";
import { usePost } from "../providers/post";

const Home = () => {
	const posts = usePost();

	return (
		<div className="home">
			<div className="posts">
				{posts.map((post) => (
					<div className="post" key={post.id}>
						<div className="content">
							<Link to={`/post/${post.id}`}>
								<h1>{post.title}</h1>
							</Link>
							<p>{post.desc}</p>
							<Link to={`/post/${post.id}`}>
								<button>Read More</button>
							</Link>
						</div>
					</div>
				))}
			</div>
		</div>
	);
};

export default Home;
