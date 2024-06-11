import { getDomainURL } from "../../getDomainURL.js";


function redirectToMoviesList(filterText) {
    const domainURL = getDomainURL();
    const redirectURL = `${domainURL}/movies.html?filterText=${filterText}`;

    window.location.href = redirectURL;
}

export { redirectToMoviesList }