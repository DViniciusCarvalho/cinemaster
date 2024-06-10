

function setMovieClassification(classification, classificationElement) {
    const classificationAge = classification.age;
    
    if (classificationAge === 0) {
        classificationElement.textContent = 'L';
        classificationElement.style.backgroundColor = 'green';
    }
    else {
        classificationElement.textContent = classificationAge;
        classificationElement.style.backgroundColor = 'red';
    }

}

export { setMovieClassification }