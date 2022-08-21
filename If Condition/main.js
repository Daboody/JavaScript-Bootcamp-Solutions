// 1st Part of Assignment
let num = 7; 
if (num < 10){
    console.log(`00${num}`);
}
if(num > 10 && num < 100){
    console.log(`0${num}`);
}
if(num>=100){
    console.log(`${num}`);
}

// 2nd Part of Assignment
let num1 = 10;
let str = "9";
let str2 = "20";

if(num1 == str ){
    console.log("{num1} Is The Same Value As {str}");
}else if(num1 == str && typeof num1 != typeof str){
    console.log("{num1} Is The Same Value As {str} But Not The Same Type");
}else if(num1 !== str2 && typeof num1 != typeof str2 ){
    console.log("{num1} Is Not The Same Value Or The Same Type As {str2}");
}else if(str!=str2 && typeof str == typeof str2){
    console.log("{str} Is The Same Type As {str2} But Not The Same Value ");
}

// 3rd Part of Assignment
// num1 from 2nd part of Assignment = 10
let num2 = 30;
let num3 = "30";

num3>num1&&typeof num3 !== typeof num2 ?
console.log("30 Is Larger Than 10 And Type string Not The Same Type As number")
:num3>num1&&num3 == num2 && typeof num3 !== typeof num2 ?
console.log("30 Is Larger Than 10 And Value Is The Same As 30 And Type String Not The Same Type As Number")
:num3 !== num1 && typeof num3 !== typeof num2 ?
console.log("{num3} Value And Type Is Not The Same As {num1} And Type Is Not The Same As {num2}")
:console.log("No Thing"); 


// 4th Part of Assignment
let numOne = 11;
let numTwo = 10;
let numThere = 11;
let numFour = 33;
// 33 - 32
// Condition 1
if (numOne > numTwo){
    console.log("True");
}else{
    console.log("False");
}

// Condition 2
if (numOne > numTwo && numOne < numFour){
    console.log("True");
}else{
    console.log("False");
}

// Condition 3
if (numOne > numTwo && numOne === numThere){
    console.log("True");
}else{
    console.log("False");
}

// Condition 4
if ((numOne + numTwo) < numFour){
    console.log("True");
}else{
    console.log("False");
}

// Condition 5
if ((numOne + numThere) < numFour){
    console.log("True");
}else{
    console.log("False");
}

// Condition 6
if ((numOne + numTwo + numThere) < numFour){
    console.log("True");
}else{
    console.log("False");
}

// Condition 7
if (numFour - (numOne + numThere) + numTwo === 21){
    console.log("True");
}else{
    console.log("False");
}