import { 	
    knyMugenTrain,
	dbsBroly,
	opStampede,
	pkmFirstMovie,
	silentVoice,
	saoOrdinalScale,
	opZ,
	dgmAdventure,
	ygohDarkSide,
	nrtsWillOfFire,
	bnhWorldHeroes,
	jjk0 
} from "../../../constants.js";

const ALL_WEEK_MOVIES = [
    knyMugenTrain,
	dbsBroly,
	opStampede,
	pkmFirstMovie,
	silentVoice,
	saoOrdinalScale,
	opZ,
	dgmAdventure,
	ygohDarkSide,
	nrtsWillOfFire,
	bnhWorldHeroes,
	jjk0
];

function getMovieBySinopseLinkId(sinopseLinkId) {
    const movieData = ALL_WEEK_MOVIES.find(function(movie) {
        return movie.sinopseLinkId === sinopseLinkId
    });

    return movieData;
}

export { getMovieBySinopseLinkId }