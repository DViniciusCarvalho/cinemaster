import { 
    RATING_STARS_MAX_NUMBER,
	RATING_STAR_MAPPING_VOID_ID,
	RATING_STAR_MAPPING_FULL_ID,
	RATING_STAR_MAPPING_HALF_ID
} from '../constants.js';
import { getDomainURL } from './getDomainURL.js';


/* Para cada avaliação (ex.: 4.8), a função retorna uma representação em números dos estados das estrelas (ex.: 3.5 seria 11120, sendo '1' uma estrela completa, '2' uma estrela pela metade e '0' uma estrela vazia */

function getRatingStarMapList(movieRating) {
    
    const movieRatingInteger = Math.floor(movieRating);
    const hasDecimalPart = movieRating > movieRatingInteger;

    const starsMap = [];

    if (movieRating == 0) {
        starsMap.push(
            RATING_STAR_MAPPING_VOID_ID,
            RATING_STAR_MAPPING_VOID_ID,
            RATING_STAR_MAPPING_VOID_ID,
            RATING_STAR_MAPPING_VOID_ID,
            RATING_STAR_MAPPING_VOID_ID
        );
    }    
    else if (movieRating < 1) {
        starsMap.push(
            RATING_STAR_MAPPING_HALF_ID        ,
            RATING_STAR_MAPPING_VOID_ID,
            RATING_STAR_MAPPING_VOID_ID,
            RATING_STAR_MAPPING_VOID_ID,
            RATING_STAR_MAPPING_VOID_ID
        );
    }
    else if (hasDecimalPart) {
        for (let i = 0; i < movieRatingInteger; i++) {
            starsMap.push(RATING_STAR_MAPPING_FULL_ID);
        }

        starsMap.push(2);
        const starMapLength = starsMap.length;

        for (let i = 0; i < (RATING_STARS_MAX_NUMBER - starMapLength); i++) {
            starsMap.push(RATING_STAR_MAPPING_VOID_ID);
        }

    }
    else {
        for (let i = 0; i < movieRatingInteger; i++) {
            starsMap.push(RATING_STAR_MAPPING_FULL_ID);
        }

        const starMapLength = starsMap.length;

        for (let i = 0; i < (RATING_STARS_MAX_NUMBER - starMapLength); i++) {
            starsMap.push(RATING_STAR_MAPPING_VOID_ID);
        }
    }

    return starsMap;
}

function setMovieRatingStars(
    movieRating, 
    ratingStarLabelElement,
    ratingStarElements
) {
    const ratingStarElementsList = Array.from(ratingStarElements);

    const starMapList = getRatingStarMapList(movieRating);

    ratingStarLabelElement.innerText = movieRating;

    for (let i = 0; i < RATING_STARS_MAX_NUMBER; i++) {
        const starElement = ratingStarElementsList[i];
        const starMapValue = starMapList[i];
	const isGithub = getDomainURL().endsWith('.github.io');

        if (starMapValue == RATING_STAR_MAPPING_VOID_ID) {
            starElement.src =  `${isGithub? '' : './../..'}./images/icons/rating-void.png`;
        }
        else if (starMapValue == RATING_STAR_MAPPING_FULL_ID) {
            starElement.src =  `${isGithub? '' : './../..'}./images/icons/rating-full.png`;
        }
        else if (starMapValue == RATING_STAR_MAPPING_HALF_ID) {
            starElement.src =  `${isGithub? '' : './../..'}./images/icons/rating-half.png`;
        }
    }
}

export { setMovieRatingStars }
