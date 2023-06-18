import React from "react";

const Home = () => {
	const [posts, setPosts] = React.useState([]);
	React.useEffect(() => {
		fetch("/api/posts")
			.then((res) => {
				return res.json();
			})
			.then((json) => {
				setPosts(json);
			});
	}, []);

	return (
		<div className="home">
			<div className="posts">
				blah
				{posts.map((post) => (
					<div className="post" key={post.id}>
						<div className="content">
							<a href={`/post/${post.id}`}>
								<h1>{post.title}</h1>
							</a>
							<p>{post.desc}</p>
							<a href={`/post/${post.id}`}>
								<button>Read More</button>
							</a>
						</div>
					</div>
				))}
			</div>
		</div>
	);
};

export default Home;
