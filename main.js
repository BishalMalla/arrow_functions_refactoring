//Refactor the below functions using Arrow Functions
//You got dis!
let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// CHALLENGE #1:
// Refactor helloWorld!
let helloWorld = function () {
  return "Hello World!";
}


// CHALLENGE #2:
// Oh dang, look at that HOF filtering odd numbers...
// Refactor filterOdds to a thick arrow function!
let filterOdds = function(number) {
  return number % 2;
}


//No touch:
let oddNumbers = numbers.filter(filterOdds);





module.exports = {
helloWorld,
oddNumbers,
filterOdds,
}
