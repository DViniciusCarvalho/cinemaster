
/* Separa a avaliação que é uma string de gêneros separados por vírgula (ex.: 'Genero1, Genero2, Genero3') em uma lista de gêneros (ex.: ['Genero1', 'Genero2', 'Genero3']) */

function getMovieGenreList(genre) {
    const genresList = genre.split(', ');
    return genresList;
}

export { getMovieGenreList }