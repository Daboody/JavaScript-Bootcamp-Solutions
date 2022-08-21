let zero = 0;
let counter = 3;
let my = ["Ahmed","Mazero","Elham","Osama","Gamal","Ameer"];


// First Answer
let first = my.slice(zero,counter).reverse();
let getOsama = my.slice(counter);
getOsama.pop();
getOsama.pop();
let firstAnswer = getOsama.concat(first);
console.log(firstAnswer); 

// Second Answer
let secondAnswer = my.slice(zero,counter);
secondAnswer.shift();
secondAnswer.reverse();
console.log(secondAnswer);


// Third Answer
let thirdAnswer = secondAnswer.join("");
let firstPart = thirdAnswer.slice(zero,secondAnswer.length);
let lastPart = thirdAnswer.slice(-firstAnswer.length);
let finalAnswer = firstPart + lastPart ;
console.log(finalAnswer);

// Fourth Answer 
let small = finalAnswer.slice(firstAnswer.length).charAt(zero);
let capital = finalAnswer.slice(firstAnswer.length).charAt(getOsama.length).toUpperCase();
console.log(small+capital);