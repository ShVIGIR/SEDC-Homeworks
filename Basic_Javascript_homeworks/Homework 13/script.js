//Task 1
// Create a function called tellStory()
// The function should accept an array of 3 strings as an argument: name, mood, activity ( All strings )
// The function should return one big string with a story made from the arguments
// Example: This is *name*. *name* is a nice person. Today they are *mood*. They are *activity* all day. The end.
// The value that is returned from the function should be printed in the console or in alert


// function tellStory (name, mood, activity){
//   console.log(`Short horor story. This is ${name}. ${name} is a nice person. Today she is ${mood}. She is ${activity} all day. The end.`);
//   document.write(`Short horor story.<br>This is ${name}. ${name} is a nice person. Today she is ${mood}. She is ${activity} all day. The end.`);
// }

// tellStory("Marija","feeling tired", "writing homeworks" );

//or

// let array = ["Marija", "feeling tired", "writing homeworks"];

// function tellStory1(allStrings) {
//     let i = 0;
//     for (let story of allStrings) {
//         story = (`Short horor story. This is ` + (allStrings[0]) + `. ` + allStrings[0] + ` is a nice person. Today she is ` + allStrings[1] + ` She is ` + allStrings[2] + ` all day. The end.`);
//         console.log(story);
//     }
// }
// tellStory1(array);





//Task 2
// Write a function that will take an array of 5 numbers as an argument and return the sum.
// Print it in the console or in alert
// BONUS: Write another function called validateNumber() that checks if a number is a valid number and call it for every number. If one of the numbers of the array is invalid show an error message instead of a result

// arrayOfNumbers = [2, 7, 10, 3, 5];

// function sum(broevi) {
//   let rez = 0;
//   let i = rez;

//   while (i < broevi.length) {
//     rez = rez + broevi[i];
//     i++;
//   }
//   return rez;
// }

// console.log(`The sum of ${arrayOfNumbers} is: ${sum(arrayOfNumbers)}`); // Output : 27
// kako da napram da mi se isprintat so + izmegu
//bonus X






//Task 3
// Write a javascript function that:
// When given any array of strings (should work with array with any number of elements)
// It will create one big string and return it
// Ex:["Hello", "there", "students", "of", "SEDC", "!"]
// Result: "Hello there students of SEDC!"


// let stringArray = ["Hello", "there", "students", "of", "SEDC", "!"];
// function oneString(array) {
//   let sentence = '';
//   for (let i = 0; i < array.length; i++) {
//     sentence += array[i] + ' ';
//   }
//   console.log(sentence);
// }
// oneString(stringArray);







//Task 4
// Description: Write a loop in JavaScript that in range from 1 till 20 will write in the console every number, and will add the "\n" new line after every even number otherwise it will add " " empty space.


// function printNumbers (){

//     for (let i = 1; i <= 20; i++) {
//       if (i % 2 === 0) {
//         console.log( i + '\n'+'\n');
//       }
//       else if (i % 2 !== 0) {
//         console.log(i+ " " + " neparen"); // da se vidi deka ima mesto posle neparniot
//       }
//     }
//     }
//     console.log(printNumbers());







// Task 5
// Description: Write a JavaScript function that will return:
// The sum of the MAX and MIN numbers from an array with numbers
// Ex: arr = [3, 5, 6, 8, 11]
// Output: Max: 11, Min: 3, Sum: 14
// Bonus: Try making the function work if there are other types of items in it



// let array = [2, 5, 7, 1];

// function sumMaxMin(numbers) {
//   let max = -Infinity;
//   let min = Infinity;
//   for (let i = 0; i < numbers.length; i++) {
//     let someNumberFromTheArray = numbers[i];
//     if (someNumberFromTheArray > max) {
//       max = someNumberFromTheArray;
//     }
//     else if (someNumberFromTheArray < min) {
//       min = someNumberFromTheArray;
//     }
//   }
//   let sum = min + max;

//   let result = (`The array is: ${array}.\nThe min is ${min}, the max is ${max} and the sum of these numbers is ${sum}.`);
//   return result;
// }
// console.log(sumMaxMin(array)); //ne go napraviv bonusot bidejki ne go razbiram 





//Task 6
// Description:Write a javascript function that:
// When given 2 arrays of students firstNames and lastNames will return a new array with students full names
// Every name should have a numeric value before it
// Ex: first = ["Bob", "Jill"], last = ["Gregory", "Wurtz"]
// Result: full = ["1. Bob Gregory", "2. Jill Wurtz"]

// let firstName = ["Radica", "Marija", "Sara", "Viktorija", "Elena"];
// let lastName = ["Shvigir", "Ristevski", "Angelovska", "Ivanov", "Stojanovska"];


// function funkcijaNekoja() {
//     let fullName = [];
//     for (let i = 0; i < firstName.length; i++) {
//         fullName.push(`"` + [i + 1] + "." + firstName[i] + " " + lastName[i] + `"`);
//     }
//     console.log(`full = [` + fullName + `]`);
// }
// console.log(funkcijaNekoja());
