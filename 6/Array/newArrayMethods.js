var fruits = ["apple", "strawberry", "banana", "orange", "mango"];

const firstTest = fruits.every(fruit => typeof fruit === "string");

console.log(firstTest);

const secondTest = fruits.some(fruit => fruit.charAt(0) === 'a');

console.log(secondTest);

const filteredArray = fruits.filter(fruit=> fruit.charAt(0) === "b" || fruit.charAt(0) === "s");

console.log(filteredArray);

const iLikeFruits = fruits.map(fruit=> `I like ${fruit}`);

console.log(iLikeFruits);