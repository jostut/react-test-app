import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import Blogpost from "./pages/BlogPost";
import { PostProvider } from "./providers/post";

const Layout = () => {
	return (
		<>
			<Navbar />
			<Outlet />
		</>
	);
};

const router = createBrowserRouter([
	{
		path: "/",
		element: <Layout />,
		children: [
			{
				path: "/",
				element: <Home />,
			},
			{
				path: "/post/:id",
				element: <Blogpost />,
			},
		],
	},
]);

function App() {
	return (
		<PostProvider>
			<div>
				<RouterProvider router={router} />
			</div>
		</PostProvider>
	);
}

export default App;
