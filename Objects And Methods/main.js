// First Part
// let member = {
//     name : "Elzero",
//     age : 38,
//     country : "Egypt",
//     fullDetails : function (){
//         return `my Name Is ${this.name}, My Age Is ${this.age}, I Live in ${this.country}`;
//     },
// };
// console.log(member.name); // Elzero
// console.log(member.age); // 38
// console.log(member.country); // Egypt
// console.log(member.fullDetails()); // My Name Is Elzero, My Age Is 38, I Live in Egypt

// Second part 
// let objMethodOne = {
//     property : "Method one",
// };
// console.log(objMethodOne.property);

// let objMethodTwo = new Object;
// objMethodTwo.property = "Method Two";
// console.log(objMethodTwo.property);

// let objMethodThree = Object.create({property : "Method Three"});
// console.log(objMethodThree.property);

// let objMethodFour = Object.assign({});
// objMethodFour.property = "Method Four";
// console.log(objMethodFour.property);

// Third Part
// let a = 1;

// let threeNums = {
//     b: 2,
//     c: 3,
//     d: 4,
// };

// let twoNums = {
//     e: 5,
//     f: 6,
// };

// let finalObject = Object.assign({a} , threeNums , twoNums);
// console.log(finalObject);

// Fourth Part 
// let myFavGames = {
//     "Trinity Universe" : {
//         publisher : "NIS America",
//         price : 40,
//     },
//     "Titan Quest" : {
//         publisher : "THQ",
//         bestThree : {
//             one : "Immortal Throne",
//             two : "Ragnarok",
//             three : "Atlantis",
//         },
//         price : 50,
//     },
//     YS : {
//         publisher : "Falcom",
//         bestThree : {
//             one : "Oath in Felghana",
//             two : "Ark Of Napishtim",
//             three : "origin",
//         },
//         price : 40,
//     },
// };

// // Get Object Length
// let objectLength = Object.keys(myFavGames).length;

// for (let i = 0; i < objectLength; i++) {
//     console.log(`The Game Name Is ${Object.keys(myFavGames)[i]}`);
//     console.log(`The Publisher Is ${myFavGames[Object.keys(myFavGames)[i]].publisher}`);
//     console.log(`The Price Is ${myFavGames[Object.keys(myFavGames)[i]].price}`);

//     // Check If Nested Object Has Property (bestThree)
//     if (myFavGames[Object.keys(myFavGames)[i]].bestThree) {
//       console.log("- Game Has Releases");
//       console.log(`First => ${myFavGames[Object.keys(myFavGames)[i]].bestThree.one}`);
//       console.log(`Second => ${myFavGames[Object.keys(myFavGames)[i]].bestThree.two}`);
//       console.log(`Third => ${myFavGames[Object.keys(myFavGames)[i]].bestThree.three}`);
//     }
//     console.log("#".repeat(20));
//   };