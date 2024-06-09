function setMoviePosterImage(image) {
    const moviePosterElement = document.getElementById('movie-poster');
    moviePosterElement.src = image;
}


export { setMoviePosterImage }