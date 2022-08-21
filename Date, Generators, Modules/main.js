
// First Part Of Assignment
// #############################################################################################
// let birthday = new Date("07 11 1995");
// let today = new Date();
// let age = today - birthday;
// console.log(`${Math.floor((age/1000))} Seconds`);
// console.log(`${Math.floor((age/1000/60))} Minutes`);
// console.log(`${Math.floor((age/1000/60/60))} Hours`);
// console.log(`${Math.floor((age/1000/60/60/24))} Days`);
// console.log(`${Math.floor((age/1000/60/60/24/30))} Months`);
// console.log(`${Math.floor((age/1000/60/60/24/365))} Years`);
// #############################################################################################

// Second Part Of Assignment
// #############################################################################################
// let time = new Date();
// time.setFullYear(1980,0,1);
// time.setMinutes(0,1)
// console.log(time)
// "Tue Jan 01 1980 00:00:01 GMT+0200 (Eastern European Standard Time)"
// #############################################################################################

// Third Part Of Assignment
// #############################################################################################
// "Sat Apr 30 2022 18:13:20 GMT+0200 (Eastern European Standard Time)"
// "Previous Month Is April And Last Day Is 30"
// let time = new Date();

// time.setMonth(6);
// console.log(time);
// console.log(`Previous Month Is `);
// #############################################################################################

// Fourth Part Of Assignment
// #############################################################################################
// let firstPattern = new Date("07 11 1995");
// console.log(firstPattern);
// let secondPattern = new Date();
// secondPattern.setFullYear(1995)
// secondPattern.setMonth(06);
// secondPattern.setDate(11);
// secondPattern.setHours(0,0,0,0);
// console.log(secondPattern);
// let thirdPattern = new Date(805410000000);
// console.log(thirdPattern);
// #############################################################################################

// Fivth Part Of Assignment
// #############################################################################################
// const t0 = performance.now();
// for ( let i = 0 ; i <= 99999 ; i++){
//     console.log(i);
// };
// const t1 = performance.now();
// console.log(`Loop Took ${t1 - t0} Milliseconds.`);
// #############################################################################################

// Sixth Part Of Assignment
// #############################################################################################
// function* gen(){
//     var x = 14;
//     for (let i = 0; true ;i++){
//         let y = x + 200*i + 140 ;
//         yield x = y;
//     }
// }
// let generetor = gen();
// console.log(generetor.next());
// console.log(generetor.next());
// console.log(generetor.next());
// console.log(generetor.next());
// console.log(generetor.next());
// console.log(generetor.next());
// console.log(generetor.next());
// console.log(generetor.next());
// console.log(generetor.next());
// #############################################################################################

// 7th Part Of Assignment
// #############################################################################################
// function* genNumbers() {
//     yield* [1, 2, 2, 2, 3, 4, 5];
//   }
//   function* genLetters() {
//     yield* ["A", "B", "B", "B", "C", "D"];
//   }
  
//   // Write Your Generator Function Here
//   function* genAll(){
//     yield* new Set(genNumbers());
//     yield* new Set(genLetters());
//   }
  
//   let generator = genAll();
  
//   console.log(generator.next()); // {value: 1, done: false}
//   console.log(generator.next()); // {value: 2, done: false}
//   console.log(generator.next()); // {value: 3, done: false}
//   console.log(generator.next()); // {value: 4, done: false}
//   console.log(generator.next()); // {value: 5, done: false}
//   console.log(generator.next()); // {value: "A", done: false}
//   console.log(generator.next()); // {value: "B", done: false}
//   console.log(generator.next()); // {value: "C", done: false}
//   console.log(generator.next()); // {value: "D", done: false}
// #############################################################################################

// 8th Part Of Assignment
// #############################################################################################
import calc from './mod-one.js';
import {a as numOne, b as numTwo, c as numThree, modOne} from './mod-two.js';
console.log(calc(modOne.numOne, modOne.numTwo, modOne.numThree)); // 60
// #############################################################################################