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
const myInput = [2, -5, 10, -3, 7];
const result = sumPositiveNumbers(myInput);

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