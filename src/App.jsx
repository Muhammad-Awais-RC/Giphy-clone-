import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AppLayout from "./layouts/AppLayout";
import Home from "./pages/Home";
import GifPage from "./pages/GifPage";
import Category from "./pages/Category";
import Search from "./pages/Search";
import Favorites from "./pages/Favorites";
import GifProvider from "./context/gifContext";

const router = createBrowserRouter([
	{
		element: <AppLayout />,

		children: [
			{
				path: "/",
				element: <Home />,
			},
			{
				path: "/:type/:slug",
				element: <GifPage />,
			},
			{
				path: "/:category",
				element: <Category />,
			},
			{
				path: "/search/:query",
				element: <Search />,
			},
			{
				path: "/favorites",
				element: <Favorites />,
			},
		],
	},
]);

function App() {
	return (
		<GifProvider>
			<RouterProvider router={router} />
		</GifProvider>
	);
}

export default App;
