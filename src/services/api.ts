import { Movie } from '../models/Movie';
import { get } from './requests';

export const getAllMovies = async () => {
	const movies: Movie[] = [];
	try {
		const res = await get('https://swapi.dev/api/films/?format=json', {});
		res.data.results.forEach((movie: any) => {
			movies.push(Movie.fromJson(movie));
		});

		return movies;
	} catch (error) {
		return undefined;
	}
};
