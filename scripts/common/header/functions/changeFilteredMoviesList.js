function createMovieItemElement(movieData) {
    const movieItemElement = document.createElement('li');
    const movieItemRedirectLinkElement = document.createElement('a');
    const movieItemPosterElement = document.createElement('img');

    movieItemPosterElement.src = movieData.imageURL;
    movieItemRedirectLinkElement.textContent = movieData.name;
    movieItemRedirectLinkElement.href = movieData.pageLink;

    movieItemElement.appendChild(movieItemRedirectLinkElement);
    movieItemRedirectLinkElement.appendChild(movieItemPosterElement);

    movieItemRedirectLinkElement.addEventListener('click', function() {
        window.location.href = movieData.pageLink;
    })

    return movieItemElement;    
}

function changeFilteredMoviesList(moviesList) {
    
    const objectifiedMoviesList = moviesList.map(
        function(movie) {
            return Object.assign({}, movie)
        }
    );

    const moviesListElement = document.getElementById('search-filtered-movies');
    moviesListElement.innerHTML = '';

    for (let movie of objectifiedMoviesList) {
        const movieElement = createMovieItemElement(movie);
        moviesListElement.appendChild(movieElement);
    }
}

export { changeFilteredMoviesList }