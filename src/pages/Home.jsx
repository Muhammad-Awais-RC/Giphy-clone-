import { useEffect } from "react";
import Gif from "../components/Gif";
import { GifState } from "../context/gifContext";
import FilterGif from "../components/FilterGif";

const Home = () => {
	const { gf, gifs, setGifs, filter } = GifState();

	const fetchTrendingGIFs = async () => {
		const { data } = await gf.trending({
			limit: 30,
			type: filter,
			rating: "g",
		});

		setGifs(data);
	};

	useEffect(() => {
		fetchTrendingGIFs();
	}, [filter]);

	return (
		<div>
			<img src="/banner.gif" alt="banner" className="rounded mt-4 w-full" />

			{/* Filter Gifs */}
			<FilterGif showTrending={true} />

			{/* Gifs Container */}
			<div className="columns-2 md:columns-3 lg:columns-4 xl:columns-5 gap-2">
				{gifs.map((gif, i) => (
					<Gif key={gif.title + Date.now() + i} gif={gif} />
				))}
			</div>
		</div>
	);
};

export default Home;
