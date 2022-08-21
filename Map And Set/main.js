// 1st Part Of Assignment
// ################################################################################################################################
// setOfNumbers = new Set().add(10);
// setOfNumbers.add(20).add(setOfNumbers.size);
// console.log(setOfNumbers);
// [,,lastElement] = setOfNumbers
// console.log(lastElement);
// ################################################################################################################################

// 2nd Part Of Assignment
// #################################################################################################################################
// let myFriends = ["Osama", "Ahmed", "Sayed", "Sayed", "Mahmoud", "Osama"];
// console.log(new Set(myFriends.sort()));
// #################################################################################################################################

// 3rd Part Of Assignment
// #################################################################################################################################
// let myInfo = {
//     username: "Osama",
//     role: "Admin",
//     country: "Egypt",
//   };
// myInfo = new Map().set("username","Osama").set("role","Admin").set("Country","Egypt");
// console.log(myInfo);
// console.log(myInfo.size);
// console.log(myInfo.has("role"));
// #################################################################################################################################

// 4th Part Of Assignment
// #################################################################################################################################
// let theNumber = 100020003000;
// let [a,,c,d] = new Set([...theNumber.toString()]);
// console.log(`${+a}${+c}${+d}`);
// #################################################################################################################################

// 5th Part Of Assignment
// #################################################################################################################################
// let theName = "Elzero";
// // First Way :
// console.log([...theName]);
// // Second Way:
// console.log(Array(...theName));
// // Third Way:
// console.log(Array.from(theName));
// // Fourth Way:
// console.log(theName.split(""));
// // Fivth Way:
// let [a,b,c,d,e,f] = theName;
// console.log([a,b,c,d,e,f]);
// #################################################################################################################################

// 6th Part Of Assignment
// #################################################################################################################################
// let chars = ["A", "B", "C", "D", "E", 10, 15, 6];
// let numbersFromArray = [];
// let stringsArray = [];
// // Collect Type Of "String" Elements From Main Array
// chars.map(function(e){
//     return isNaN(parseInt(e)) ? stringsArray.push(e) : "";
// });
// // Collect Type Of "Number" Elements From Main Array
// chars.map(function(e){
//     return isNaN(parseInt(e)) ? "" : numbersFromArray.push(e);
// });
// let result = [...stringsArray.slice(0,numbersFromArray.length), ...stringsArray];
// #################################################################################################################################

// 7th Part Of Assignment
// #################################################################################################################################
// let numsOne = [1, 2, 3];
// let numsTwo = [4, 5, 6];
// // First Way:
// console.log(numsOne.concat(numsTwo));
// // Second Way:
// console.log([...numsOne,...numsTwo]);
// // Third Way:
// let [a,b,c,[d,e,f] = numsTwo] = numsOne;
// console.log([a,b,c,d,e,f]);
// // Fourth Way:
// console.log(Array(...numsOne.slice(),...numsTwo.slice()));
// // Fivth Way:
// numsOne.push(...numsTwo);
// console.log(numsOne);
// #################################################################################################################################

// 8th Part Of Assignment
// ##################################################################################################################################
// let n1 = [10, 30, 10, 20];
// let n2 = [30, 20, 10];
// let [,,,a,,,b,c] = n2.toString();
// console.log((parseInt(+a +b +c)));
// ##################################################################################################################################