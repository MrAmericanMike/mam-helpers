export const getEditDistance = (a: string, b: string): number => {
	if (a.length == 0) return b.length;
	if (b.length == 0) return a.length;

	let MATRIX: number[][] = [];
	let i;
	let j;

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

