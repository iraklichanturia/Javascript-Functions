//create function which take the array of 20 random numbers as parameter
//and print even numbers which is in this array

function randomEvenNumbers(arr) {
  var randNum = [];
  randNum.push(Math.floor(Math.random() * 100));
  for (let i = 0; i < 20; i++) {
    if (i % 2 == 0) {
      arr.push(i);
    }
  }
}

let evenNum = [];
randomEvenNumbers(evenNum);
console.log("Random Even Numbers: ", evenNum);

// function randomEvenNumbers(arr, count) {
//     for (let i = 0; i < count; i++) {
//         let num = Math.floor(Math.random() * 100);
//         if (num % 2 === 0) {
//             arr.push(num);
//         }
//     }
// }

// let evenNum = [];
// randomEvenNumbers(evenNum, 20);
// console.log("Random Even Numbers: ", evenNum);


