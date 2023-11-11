// create function which takes 20 random numbers array as parameter and this function chose all numbers that are multiples of three
//and rewrite that numbers in other array which will be returned by function

function randArrMultOf3(arr) {
    for (let i = 0; i < 20; i++) {
        let randomNumber = Math.floor(Math.random() * 100);
        if (randomNumber % 3 === 0) {
            arr.push(randomNumber);
        }
    }
}

let newArray = [];
randArrMultOf3(newArray);
console.log(newArray);
