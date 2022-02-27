import { numToRoman } from '../services/general';

export class Movie {
	title: string;
	epidodeId: number;
	description: string;
	releaseDate: string;
	director: string;

	constructor(
		title: string,
		epidodeId: number,
		description: string,
		releaseDate: string,
		director: string
	) {
		this.title = title;
		this.description = description;
		this.epidodeId = epidodeId;
		this.releaseDate = releaseDate;
		this.director = director;
	}

	static fromJson(json: any) {
		return new Movie(
			`Episode ${numToRoman(json.episode_id)} - ${json.title}`,
			json.episode_id,
			json.opening_crawl,
			json.release_date,
			json.director
		);
	}
}
