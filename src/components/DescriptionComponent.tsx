import React from 'react';
import { Movie } from '../models/Movie';

type Props = {
	selectedMovie: Movie | undefined;
};

const DescriptionComponent = (props: Props) => {
	return (
		<div className="movieDescriptionContainer">
			<div
				className={
					props.selectedMovie ? 'withMovieDescription' : 'noMovieDescription'
				}
			>
				{props.selectedMovie ? (
					<>
						<div className="movieDescriptionTitle">
							{props.selectedMovie.title}
						</div>
						<div className="movieDescriptionText">
							{props.selectedMovie.description}
						</div>
						<div className="movieDescriptionDirector">
							{`Directed by: ${props.selectedMovie.director}`}
						</div>
					</>
				) : (
					'No Movie Selected'
				)}
			</div>
		</div>
	);
};

export default DescriptionComponent;
