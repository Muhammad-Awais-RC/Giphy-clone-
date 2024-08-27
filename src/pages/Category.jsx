import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { GifState } from "../context/gifContext";
import Gif from "../components/Gif";
import FollowOn from "../components/FollowOn";

const Category = () => {
	const [searchResults, setSearchResults] = useState([]);

	const { gf } = GifState();

	const { category } = useParams();

	const fetchSearchResults = async () => {
		const { data } = await gf.gifs(category, category);

		setSearchResults(data);
	};

	useEffect(() => {
		fetchSearchResults();
	}, [category]);

	return (
		<div className="flex flex-col sm:flex-row gap-5 my-4">
			<div className="w-full sm:w-72">
				{searchResults.length > 0 && <Gif gif={searchResults[0]} />}
				<span className="text-gray-400 text-sm pt-2">
					Don&apos;t tell it to me, GIF it to me!
				</span>
				<FollowOn />
				<div className="divider" />
			</div>
			<div>
				<h2 className="text-4xl pb-1 font-extrabold capitalize">
					{category.split("-").join(" & ")} Gifs
				</h2>
				<h2 className="text-lg text-gray-400 pb-3 font-bold hover:text-gray-50 cursor-pointer">
					@{category}
				</h2>

				{searchResults.length > 0 && (
					<div className="columns-2 md:columns-3 lg:columns-4 xl:columns-5 gap-2">
						{searchResults.slice(1).map((gif) => (
							<Gif gif={gif} key={gif.id} />
						))}
					</div>
				)}
			</div>
		</div>
	);
};

export default Category;
