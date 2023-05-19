// ASSESSMENT 5: JavaScript Coding Practical Questions with Jest
// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest

// --------------------1) Create a function that takes in a string and returns a string with a coded message. The coded message converts "a" to 4, "e" to 3, "i" to 1, and "o" to 0.

//PSEUDO CODE:
// Name: codeWords
// input: A string 
// output: A string with a coded message. The coded message converts "a" to 4, "e" to 3, "i" to 1, and "o" to 0.
// Process 1: 
//  - Create a function called codeWords with string as the argument.
//  - Use the .replace() method along with regexp to replace the specified character with the corresponding encoded value
//  - Use the `/ /gi` flag in the regexp to perform a global, case-insensitive replacement on all occurances of the specified character. 
// 
// Process 2: 
//  - Create a function called codeWords with string as the argument.
//  - Use a single .replace() method with the regexp /[ ]/gi to perform a global, case-insensitive replacement of any occurence of the specified characters.
//  - Use a callback function with `switch` statement and .toLowerCase() to evaluate the expression against multiple possible cases and execute the corresponding return. 



// a) Create a test with expect statements using the variables provided.

const secretCodeWord1 = "Lackadaisical"
// Expected output: "L4ck4d41s1c4l"
const secretCodeWord2 = "Gobbledygook"
// Expected output: "G0bbl3dyg00k"
const secretCodeWord3 = "Eccentric"
// Expected output: "3cc3ntr1c"

////TEST////

// describe("codeWords", () => {
//     it("Takes in a string and returns a string with a coded message.", () => {
//         expect(codeWords(secretCodeWord1)).toEqual("L4ck4d41s1c4l")
//         expect(codeWords(secretCodeWord2)).toEqual("G0bbl3dyg00k")
//         expect(codeWords(secretCodeWord3)).toEqual("3cc3ntr1c")
//     })
// })


//ReferenceError: codeWords is not defined

// b) Create the function that makes the test pass.

// const codeWords = (string) => {
//     return string.replace(/a/gi, '4').replace(/e/gi, '3').replace(/i/gi, '1').replace(/o/gi, '0')
// }

// // PASS  ./code-challenges.test.js
// codeWords
// ✓ Takes in a string and returns a string with a coded message. (3 ms)


//OR//
// const codeWords = (string) => {
//     return string.replace(/[aeio]/gi, (char) => {
//       switch (char.toLowerCase()) {
//         case 'a':
//           return '4';
//         case 'e':
//           return '3';
//         case 'i':
//           return '1';
//         case 'o':
//           return '0';
//       }
//     });
//   }


// // PASS  ./code-challenges.test.js
// codeWords
// ✓ Takes in a string and returns a string with a coded message. (3 ms)





// --------------------2) Create a function that takes in an array of words and a single letter and returns an array of all the words containing that particular letter.

// a) Create a test with expects statement using the variable provided.

const fruitArray = ["Mango", "Cherry", "Apricot", "Blueberry", "Peach", "Kiwi"]

const filterLetterA = "a"
// Expected output: ["Mango", "Apricot", "Peach"]
const filterLetterE = "e"
// Expected output: ["Cherry", "Blueberry", "Peach"]

// PSEUDO CODE:
// Name: filteredArray
// input: an array and a single letter
// output: a  new array of all the words containing the single letter
// Process: Create a function called filteredArray.
//  - Use the .filter() method to iterate through the array and return a subset array using a callback function as the argument
//  - The callback function uses the .toLowerCase() method to account for all casing and uses the .includes() method to check if each word includes the given letter 

//TEST//

// describe("filteredArray", () => {
//     it("takes in an array of words and a single letter and returns an array of all the words containing that particular letter.", () => {
//         expect(filteredArray(fruitArray, filterLetterA)).toEqual(["Mango", "Apricot", "Peach"])
//         expect(filteredArray(fruitArray, filterLetterE)).toEqual(["Cherry", "Blueberry", "Peach"])
//     })
// })
    
//ReferenceError: filteredArray is not defined


// b) Create the function that makes the test pass.


// const filteredArray = (array, letter) => {
//     return array.filter(word => word.toLowerCase().includes(letter.toLowerCase()))
// }


// // PASS  ./code-challenges.test.js
// filteredArray
// ✓ takes in an array of words and a single letter and returns an array of all the words containing that particular letter. (5 ms)





// --------------------3) Create a function that takes in an array of 5 numbers and determines whether or not the array is a "full house". A full house is exactly one pair and one three of a kind.

// a) Create a test with expect statements using the variable provided.

const hand1 = [5, 5, 5, 3, 3]
// Expected output: true
const hand2 = [5, 5, 3, 3, 4]
// Expected output: false
const hand3 = [5, 5, 5, 5, 4]
// Expected output: false
const hand4 = [7, 2, 7, 2, 7]
// Expected output: true

//PSUEDO CODE:
// Name: fullHouse
// input: array
// output: true if the array includes 1 pair and 1 three of a kind. or false 
// Process: 
//  - Create an empty object to store the count of each number in the array.
//  - Use a for loop to iterate over each element of the array, check if the element already exists as a key. If it does, it increments the count by 1. Otherwise it initalizes the count to 1.


//TEST//

describe("fullHouse", () => {
    it("takes in an array of 5 numbers and determines whether or not the array is a fullhouse.", () => {
        expect(fullHouse(hand1)).toEqual(true)
        expect(fullHouse(hand2)).toEqual(false)
        expect(fullHouse(hand3)).toEqual(false)
        expect(fullHouse(hand4)).toEqual(true)
    })
})

// ReferenceError: fullHouse is not defined



// b) Create the function that makes the test pass.


const fullHouse = (array) => {

  
    const count = {};
    for (let i = 0; i < array.length; i++) {
      const num = array[i];
      count[num] = count[num] ? count[num] + 1 : 1;
    }
  //I still don't really understand what is going on here??
    
    let pairFound = false;
    let threeOfAKindFound = false;
    for (const num in count) {
      if (count[num] === 2) {
        pairFound = true;
      } else if (count[num] === 3) {
        threeOfAKindFound = true;
      }
    }
  
    return pairFound && threeOfAKindFound;
  }

//   PASS  ./code-challenges.test.js
//   fullHouse
//     ✓ takes in an array of 5 numbers and determines whether or not the array is a fullhouse. (13 ms)