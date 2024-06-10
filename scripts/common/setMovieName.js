function setMovieName(name, nameElement) {
    const movieNameParagraph = nameElement.firstChild;

    nameElement.title = name;
    movieNameParagraph.textContent = name;
}

export { setMovieName }