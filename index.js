// Task 1: Using forEach()
let cities = ["Paris", "Tokyo", "New York", "Istanbul", "Barcelona"];
cities.forEach(city => console.log(city.toUpperCase()));

let numbers = [1, 2, 3, 4, 5];
let squares = numbers.map(n => n * n);
console.log(squares);
let scores = [85, 42, 90, 75, 30, 100];
let highScores = scores.filter(score => score >= 80);
console.log(highScores);

let favoriteFood = ["Pizza", "Egg", "Burger", "Rice", "Salad", "Soup"];
let foodWithMoreThanFourLetters = favoriteFood.find(food => food.length > 4);
let foodIndex = favoriteFood.findIndex(food => food.length > 4);
console.log(foodWithMoreThanFourLetters); 
console.log(foodIndex); 
