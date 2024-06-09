function setMovieName(movieName) {
    const movieNameAbbr = document.getElementById('movie-name');
    const movieNameParagraph = movieNameAbbr.firstChild;

    movieNameAbbr.title = movieName;
    movieNameParagraph.textContent = movieName;
}

export { setMovieName }