import { Movie } from './Movie';

export enum SortOption {
	Episode,
	Year
}

export const sortByOption = (option: SortOption, movies: Movie[]) => {
	switch (option) {
		case SortOption.Episode:
			return movies.sort((a, b) => a.epidodeId - b.epidodeId);
		case SortOption.Year:
			return movies.sort((a, b) => {
				if (a.releaseDate > b.releaseDate) {
					return 1;
				}

				return -1;
			});
	}
};
