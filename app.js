// console.log('All good under the hood');

// • Get Even: Write a for loop that will log only the even numbers in 0 through 200:

// for (let i = 0; i < 201; i++) {
//   if (i % 2 === 0) {
//     console.log(i);
//   }
// }


// • Excited Kitten: Write code that logs "Love me, pet me! HSSSSSS!" 20 times. For every even number in your loop, log "...human...why you taking pictures of me?...", "...the catnip made me do it...", or "...why does the red dot always get away..." at random.

// for (let i = 0; i < 20; i++) {
//     const additionalResponses = ["Human, why are you taking pictures of me?", "The catnip made me do it.", "Why does the red dot always get away?"];
//   console.log("Love me, pet me! HISSS!");
//   if (i % 2 === 0) {
//     console.log(additionalResponses[Math.floor(Math.random() * 3)])
//   }
// }


// • Write a javascript application that logs all numbers from 1 - 100. If a number is divisible by 3 log "Fizz" instead of the number. If a number is divisible by 5 log "Buzz" instead of the number. If a number is divisible by 3 and 5 log "FizzBuzz" instead of the number.

// function logFizzBuzz() {
//   for (let i = 1; i < 101; i++) {
//     if (i % 15 === 0) {
//       console.log(i + ' FizzBuzz');
//     }
//     if (i % 3 === 0) console.log('Fizz');
//     if (i % 5 === 0) console.log('Buzz');
//   }
// }

// logFizzBuzz()


// function secondLogFizzBuzz() {
//   for (let i = 1; i < 100; i++) {
//     console.log((i % 3 ? '' : 'fizz') + (i % 5 ? '' : 'Buzz') || i);
//   }
// }

// secondLogFizzBuzz();


// • Getting To Know You: Use the following arrays to answer the questions below (name, age, hometown):

// const kenny = ["Kenny", 1000, "Austin"];
// const jimHaff = ["Jim H", 16, "All cities"];
// const reuben = ["Reuben", 22, "Durham"];
// const jimClark = ["Jim C", 186, "LA"];
// const ryan = ["Ryan", 65, "Denver"];

// 1. im Clark decides that Kenny can't be named "Kenny" anymore. Remove "Kenny" from the kenny array and replace it with "Gameboy".

// kenny[0] = "Gameboy";
// console.log(kenny);

// 2. Jim Clark just had his birthday; change jimClark's array to reflect him being a year older. Don't just hard code 187--pretend that you didn't already know that his age is 186, and write your code to just make him a year older than whatever age he was.

// jimClark[1] += 1;
// console.log(jimClark);

// 3. Ryan is Batman maybe. Or possibly Robin. Change Ryan's hometown from "Denver" to "Gotham City".

// ryan[2] = "Gotham City";
// console.log(ryan);

// 4. Reuben left Durham 5 years ago to come to Chicago. First, remove "Durham" from Reuben's array, and then add "Chicago". (Note: remove and then add is different from simply changing the value at that index.)

// reuben.splice(2, 1, 'Chicago');
// console.log(reuben);

// reuben.pop();
// reuben.push('Chicago')
// console.log(reuben);

// 5. Jim Haff could be literally anywhere in the world. Remove "All cities" from his array, then pick any 3 cities you like, and add them to Jim's array. If you did it in 3 lines of code that's fine, but see if you can do it in one line of code

// jimHaff.splice(2, 1, 'Portland, ME', 'Belfast, IR', 'Brooklyn, NY');
// console.log(jimHaff);

// 6. Bonus: Whoops! Jim Haff is actually only allowed to be in one of two cities. Whatever the first of the 3 cities for Jim Haff is now, remove it from the array using .splice()

// jimHaff.splice(2, 1, 'Portland, ME', 'Belfast, IR', 'Brooklyn, NY');

// jimHaff.splice(2, 1);
// console.log(jimHaff);


// Yell at the Ninja Turtles: Create an array with the members of the ninja turtles. 
// Use a for loop to call .toUpperCase() on each of them and print out the result. 
// Bonus: Modify the answer you just wrote. Instead of all letters being uppercase, make the letters alternate back and forth between uppercase and lowercase.

// let ninjaTurtles = ["Donatello", "Leonardo", "Raphael", "Michaelangelo"];

// for (let i = 0; i < ninjaTurtles.length; i++) {
//   console.log(ninjaTurtles[i].toUpperCase());
// }

// for (let i = 0; i < ninjaTurtles.length; i++) {
//   let nameString = ninjaTurtles[i].split('');
//   for (let a = 0; a < nameString.length; a++) {
//     if (a % 2 === 0) {
//       nameString[a] = nameString[a].toUpperCase();
//     }
//   }
//   console.log(nameString.join(''));
// }


// • Return of the Closets:

const kristynsCloset = [
  "left shoe",
  "cowboy boots",
  "right sock",
  "GA hoodie",
  "green pants",
  "yellow knit hat",
  "marshmallow peeps"
];

const thomsCloset = [
  [
    // These are Thom's shirts
    "grey button-up",
    "dark grey button-up",
    "light blue button-up",
    "blue button-up",
  ],[
    // These are Thom's pants
    "grey jeans",
    "jeans",
    "PJs"
  ],[
    // Thom's accessories
    "wool mittens",
    "wool scarf",
    "raybans"
  ]
];

// • Kristyn's left shoe has traveled through time and space and turned up in Thom's accessories drawer! Remove Kristyn's shoe from the array and save it to the variable kristynsShoe. Use that variable to add Kristyn's lost shoe to Thom's accessories array.

// let kristynsShoe = kristynsCloset[0];
// thomsCloset[2].push(kristynsShoe);
// console.log(thomsCloset);

// • Modify your code to put together 3 separate outfits for Kristyn and Thom. Put the output in a sentence to tell us what we'll be wearing. Mix and match!

// let kristynOutfitOne = [];
// let kristynOutfitTwo = [];
// let kristynOutfitThree = [];

// let kristynsOutfits = [[],[],[]];
// let thomOutfits = [[], [], []];

// function createKristynOutfit(numberOfOutfits) {
//   let outfitsArray = [];
//   for (let i = 1; i <= numberOfOutfits; i++) {
//     let outfit = 'Outfit #' + i + ': ';
//     for (let a = 1; a <= 3; a++) {
//       outfit += kristynsCloset[Math.floor(Math.random() * ((kristynsCloset.length) - 0) + 0)];
//       if (a !== 3) outfit += ', ';
//       else outfit += '.';
//     }
//     outfitsArray.push(outfit);
//   }
//   return outfitsArray;
// }

// console.log(createKristynOutfit(5));


// function createThomOutfit(inputNum) {
//   let outfitsArray = [];
//   for (let i = 1; i <= inputNum; i++) {
//     let outfit = 'Outfit #' + i + ': ';
//     for (let a = 1; a <= 3; a++) {
//       let sectionNumber = Math.floor(Math.random() * (thomsCloset.length - 0) + 0);
//       outfit += thomsCloset[sectionNumber][Math.floor(Math.random() * ((thomsCloset[sectionNumber].length) - 0) + 0)];
//       if (a !== 3) outfit += ', ';
//       else outfit += '.';
//     }
//     outfitsArray.push(outfit);
//   }
//   return outfitsArray;
// }

// console.log(createThomOutfit(6));


// • Time to do laundry - loop through Kristyn's closet and log the sentence "WHIRR: Now washing (item)" for each item in the array.

// function startWashingMachine() {
//   for (i = 0; i < kristynsCloset.length; i++) {
//     console.log("WHIRRR: now washing " + kristynsCloset[i]);
//   }
// }


// • Thom wants to do inventory on his closet. Using bracket notation, log the arrays (not the elements in the arrays) containing all of Thom's shirts, pants, and accessories.

// function inventoryThomsCloset() {
//   for (i = 0; i < thomsCloset.length; i++) {
//     console.log(thomsCloset[i]);
//   }
// }


// • If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.
// Find the sum of all the multiples of 3 or 5 below 1000.

// function calculateSumOfMultiples(inputNum) {
//   let sum = 0;
//   for (let i = 1; i < inputNum; i++) {
//     if (i % 3 == 0 || i % 5 === 0) {
//       sum += i;
//     }
//   }
//   return sum;
// }

// console.log(calculateSumOfMultiples(1000));


// • Declare a variable argument and set it equal to 7. Write a loop that console logs a "left isosceles" triangle (SEE BELOW) made of '#' that has the height and length of argument.

// function createLeftIso(inputNum) {
//   let triangleString = '';
//   let triangleHash = '#';
//   for (let i = 1; i <= inputNum; i++) {
//     triangleString += triangleHash.repeat(i) + '\n';
//   }
//   return triangleString;
// }

// console.log(createLeftIso(7));

// • Write a loop that console logs a "right isosceles" triangle (SEE BELOW) made of '#' that has the height and length of argument. This is deceptively tricky.

// function createRightIso(inputNum) {
//   let triangleString = '';
//   let spaceString = ' ';
//   let hashString = '#';
//   for (let i = 1; i <= inputNum; i++) {
//     triangleString += spaceString.repeat(inputNum - i) + hashString.repeat(i) + '\n';
//   }
//   return triangleString;
// }

// console.log(createRightIso(7));

// • Write a loop that console logs an "upside down left" isosceles triangle made of '#' that has the height and length of the argument.

// function createUpsideDownLeftIso(inputNum) {
//   let triangleString = '';
//   let hashString = '#';
//   let spaceString = ' ';
//   for (let i = inputNum; i >= 0; i--) {
//     triangleString += hashString.repeat(i) + spaceString.repeat(inputNum - i) + '\n';
//   }
//   return triangleString;
// }

// console.log(createUpsideDownLeftIso(7));

// • Write a loop that console logs an "upside down right" isosceles triangle made of '#' that has the height and length of the argument. This is also tricky.

// function createUpsideDownRightIso(inputNum) {
//   let triangleString = '';
//   let hashString = '#';
//   let spaceString = ' ';
//   for (let i = inputNum; i >= 0; i--) {
//     triangleString += spaceString.repeat(inputNum - i) + hashString.repeat(i) + '\n';
//   }
//   return triangleString;
// }

// console.log(createUpsideDownRightIso(7));