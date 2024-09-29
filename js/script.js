// Push
let CarNames = ["Lamborghini", "Bugatti", "Rolls Royce"];
CarNames.push("BMW"); // Pushes "BMW" to the end of the array
console.log(CarNames);  // Output: ["Lamborghini", "Bugatti", "Rolls Royce", "BMW"]
// Pop
let FoodNames = ["Morog Polao", "Kacchi", "Khichuri", "Kabab"];
FoodNames.pop();  // Removes "Kabab" from the end of the array
console.log(FoodNames);  // Output: ["Morog Polao", "Kacchi", "Khichuri"]
// Shift
let PcCompany = ["Asus", "Gigabyte", "Antech", "Corsair"];
PcCompany.shift();  // Removes "Asus" from the beginning of the array
console.log(PcCompany);  // Output: ["Gigabyte", "Antech", "Corsair"]
// Unshift
let Fish = ["Catfish", "Tuna", "Stingray"];
Fish.unshift("Nemo");  // Adds "Nemo" to the beginning of the array
console.log(Fish);  // Output: ["Nemo", "Tuna", "Catfish", "Stingray"]
// Concat
let Vegetables = ["Potato", "Cucumber"];
let Meat = ["Beef", "Chicken"];
let mergedArray = Vegetables.concat(Meat);  // Merges "Vegetables" and "Meat" into a new array
console.log(mergedArray);  // Output: ["Potato", "Cucumber", "Beef", "Chicken"]
// Slice
let Numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let slicedNumbers = Numbers.slice(0,5);  // Slices the first 5 elements of the array
console.log(slicedNumbers);  // Output: [1, 2, 3, 4, 5]
// Splice
let flowers = ["Rose", "Daisy", "Sunflower", "Lily"];
flowers.splice(1, 1, "Orchid", "Lavender");  // Replaces "Daisy" with "Orchid" and "Lavender"
console.log(flowers);  // Output: ["Rose", "Orchid", "Lavender", "Sunflower", "Lily"]
// Filter
let Weather = ["Sunny", "Cloudy", "Rainy"];
let currentWeather = Weather.filter((weather) => weather == "Sunny"); // Filters the array to only include "Sunny"
console.log(currentWeather); // Output: ["Sunny"]
// Find
let Numbers2 = [1 ,2 ,3 ,4 ,5 ,6 ,7 ,8 ,9 ,10];
let NumbersUnder5 = Numbers2.find((number) => number <= 5); // Finds the first number in the array that is less than or equal to 5
console.log(NumbersUnder5); // Output: 1
// Sort
let Numbers3 = [3 ,2 ,5 ,1 ,4 ,6 ,9 ,8 ,10 ,7];
let SortedNumber = Numbers3.sort(); // Sorts the array in ascending order
console.log(SortedNumber); // Output: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// Map
let Name = ["ABCDEFGHIJKLMNOPQRSTUVWXYZ"];
let Capitalized = Name.map((name) => name.toLowerCase()); // Capitalizes each letter in the array
console.log(Capitalized); // Output: ["abcdefghijklmnopqrstuvwxyz"]