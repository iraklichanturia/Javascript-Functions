//create function which takes array and number as parameter, purpose of the function is to determine array includes or not parameter number
function checkNumber(arr, number) {
  for (var i = 0; i < arr.length; i++) {
    if (number == arr[i]) {
      return true;
    } else {
      continue;
    }
  }
  return false;
}
//test checkNumber
console.log(checkNumber([2, 3, 4, 5, 6, 7, 8, 9], 5));
