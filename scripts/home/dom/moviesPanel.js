const STARS_NUMBER = 5;
const VOID_STAR_ID = 0;
const FULL_STAR_ID = 1;
const HALF_STAR_ID = 2;


function getRatingStarMapList(movieRating) {
    const movieRatingInteger = Math.floor(movieRating);
    const hasDecimalPart = movieRating > movieRatingInteger;

    const starsMap = [];

    if (movieRating == 0) {
        starsMap.push(
            VOID_STAR_ID,
            VOID_STAR_ID,
            VOID_STAR_ID,
            VOID_STAR_ID,
            VOID_STAR_ID
        );
    }    
    else if (movieRating < 1) {
        starsMap.push(
            HALF_STAR_ID        ,
            VOID_STAR_ID,
            VOID_STAR_ID,
            VOID_STAR_ID,
            VOID_STAR_ID
        );
    }
    else if (hasDecimalPart) {
        for (let i = 0; i < movieRatingInteger; i++) {
            starsMap.push(FULL_STAR_ID);
        }

        starsMap.push(2);
        const starMapLength = starsMap.length;

        for (let i = 0; i < (STARS_NUMBER - starMapLength); i++) {
            starsMap.push(VOID_STAR_ID);
        }

    }
    else {
        for (let i = 0; i < movieRatingInteger; i++) {
            starsMap.push(FULL_STAR_ID);
        }

        const starMapLength = starsMap.length;

        for (let i = 0; i < (STARS_NUMBER - starMapLength); i++) {
            starsMap.push(VOID_STAR_ID);
        }
    }

    return starsMap;
}


export function setRatingStars(movieData) {
    console.log('b')
    const ratingStarLabelElement = document.getElementsByClassName('rating-label')[0];
    const ratingStarElements = document.getElementsByClassName('rating-star');
    const ratingStarElementsList = Array.from(ratingStarElements);

    const movieRating = movieData.rating;
    const starMapList = getRatingStarMapList(movieRating);

    ratingStarLabelElement.innerText = movieRating;

    for (let i = 0; i < STARS_NUMBER; i++) {
        const starElement = ratingStarElementsList[i];
        const starMapValue = starMapList[i];

        if (starMapValue == VOID_STAR_ID) {
            starElement.src = '../../../images/rating-void.png';
        }
        else if (starMapValue == FULL_STAR_ID) {
            starElement.src = '../../../images/rating-full.png';
        }
        else if (starMapValue == HALF_STAR_ID) {
            starElement.src = '../../../images/rating-half.png';
        }
    }
}