// Task 1 : Create a function that takes a string as input and returns the reversed version of the string without using the built-in reverse() method.

// function reverseStr(str) {
//     let revStr = '';
//     for (let i = str.length - 1 ; i >= 0; i--) {
//         const element = str[i];
//         revStr += element;
//     }
//     return (revStr)
// }
// const input = "Hello, world";
// const reversedStr = reverseStr(input);
// console.log(reversedStr);


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
console.log(result)