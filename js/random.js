/**
 * Returns a random number between two numbers.
 *
 * @param {number} lower - The lowest number value.
 * @param {number} upper - The highest number value.
 * @return {number} The random number value.
 */

// Set up a arrow function for the random number challenge. Throwing lower and upper as parameters and implemented them in the block. Went back and set 'default values' for both to experiment

// const randoNumbers = (lower = 10, upper = 1000) => {
//     return Math.floor(Math.random() * (upper - lower + 1)) + lower;
// };

// Same code as Function Dec

function randoNumbers(lower, upper) {
    return Math.floor(Math.random() * (upper - lower + 1)) + lower;
}

// Same code as Function Exp

// const randoNumbers = function(lower, upper) {
//     return Math.floor(Math.random() * (upper - lower + 1)) + lower;
// };

// Call the function and pass it different values

console.log(randoNumbers(1,10));
console.log(`${randoNumbers(15, 90)} is a random number between 10 and 1000!`);
console.log(randoNumbers(5, 1000));