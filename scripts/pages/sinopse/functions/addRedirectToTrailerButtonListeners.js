function addRedirectToTraileButtonListeners() {
    const trailerButton = document.getElementById('movie-trailer-button');

    /* Quando clicar no botão 'trailerButton', a página irá levar o usuário até o trailer do filme usando o 'id' do elemento que contém o trailer (http://localhost/sinopse.html?sinopse=filmeSinopseId#idTrailer)*/

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