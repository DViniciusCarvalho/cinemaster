import { 	
	MOVIES_LIST 
} from "../../../constants.js";


function getMovieBySinopseLinkId(sinopseLinkId) {
    const movieData = MOVIES_LIST.find(function(movie) {
        return movie.sinopseLinkId === sinopseLinkId
    });

    return movieData;
}

export { getMovieBySinopseLinkId }