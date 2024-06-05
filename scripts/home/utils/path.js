const path = require('path');

export function getImageURL(imageName) {
	const relativePath = `./images/${imageName}`;
	const absolutePath = path.resolve(relativePath);
	return absolutePath;
}