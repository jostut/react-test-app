import React from "react";

const context = React.createContext([]);

export function PostProvider({ children }) {
	const [posts, setPosts] = React.useState([]);
	React.useEffect(() => {
		fetch("/posts.json")
			.then((res) => {
				return res.json();
			})
			.then((json) => {
				setPosts(json);
			});
	}, []);

	return <context.Provider value={posts}>{children}</context.Provider>;
}

export function usePost() {
	return React.useContext(context);
}
