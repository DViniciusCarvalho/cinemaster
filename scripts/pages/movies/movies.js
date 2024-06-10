import { changeMoviesList } from "./functions/changeMoviesList.js";
import { addFilterSelectListeners } from "./functions/addFilterSelectListeners.js";
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
} from "../../constants.js";

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


function init() {
    changeMoviesList(ALL_WEEK_MOVIES);
    addFilterSelectListeners(ALL_WEEK_MOVIES);
}

document.addEventListener('DOMContentLoaded', () => init());