//ფუნქცია რომელსაც პარამეტრის სახით გადასცემთ რიცხვების რაოდენობას და ეს ფუნქცია დააბრუნებს მასივს რომელიც შევსებული
//იქნება იმ რაოდენობის რენდომული რიცხვებით რაც მომხმარებელმა გადასცა ფუნქციას
function randomArray(arr, count){
    for (let i = 0; i < count; i++){
        arr.push(Math.floor(Math.random() * 100));
    }
}

let newArray = [];
randomArray(newArray, 10);
console.log('Generated array:', newArray);