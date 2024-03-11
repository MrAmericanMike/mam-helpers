import { it, expect, vitest } from "vitest";

import { getEditDistance, getRandomNumber, getRandomBoolean, getRandomElement, shuffleArray, capitalizeFirstLetter, capitalizeEachWord } from "../src/main";

it("Should return a random boolean", () => {
	vitest.spyOn(global.Math, "random").mockReturnValue(0.5);
	const BOOL = getRandomBoolean();
	expect(BOOL).toBeTruthy();
	vitest.spyOn(global.Math, "random").mockRestore();

	const BOOL_2 = getRandomBoolean();
	expect(typeof BOOL_2).toBe("boolean");
});

it("Should return a random number between 1 and 10", () => {
	vitest.spyOn(global.Math, "random").mockReturnValue(0.5);
	const NUMBER = getRandomNumber(1, 10);
	expect(NUMBER).toEqual(6);
	vitest.spyOn(global.Math, "random").mockRestore();

	const NUMBER_2 = getRandomNumber(1, 10);
	expect(NUMBER_2).toBeGreaterThanOrEqual(1);
	expect(NUMBER_2).toBeLessThanOrEqual(10);
});

it("Should return distance between 2 words", () => {
	const DISTANCE = getEditDistance("HELLO", "HOLLO");
	expect(DISTANCE).toEqual(1);
});

it("Should return a random element from an array", () => {
	const ARRAY = [1, 2, 3, 4, 5];
	vitest.spyOn(global.Math, "random").mockReturnValue(0.5);
	const ELEMENT = getRandomElement(ARRAY);
	expect(ELEMENT).toEqual(ARRAY[Math.floor(ARRAY.length * 0.5)]);
	vitest.spyOn(global.Math, "random").mockRestore();

	const EMPTY_ARRAY: number[] = [];
	const ELEMENT_2 = getRandomElement(EMPTY_ARRAY);
	expect(ELEMENT_2).toBeUndefined();
});

it("Should shuffle array elements", () => {
	const array = [1, 2, 3, 4, 5];
	const shuffledArray = shuffleArray(array);
	expect(shuffledArray).not.toEqual(array);

	// Check if all elements from original array are present in the shuffled array
	array.forEach((element) => {
		expect(shuffledArray.includes(element)).toBeTruthy();
	});
});

it("Should return an empty array when given an empty array", () => {
	const array: number[] = [];
	const shuffledArray = shuffleArray(array);
	expect(shuffledArray).toEqual([]);
});

it("Should capitalize first letter", () => {
	const string = "hello world";
	const capitalizedString = capitalizeFirstLetter(string);
	expect(capitalizedString).toEqual("Hello world");
});

it("Should capitalize each word", () => {
	const string = "hello world";
	const capitalizedString = capitalizeEachWord(string);
	expect(capitalizedString).toEqual("Hello World");
});
