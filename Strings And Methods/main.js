// 1st Part of Assingment
let userName = "Elzero";
console.log(userName.charAt(0).toLowerCase());
console.log(userName[0].toLowerCase());
console.log(userName.slice(0,-5).toLowerCase());
console.log(userName.substring(0,1).toLowerCase());
console.log(userName.substr(0,1).toLowerCase());
console.log((userName.split("",1).toString().toLowerCase()).repeat(3));

// 2nd Part of Assingment
let word = "Elzero";
let letterZ = "z";
let letterE = "e";
let letterO = "O";
console.log(word.toUpperCase().includes("Z"));
console.log(word.startsWith("E"));
console.log(word.endsWith("o"));