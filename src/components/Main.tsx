import React from 'react';
import { Movie } from '../models/Movie';
import DescriptionComponent from './DescriptionComponent';
import MovieComponent from './MovieComponent';

type Props = {
	movies: Movie[];
	setSelectedMovie: (movie: Movie | undefined) => void;
	selectedMovie: Movie | undefined;
	loading: boolean;
};

const Main = (props: Props) => {
	return (
		<div className="moviesContainer">
			{props.loading ? (
				'Loading movies...'
			) : (
				<>
					<div className="moviesListContainer">
						{props.movies.map((movie) => (
							<MovieComponent
								key={movie.epidodeId}
								setSelectedMovie={props.setSelectedMovie}
								selectedMovie={props.selectedMovie}
								movie={movie}
							/>
						))}
					</div>
					<DescriptionComponent selectedMovie={props.selectedMovie} />
				</>
			)}
		</div>
	);
};

export default Main;
