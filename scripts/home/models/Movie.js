export default class Movie {
	constructor(
		name,
		sinopse,
		cast,
		direction,
		genre,
		rating,
		imageURL,
		trailerURL,
		duration,
		classification,
	) {
		this.name = name;
		this.sinopse = sinopse;
		this.cast = cast;
		this.direction = direction;
		this.genre = genre;
		this.rating = rating;
		this.imageURL = imageURL;
		this.trailerURL = trailerURL;
		this.pageLink = pageLink;
		this.duration = duration;
		this.classification = classification;
	}
}