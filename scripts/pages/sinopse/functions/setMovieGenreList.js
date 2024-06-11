import { getMovieGenreList } from "../../../common/getMovieGenreList.js";

function createMovieGenreElement(genre) {
    const movieGenreItem = document.createElement('span');
    movieGenreItem.textContent = genre;

    return movieGenreItem;
}

function setMovieGenreList(genreList, genreListElement) {
    genreList = getMovieGenreList(genreList);
    for (let genre of genreList) {
        const movieGenreItem = createMovieGenreElement(genre.toUpperCase());
        genreListElement.appendChild(movieGenreItem);
    }
}

export { setMovieGenreList }