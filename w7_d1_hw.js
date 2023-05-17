//Question #1

//Write a function that takes a string (sentence) and an array of strings (in this example dog_names) and check if one of the list members (dog names) is in the string (sentence). Return an array of the dog names found in the array

//hint: filter, includes

//for information on includes see:

//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/includes

var dogNames = ["Max","Fido","Gizmo","Nala"]

//Test Cases
let testString1 = "Hello, my dog is Max, and they have purple eyes!"
//Expect ['Max']

let testString2 = "My Dog is fast, her name is Tippi"
//Expect []

let testString3 = "Come here Fido and Gizmo come here"
//Expect['Fido','Gizmo']

function findDogNames(sentence, dogNames) {
    return dogNames.filter(name => sentence.includes(name))
}
  
console.log(findDogNames(testString1, dogNames))
console.log(findDogNames(testString2, dogNames))
console.log(findDogNames(testString3, dogNames))


//Question #2

//Write a Function using map to convert an array of number from inches to feet

//1 foot = 12 inches

const heightsInInches = [66, 64, 60, 52, 72, 80, 51]

function inchesToFeet(numbers) {
    return numbers.map(inches => inches / 12)
  }

console.log(inchesToFeet(heightsInInches))
// Expect
// [
//   5.5,
//   5.333333333333333,
//   5,
//   4.333333333333333,
//   6,
//   6.666666666666667,
//   4.25
// ]




//Question #3

//Using the Ternary Operator and map create an array that adds is eating pizza to every name from the array tmnt that ends with o and add is being rude to any other name.

const eatingPizza = (list1) => {
    return list1.map((name) => {
      return name.endsWith('o') ? `${name} is eating pizza` : `${name} is being rude`
    })
  }

const tmnt = ["Leonardo", "Michelangelo", "Donatello", "Raphael"]
console.log(eatingPizza(tmnt))

// expect
// [
//   'Leonardo is eating pizza',
//   'Michelangelo is eating pizza',
//   'Donatello is eating pizza',
//   'Raphael is being rude'
// ]

//Question #4

//Write an arrow function to find the max number in a list. Do not use the Math.max Function.

//The List will be all positive numbers

const maxNumber = (list2) => {
    return list2.sort((a, b) => a - b).slice(-1)
}

const findAMax=[123,5436,45784,1234,34,65,234125,645,3452,13216,49]
console.log(maxNumber(findAMax))

//Expect
// 234125



//Question #5

//At the end of the third Iteration (the third time the loop has ran) of this for Loop define the state of all the variables used in the cell

var bingo = "B-I-N-G-O"
var ognib = ""
for(let i=bingo.length-1; i>=0; i--){
    ognib+=(bingo[i])
    //define state from this line on the third iteration
}
console.log(bingo.length)
//bingo value is
// "B-I-N-G-O"
//ognib value is
//  2
// i value is
//  i-2




//Question #6

//Complete 3 Codewars problems using JavaScript, start with ones you have already solved in python. Paste a link hear to the 3 questions you completed

// 1. JavaScript Kata  https://www.codewars.com/kata/5b853229cfde412a470000d0/train/javascript
function twiceAsOld(dadYearsOld, sonYearsOld) {
    if (dadYearsOld >= 2 * sonYearsOld) {
      return dadYearsOld - 2 * sonYearsOld
    } else {
      return 2 * sonYearsOld - dadYearsOld
    }
  }

// 2. Python to JS https://www.codewars.com/kata/53af2b8861023f1d88000832/train/python
function areYouPlayingBanjo(name) {
    if (name[0].toLowerCase() === 'r') {   //30mins wasted on .toLowerCase and not .lowerCase
      return name + " plays banjo"
    } else {
      return name + " does not play banjo"
    }
  }

console.log(areYouPlayingBanjo("William"))
console.log(areYouPlayingBanjo("Ryan"))
console.log(areYouPlayingBanjo("Toppass"))
// William does not play banjo
// Ryan plays banjo
// Toppass does not play banjo

//3. Python to JS https://www.codewars.com/kata/57a0e5c372292dd76d000d7e/train/python
function repeatString(n, s) {
    return s.repeat(n) 
  }

console.log(repeatString(6, "Ryan"))
console.log(repeatString(5, "Matrix"))
// RyanRyanRyanRyanRyan
//MatrixMatrixMatrixMatrixMatrixMatrix