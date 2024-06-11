/* 
Cria a seguinte estrutura HTML:
<div class="movie-wrapper">
    <img alt="movie poster image" class="movie-poster">
    <abbr class="movie-name">
        <p></p>
    </abbr>
    <div class="movie-info-wrapper">
        <div class="rating-wrapper">
            <img class="rating-star" src="images/rating-void.png" alt="rating star icon">
            <img class="rating-star" src="images/rating-void.png" alt="rating star icon">
            <img class="rating-star" src="images/rating-void.png" alt="rating star icon">
            <img class="rating-star" src="images/rating-void.png" alt="rating star icon">
            <img class="rating-star" src="images/rating-void.png" alt="rating star icon">
            <span class="rating-label">0</span>
        </div>
        <a class="sinopse-button">SINOPSE</a>
    </div>
</div>
*/

function createMovieCard(movieData) {
    const movieWrapper = document.createElement('li');
    movieWrapper.classList.add('movie-wrapper')

    const moviePosterImage = document.createElement('img');
    moviePosterImage.classList.add('movie-poster');
    movieWrapper.appendChild(moviePosterImage);

    const movieNameAbbr = document.createElement('abbr');
    movieNameAbbr.classList.add('movie-name');
    const movieNameParagraph = document.createElement('p');
    movieWrapper.appendChild(movieNameAbbr);
    movieNameAbbr.appendChild(movieNameParagraph);

    const movieInfoWrapper = document.createElement('div');
    movieInfoWrapper.classList.add('movie-info-wrapper');
    movieWrapper.appendChild(movieInfoWrapper);

    const ratingWrapper = document.createElement('div');
    ratingWrapper.classList.add('rating-wrapper');
    movieInfoWrapper.appendChild(ratingWrapper);

    const ratingStarElements = [];

    for (let i = 0; i < 5; i++) {
        const ratingStar = document.createElement('img');
        ratingStar.classList.add('rating-star');
        ratingWrapper.appendChild(ratingStar);
        ratingStarElements.push(ratingStar);
    }

    const ratingLabel = document.createElement('span');
    ratingLabel.classList.add('rating-label');
    ratingWrapper.appendChild(ratingLabel);

    const sinopseButton = document.createElement('a');
    sinopseButton.classList.add('sinopse-button');
    sinopseButton.textContent = 'SINOPSE';
    movieInfoWrapper.appendChild(sinopseButton);

    return movieWrapper;
}

export { createMovieCard }