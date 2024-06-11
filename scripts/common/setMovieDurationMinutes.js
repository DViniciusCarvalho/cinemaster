function setMovieDurationMinutes(duration, durationElement) {
    durationElement.textContent = duration.minutes + ' min';
}

export { setMovieDurationMinutes }