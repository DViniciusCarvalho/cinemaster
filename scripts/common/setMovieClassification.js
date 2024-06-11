import { CLASSIFICATION_COLORS } from "../constants.js";


function getClassificationColor(age, classificationColorsMap) {
    const ageClassification = classificationColorsMap.find(
        function(classificationColorMap) {
            return classificationColorMap.age === age;
        }
    );

    return ageClassification.color;
}

function setMovieClassification(classification, classificationElement) {
    const classificationAge = classification.age;
    
    if (classificationAge === 0) {
        classificationElement.textContent = 'L';
    }
    else {
        classificationElement.textContent = classificationAge;
    }

    classificationElement.style.backgroundColor = getClassificationColor(
        classificationAge,
        CLASSIFICATION_COLORS
    );

}

export { setMovieClassification }