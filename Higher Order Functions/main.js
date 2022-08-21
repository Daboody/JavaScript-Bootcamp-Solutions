// // First Part
// let mix = [1,2,3,"E",4,"l","z","e","r",5,"o"];

// let result = mix.map(function(ele){
//     return isNaN(parseInt(ele)) ? ele : "";
// }).reduce(function(acc,current){
//  return `${acc}${current}`
// })
// console.log(result)

// Second Part
// let myString = "EElllzzzzzzzeroo";
// let result = myString.split("").filter(function(ele, index, arr) { 
//     return arr.indexOf(ele) === index;
// }).reduce(function(acc,current){
//     return `${acc}${current}` ;
// })
// console.log(result);

// Third part 
// let myArray = ["E", "l", "z", ["e", "r"], "o"];
// let result = myArray.reduce(function(acc,current,ind){
//     return `${acc}${current}`;
// }).split(",").filter(function(ele){
//  return ele;
// }).join("");
// console.log(result)

// fourth Part
// let numsAndStrings = [1, 10, -10, -20, 5, "A", 3, "B", "C"];
// let result = numsAndStrings.filter(function (ele){
// return isNaN(ele) ? "" : ele ;
// }).map(function(ele){
//  return -ele;
// })
// console.log(result);

// fivth part
// let nums = [2, 12, 11, 5, 10, 1, 99];
// let result = nums.reduce(function(acc,current){
//     return current % 2 === 0 ? acc * current : acc + current;
// },1);
// console.log(result);
