import { changeMovieProgrammingSection } from "./changeMovieProgrammingSection.js";
import { WEEK_PROGRAMMING } from "../../../constants.js";
import { changeMovieSinopsePagePreview } from "./changeMovieSinopsePagePreview.js";
import { changeMovieMoreInfoSection } from "./changeMovieMoreInfoSection.js";


function changeMovieSinopePageData(movieData) {
    changeMovieSinopsePagePreview(movieData);
    changeMovieProgrammingSection(movieData, WEEK_PROGRAMMING);
    changeMovieMoreInfoSection(movieData);
}

export { changeMovieSinopePageData }