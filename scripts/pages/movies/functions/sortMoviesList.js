function sortMoviesList(moviesList, by = 'alphabetic-order') {
    const objectifiedMoviesList = moviesList.map(
        function(movie) {
            return Object.assign({}, movie)
        }
    );

    let sortFunction = null;

    if (by === 'alphabetic-order') {
        sortFunction = function(a, b) {
            return a.name.localeCompare(b.name);
        }
    }
    else if (by === 'rating') {
        sortFunction = function(a, b) {
            return a.rating - b.rating;
        }
    }
    else if (by === 'duration') {
        sortFunction = function(a, b) {
            return a.duration.minutes - b.duration.minutes;
        }
    }
    else if (by === 'classification') {
        sortFunction = function(a, b) {
            return a.classification.age - b.classification.age;
        }
    }

    const sortedMoviesList = objectifiedMoviesList.sort(sortFunction);
    
    return sortedMoviesList;
}

export { sortMoviesList }