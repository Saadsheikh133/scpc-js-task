// Task 1 : Create a function that takes a string as input and returns the reversed version of the string without using the built-in reverse() method.

function reverseStr(str) {
    let revStr = '';
    for (let i = str.length - 1 ; i >= 0; i--) {
        const element = str[i];
        revStr += element;
    }
    return (revStr)
}
const input = "Hello, world";
const reversedStr = reverseStr(input);
console.log(reversedStr);
