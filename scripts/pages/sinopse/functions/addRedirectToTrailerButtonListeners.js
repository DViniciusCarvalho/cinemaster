function addRedirectToTraileButtonListeners() {
    const trailerButton = document.getElementById('movie-trailer-button');

    trailerButton.addEventListener('click', () => {
        const movieMoreInfoSectionButton = document.getElementById('more-movie-info-button');
        movieMoreInfoSectionButton.click();

        const currentUrl = window.location.href;
        const currentUrlWithoutIds = currentUrl.split('#')[0];
        const redirectToTrailerElementUrl = currentUrlWithoutIds + '#' + 'movie-trailer'

        window.location.href = redirectToTrailerElementUrl;
    });
}

export { addRedirectToTraileButtonListeners }