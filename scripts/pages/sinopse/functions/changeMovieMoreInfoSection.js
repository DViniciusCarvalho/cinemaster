import { setMovieTrailer } from "../../../common/setMovieTrailer.js";
import { setMovieGenreList } from "./setMovieGenreList.js";
import { setMovieClassification } from "../../../common/setMovieClassification.js";
import { setMovieClassificationText } from "../../../common/setMovieClassificationText.js";
import { setMovieDurationMinutes } from "../../../common/setMovieDurationMinutes.js";
import { setMovieSinopseText } from "../../../common/setMovieSinopseText.js";
import { setMovieDirection } from "../../../common/setMovieDirection.js";
import { setMovieCast } from "../../../common/setMovieCast.js";
 
const movieTrailer = document.getElementById('movie-trailer');
const movieGenreList = document.getElementById('movie-genre-list');
const movieClassification = document.getElementById('movie-classification-more-info');
const movieClassificationMessage = document.getElementById('movie-classification-message');
const movieDuration = document.getElementById('more-info-movie-duration');
const movieSinopse = document.getElementById('more-info-movie-sinopse');
const movieDirection = document.getElementById('more-info-movie-direction');
const movieCast = document.getElementById('more-info-movie-cast');


function changeMovieMoreInfoSection(movieData) {
    setMovieTrailer(movieData.trailerURL, movieTrailer);
    setMovieGenreList(movieData.genre, movieGenreList);
    setMovieClassification(movieData.classification, movieClassification);
    setMovieClassificationText(
        movieData.classification.message, 
        movieClassificationMessage
    );
    setMovieDurationMinutes(movieData.duration, movieDuration);
    setMovieSinopseText(movieData.sinopse, movieSinopse);
    setMovieDirection(movieData.direction, movieDirection);
    setMovieCast(movieData.cast, movieCast);
}

export { changeMovieMoreInfoSection }