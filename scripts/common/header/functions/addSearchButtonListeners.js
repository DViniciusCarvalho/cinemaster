import { redirectToMoviesList } from "./redirectToMoviesList.js";


function addSearchButtonListeners() {
    const searchButton = document.getElementById('search-button');
    const searchInput = document.getElementById('search-input');

    searchButton.addEventListener('click', function() {
        const filterText = searchInput.value;
        redirectToMoviesList(filterText);
    })
}

export { addSearchButtonListeners }