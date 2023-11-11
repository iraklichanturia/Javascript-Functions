function fillArrayWithRandomNumbers(arr) {
    for (let i = 0; i < 20; i++) {
        arr.push(Math.floor(Math.random() * 100));
    }
}

// Create an empty array
let myArray = [];

// Call the function with the array as the argument
fillArrayWithRandomNumbers(myArray);

// Now, myArray contains 20 random numbers
console.log(myArray);
