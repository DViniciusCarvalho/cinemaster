function getCapitalizedWord(word) {
    const wordFirstLetter = word.charAt(0);
    const wordFirstLetterUpperCase = wordFirstLetter.toUpperCase();
    const wordWithoutFirstLetter = word.slice(1);

    return wordFirstLetterUpperCase + wordWithoutFirstLetter;
}

export { getCapitalizedWord }