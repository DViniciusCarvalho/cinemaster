import { getDomainURL } from "../../getDomainURL.js";


function redirectToMoviesList(filterText) {
    const domainURL = getDomainURL();
    const isGithub = domainURL.endsWith('github.io');
    const redirectURL = `${domainURL}${isGithub? '/cinemaster' : ''}/movies.html?filterText=${filterText}`;

    window.location.href = redirectURL;
}

export { redirectToMoviesList }
