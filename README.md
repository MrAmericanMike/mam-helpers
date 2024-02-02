# MAM Helpers

WIP

Levenshtein Distance

```js
getEditDistance("Koala", "Koala"); // >> 0
getEditDistance("Koala", "Koalin"); // >> 2
```

Random Number (Both included)

```js
getRandomNumber(10, 20); // >> 15
getRandomNumber(10, 20); // >> 10
getRandomNumber(10, 20); // >> 20
```

Get Random Boolean

```js
getRandomBoolean(); // true
getRandomBoolean(); // false
```

Get Random Element from Array

```js
getRandomElement([1, 2, 3, 4, 5]); // 3
getRandomElement([1, 2, 3, 4, 5]); // 1
```

Shuffle Array (Returns a Copy not affecting the passed array)

```js
shuffleArray([1, 2, 3, 4, 5]); // [3, 2, 5, 4, 1]
```

