"use strict";

// 1.
function max(first, second) {
    if (first > second) {
        console.log(first + " is greater then " + second);
    } else {
        console.log(second + " is greater then " + first);
    }
    return;
}
max(10, 19);

//2. 
function maxOfThree() {
    let max = -Infinity;
    for (let i = 0; i < arguments.length; i++) {
        if (arguments[i] > max) {
            max = arguments[i];
        }
    }
    return max;
}
console.log("Max of three is: " + maxOfThree(15, 114, 61));
//or
function maxOfThree1(first, second, third) {
    let largest = Math.max(first, second, third);
    console.log("The largest number among (" + first + ", " + second + ", " + third + ") is: " + largest);
}
maxOfThree1(15, 14, 61);

//3. 
function isVowel(char) {
    let arr = ['a', 'e', 'i', 'o', 'u'];
    if (arr.includes(char)) {
        return true;
    } else {
        return false;
    }
}
console.log(isVowel('p'));
console.log(isVowel('i'));

//4.
const arr = [1, 2, 3, 4];
function sum(arr) {
    let result = 0;
    for (let i = 0; i < arr.length; i++) {
        // for(let i of arr){
        result += arr[i];
    }
    console.log("Sum is: " + result);
}
sum(arr);

function multiplier(arr) {
    let multiply = 1;
    for (let i = 0; i < arr.length; i++) {
        multiply *= arr[i];
    }
    console.log("Product is: " + multiply);
}
multiplier(arr);

//5:
function reverse(str) {
    let reversed = "";
    for (let i = str.length - 1; i >= 0; i--) {
        reversed += str[i];
    }
    console.log("Reverse of " + str + " is: " + reversed);
}
reverse("Yes I can")
//or
function reverse1(str) {
    if (str === "") {
        return "";
    } else {
        return reverse1(str.substr(1)) + str.charAt(0);
    }
}
console.log("Reverse of Athan is: " + reverse1("Athan"));

//6:
function findLongestWord(arr) {
    let maxLength = arr[0].length;
    let result = "";
    arr.forEach(s => {
        if (maxLength < s.length) {
            maxLength = s.length;
        }
    });
    console.log("The length of the Largest word is: " + maxLength);
}
findLongestWord(['Fairfield', 'Fishers', 'Indianapolis', 'Chicago', 'Washington DC']);

//7: 
function filterLongWords(words, i) {
    return words.filter(word => word.length > i);
}
console.log(filterLongWords(['cat', 'lion', 'dog', 'butterfly', 'tiger', 'fly', 'elephant'], 3));

//8:
function computeSumOfSquares(numbers) {
    let sum = 0;
    let newArr = numbers.map(n => n * n)
        .map(n1 => sum += n1);

    console.log("The sum of squres is: " + sum);
}
computeSumOfSquares([1, 2, 3, 4]);

//9:
function printOddNumbersOnly(numbers) {
    let oddNumbers = numbers.filter(n => n % 2 != 0);
    console.log("The odd numbers are: " + oddNumbers)
}
printOddNumbersOnly([1, 2, 5, 6, 3, 9, 8]);

//10:
function computeSumOfSquaresOfEvensOnly(numbers) {
    let sum = 0;
    numbers.filter(n => n % 2 == 0)
        .map(m => m * m)
        .map(q => sum += q);
    console.log("Sum of squres of the even number is: " + sum);
}
computeSumOfSquaresOfEvensOnly([1, 2, 3, 4, 5]);

//11:
function sumUsingReduce(arr) {
    return arr.reduce((a, b) => a + b, 0);
}
console.log("The sum using reduce is: " + sumUsingReduce([1, 2, 3, 4]));

function multiplyUsingReduce(arr) {
    return arr.reduce((a, b) => a * b, 1);
}
console.log("The product using reduce is: " + multiplyUsingReduce([1, 2, 3, 4]));

//12:
function findSecondBiggest(numbers) {
    let biggest = numbers[0];
    let secondLargest = 0;

    if (numbers.length < 2) {
        console.log("Invalid input!");
    } else {
        for (let i = 1; i < numbers.length; i++) {
            if (numbers[i] > biggest) {
                secondLargest = biggest;
                biggest = numbers[i];
            } else if (numbers[i] > secondLargest) {
                secondLargest = numbers[i];
            }
        }
    }
    return secondLargest;
}
console.log("Second largest number is: " + findSecondBiggest([5, 4, 7, 8, 2, 10, 9, 1, 11, 52, 15, 12, 16]));

//13: 
function printFibo(n, a, b) {
    let result = "";
    for (let i = 0; i < n - 1; i++) {
        result += a + ", ";
        let c = a + b;
        a = b;
        b = c;
    }
    console.log('"' + result + a + '"');
}
printFibo(6, 0, 1);

//14.1:
function sum(arr) {
    let result = 0;
    let newArr = arr.filter(a => a > 20)
        .map(b => result += b);
    return result;
}
console.log("Sum of numbers greater than 20 is: " + sum([10, 35, 15, 20, 25, 30]));

//14.2:
function getNewArray(strings) {
    return strings.filter(s => s.length >= 5)
        .filter(m => m.includes('a'));
}
console.log("NewArray is: [" + getNewArray(["animal", "cat", "power", "america", "sand", "sandy"]) + "]");