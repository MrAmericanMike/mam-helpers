/**
 * Calculates the Levenshtein distance between two strings.
 *
 * Levenshtein distance, also known as edit distance, is a measure of difference between two sequences.
 * It's defined as the minimum number of single-character edits (insertions, deletions or substitutions)
 * required to change one word into the other.
 *
 * @param {string} a - The first string to compare.
 * @param {string} b - The second string to compare.
 * @returns {number} - The Levenshtein distance between the two input strings.
 */
export const getEditDistance = (a: string, b: string): number => {
	if (a.length == 0) return b.length;
	if (b.length == 0) return a.length;

	let MATRIX: number[][] = [];
	let i: number;
	let j: number;

	for (i = 0; i <= b.length; i++) {
		MATRIX[i] = [i];
	}

	for (j = 0; j <= a.length; j++) {
		MATRIX[0][j] = j;
	}

	for (i = 1; i <= b.length; i++) {
		for (j = 1; j <= a.length; j++) {
			if (b.charAt(i - 1) == a.charAt(j - 1)) {
				MATRIX[i][j] = MATRIX[i - 1][j - 1];
			} else {
				MATRIX[i][j] = Math.min(MATRIX[i - 1][j - 1] + 1, Math.min(MATRIX[i][j - 1] + 1, MATRIX[i - 1][j] + 1));
			}
		}
	}
	return MATRIX[b.length][a.length];
};

/**
 * Returns a random boolean value
 *
 * @returns {boolean} - A random boolean value. It returns true if the randomly generated number is greater or equal to 0.5, false otherwise.
 */
export const getRandomBoolean = (): boolean => {
	return Math.random() >= 0.5;
};

/**
 * Generates a random number between min and max inclusive.
 * Throws an error if min and max are not defined or are not numbers,
 * or if min is greater than or equal to max.
 * @param {number} min - The lower bound for the random number.
 * @param {number} max - The upper bound for the random number.
 * @returns {number} - A random number between min and max inclusive.
 */
export const getRandomNumber = (min: number, max: number): number => {
	if (min === null || min === undefined || max === null || max === undefined) {
		throw new Error("min and max need to be defined");
	} else if (isNaN(min) || isNaN(max)) {
		throw new Error("min and max should be numbers");
	} else if (min > max) {
		throw new Error("min should be the lower than max");
	} else if (min === max) {
		throw new Error("min should be different from max");
	}
	return Math.floor(Math.random() * (max - min + 1)) + min;
};

/**
 * Returns a random element from an array.
 *
 * @param {Array} array - The array to pick a random element from.
 * @returns {any} A random element from the array. Returns undefined if the array is empty.
 */
export const getRandomElement = <T>(array: T[]): T | undefined => {
	if (array.length === 0) return undefined;
	return array[Math.floor(Math.random() * array.length)];
};

/**
 * Shuffles an array using Fisher-Yates algorithm.
 *
 * @param {Array} array - The array to shuffle.
 * @returns {Array} New array shuffled.
 */
export const shuffleArray = <T>(array: T[]): T[] => {
	const arrayCopy = [...array];
	for (let i = arrayCopy.length - 1; i > 0; i--) {
		const j = Math.floor(Math.random() * (i + 1));
		[arrayCopy[i], arrayCopy[j]] = [arrayCopy[j], arrayCopy[i]];
	}
	return arrayCopy;
};

