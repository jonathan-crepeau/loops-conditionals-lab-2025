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