import React, { useEffect, useState } from 'react';
import './App.css';
import Header from './components/Header';
import Main from './components/Main';
import { Movie } from './models/Movie';
import { getAllMovies } from './services/api';
import bgImage from './resources/images/background.jpg';
import { sortByOption, SortOption } from './models/SortOption';

function App() {
	const [movies, setMovies] = useState<Movie[]>([]);
	const [loading, setLoading] = useState<boolean>(true);
	const [selectedMovie, setSelectedMovie] = useState<Movie | undefined>(
		undefined
	);
	const [filter, setFilter] = useState<string>('');
	const [sortOption, setSortOption] = useState(SortOption.Year);

	useEffect(() => {
		getAllMovies().then((movies) => {
			if (movies) {
				setMovies([...movies]);
				setLoading(false);
			}
		});
	}, []);

	useEffect(() => {
		if (movies.length > 0) {
			setMovies([...sortByOption(sortOption, movies)]);
		}
	}, [sortOption]);

	return (
		<div
			className="mainContainer"
			style={{ backgroundImage: `url(${bgImage})` }}
		>
			<div className="contentContainer">
				<Header
					sortOption={sortOption}
					setSortOption={setSortOption}
					setFilter={setFilter}
				/>
				<Main
					movies={
						filter.length > 0
							? movies.filter((movie) =>
									movie.title.toLowerCase().includes(filter.toLowerCase())
							  )
							: movies
					}
					loading={loading}
					setSelectedMovie={setSelectedMovie}
					selectedMovie={selectedMovie}
				/>
			</div>
		</div>
	);
}

export default App;
