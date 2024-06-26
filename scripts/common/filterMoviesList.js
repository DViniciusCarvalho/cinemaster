function filterMoviesList(
    moviesList, 
    filterText, 
    filterProperties = ['name', 'genre', 'direction', 'classification.age']
) {
    
    /* Converte todos os objetos do tipo 'Movie' para o tipo 'Object' */
    moviesList = moviesList.map(
        function(movie) {
            return Object.assign({}, movie)
        }
    );

    filterText = filterText.toLowerCase();

    const filteredMoviesList = [];

    /* Puxa todos os filmes que possuem o 'filterText' nas propriedades especificadas 'filterProperties' */
    for (let movie of moviesList) {
        let anyPropertieMatched = false;

        for (let propertie of filterProperties) {
            const propertieParts = propertie.split('.');
            const isSinglePropertie = propertieParts.length === 1;

            let moviePropertieValue = null;

            if (isSinglePropertie) {
                moviePropertieValue = movie[propertie];
            }
            else {
                moviePropertieValue = movie;

                for (let propertiePart of propertieParts) {
                    moviePropertieValue = moviePropertieValue[propertiePart]
                }
            }

            moviePropertieValue = String(moviePropertieValue);
            const moviePropertieValueLowerCase = moviePropertieValue.toLowerCase();

            if (moviePropertieValueLowerCase.includes(filterText)) {
                anyPropertieMatched = true;
            }
        }

        if (anyPropertieMatched) {
            filteredMoviesList.push(movie);
        }
    }

    return filteredMoviesList;
}

export { filterMoviesList }