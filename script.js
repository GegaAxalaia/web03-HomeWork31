// 1
function sumArray(numbers) {
    let sum = 0;
    for (let i = 0; i < numbers.length; i++) {
      sum += numbers[i];
    }
    return sum;
  }
  const numbers = [71, 10, 54, 4, 53];
  const result1 = sumArray(numbers);
  console.log(result1);
  // 3
  function squareNumber(number) {
    return number * number;
  }
  const inputNumber = 5;
  const result2 = squareNumber(inputNumber);
  console.log(result2);
  // 5
  function compareNumbers(a, b) {
    if (a > b) {
      return 1;
    } else if (a < b) {
      return -1;
    } else {
      return 0;
    }
  }
  console.log(compareNumbers(5, 10)); 
  console.log(compareNumbers(15, 5)); 
  console.log(compareNumbers(7, 7));
  // 6
  function checkTextLength(text) {
    if (text.length < 6) {
      return;
    }
    console.log(text);
  }
  checkTextLength(""); 
  checkTextLength("Welcome to the coding!"); 
  // 8
  function arrayToString(arr) {
    return arr.toString();
  }
  const secondNumbers = [1, 2, 3, 4, 5];
  const result = arrayToString(secondNumbers);
  console.log(result);