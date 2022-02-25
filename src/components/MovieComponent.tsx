import React from 'react';
import { Movie } from '../models/Movie';

type Props = {
	movie: Movie;
	setSelectedMovie: (movie: Movie | undefined) => void;
	selectedMovie: Movie | undefined;
};

const MovieComponent = (props: Props) => {
	return (
		<div
			className="singleMovie"
			onClick={(e) => props.setSelectedMovie(props.movie)}
			style={{
				backgroundColor:
					props.selectedMovie &&
					props.selectedMovie.epidodeId === props.movie.epidodeId
						? 'beige'
						: 'white'
			}}
		>
			<div className="episodeContainer">
				{`EPISODE ${props.movie.epidodeId}`}
			</div>
			<div className="titleContainer">{props.movie.title}</div>
			<div className="dateContainer">{props.movie.releaseDate}</div>
		</div>
	);
};

export default MovieComponent;
