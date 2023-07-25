// Task 1 : Create a function that takes a string as input and returns the reversed version of the string without using the built-in reverse() method.

function reverseStr(str) {
  let revStr = "";
  for (let i = str.length - 1; i >= 0; i--) {
    const element = str[i];
    revStr += element;
  }
  return revStr;
}
const input = "Hello, world";
const reversedStr = reverseStr(input);

// Task 2 : Create a function that takes an array of numbers as input and returns the sum of all positive numbers in the array.

function sumPositiveNumbers(array) {
  let sum = 0;
  for (let i = 0; i < array.length; i++) {
    const element = array[i];
    if (element > 0) {
      sum += element;
    }
  }
  return sum;
}
const arr = [2, -5, 10, -3, 7];
const result = sumPositiveNumbers(arr);

// Task 3: Write a JavaScript program to find the most frequent element in an array and return it.

function findFrequentElement(array) {
  const frequency = {};
  let maxFrequency = 0;
  let frequentElement;

  for (let i = 0; i < array.length; i++) {
    const element = array[i];
    frequency[element] = (frequency[element] || 0) + 1;

    if (frequency[element] > maxFrequency) {
      maxFrequency = frequency[element];
      frequentElement = element;
    }
  }
  return frequentElement;
}
const myArr = [1, 5, 5, 5, 4, 5, 5, 6, 2, 7, 2];
const mostFrequentElement = findFrequentElement(myArr);

// Task 5: Implement a simple JavaScript calculator. The calculator should take two numbers and an operator (+, -, *, /) as input and return the result of the operation.

function calc(num1, num2, operator) {
  switch (operator) {
    case "+":
      return num1 + num2;
    case "-":
      return num1 - num2;
    case "*":
      return num1 * num2;
    case "/":
      if (num2 === 0) {
        return "Error: Please provide a valid number";
      }
      return num1 / num2;
    default:
      return "Error: Invalid operator! Please provide a valid operator.";
  }
}

const num1 = 7;
const num2 = 4;
const operator = "*";

const res = calc(num1, num2, operator);

// Task 6: Create a program that generates a random password of a specified length. The password should include a mix of uppercase letters, lowercase letters, numbers, and special characters.

function generatePassword(length) {
  const uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const lowercase = "abcdefghijklmnopqrstuvwxyz";
  const numbers = "0123456789";
  const specialChars = "!@#$%^&*()-_+=[]<>,.?{}|:;/";

  const allChars = uppercase + lowercase + numbers + specialChars;
  let password = "";

  for (let i = 0; i < length; i++) {
    const randomPass = Math.floor(Math.random() * allChars.length);
    password += allChars[randomPass];
  }
  return password;
}
const passLength = 12;
const randomPass = generatePassword(passLength);

// Task 8: Implement a JavaScript function to find the second smallest element in an array of numbers. The function should return the second smallest number.

function findSecondSmallestNumber(array) {
  let min = Infinity;
  let secondMin = Infinity;

  for (let i = 0; i < array.length; i++) {
    if (array[i] < min) {
      secondMin = min;
      min = array[i];
    } else if (array[i] < secondMin && array[i] !== min) {
      secondMin = array[i];
    }
  }

  return secondMin;
}
const array = [5, 8, 6, 5, 7, 10, 11, 44];
const secondSmallestNumber = findSecondSmallestNumber(array);

// Task 4: Create a function that takes a sorted array of numbers and a target value as input. The function should find two numbers in the array that add up to the target value. Return an array containing the indices of the two numbers.

function findTwoNumbersIndex(sortedArr, target) {
    let left = 0;
    let right = sortedArr.length - 1;

    while (left < right) {
        const sum = sortedArr[left] + sortedArr[right];
        if (sum === target) {
            return [left, right];
        } else if (sum < target) {
            left++;
        } else {
            right--;
        }
    }
    return null;
};
const sortedArr = [3, 4, 5, 6, 8, 9];
const myTarget = 10;
const sortedResult = findTwoNumbersIndex(sortedArr, myTarget)
console.log(sortedResult)