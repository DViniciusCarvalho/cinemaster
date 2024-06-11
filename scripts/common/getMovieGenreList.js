function getMovieGenreList(genre) {
    const genresList = genre.split(', ');
    return genresList;
}

export { getMovieGenreList }