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

const kenny = ["Kenny", 1000, "Austin"];
const jimHaff = ["Jim H", 16, "All cities"];
const reuben = ["Reuben", 22, "Durham"];
const jimClark = ["Jim C", 186, "LA"];
const ryan = ["Ryan", 65, "Denver"];

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



