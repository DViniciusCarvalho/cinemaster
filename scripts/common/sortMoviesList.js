function sortMoviesList(moviesList, sortBy = 'alphabetic-order') {
    /* Converte todos os objetos do tipo 'Movie' para o tipo 'Object' */
    const objectifiedMoviesList = moviesList.map(
        function(movie) {
            return Object.assign({}, movie)
        }
    );

    /* A variável 'sortFunction' recebe uma função de ordenação correspondente com base no valor da variável 'sortBy'*/
    let sortFunction = null;

    if (sortBy === 'alphabetic-order') {
        /* Ordenação por ordem alfabética */
        sortFunction = function(a, b) {
            return a.name.localeCompare(b.name);
        }
    }
    else if (sortBy === 'rating') {
        /* Ordenação por avaliação */
        sortFunction = function(a, b) {
            return a.rating - b.rating;
        }
    }
    else if (sortBy === 'duration') {
        /* Ordenação por duação (minutos) */
        sortFunction = function(a, b) {
            return a.duration.minutes - b.duration.minutes;
        }
    }
    else if (sortBy === 'classification') {
        /* Ordenação por classificação (idade) */
        sortFunction = function(a, b) {
            return a.classification.age - b.classification.age;
        }
    }

    const sortedMoviesList = objectifiedMoviesList.sort(sortFunction);
    
    return sortedMoviesList;
}

export { sortMoviesList }