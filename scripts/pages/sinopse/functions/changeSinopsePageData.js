import { setMovieClassification } from "../../../common/setMovieClassification.js";
import { setMovieDuration } from "../../../common/setMovieDuration.js";
import { setMovieGenre } from "../../../common/setMovieGenre.js";
import { setMovieMainTitle } from "../../../common/setMovieMainTitle.js";
import { setMoviePosterImage } from "../../../common/setMoviePosterImage.js";
import { setMovieSinopseText } from "../../../common/setMovieSinopseText.js";


const mainTitle = document.getElementById('movie-name');
const moviePoster = document.getElementById('movie-poster');
const movieGenre = document.getElementById('movie-genre');
const movieDuration = document.getElementById('movie-duration');
const movieClassification = document.getElementById('movie-classification');
const movieSinopse = document.getElementById('sinopse-text')

function changeSinopePageData(movieData) {
    setMovieMainTitle(movieData.name, mainTitle);
    setMoviePosterImage(movieData.imageURL, moviePoster);
    setMovieGenre(movieData.genre, movieGenre);
    setMovieDuration(movieData.duration, movieDuration);
    setMovieClassification(movieData.classification, movieClassification);
    setMovieSinopseText(movieData.sinopse, movieSinopse);
}

export { changeSinopePageData }