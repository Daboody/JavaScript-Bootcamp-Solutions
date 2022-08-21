// First part of assignment

/* 
Code one : gives error becouse "e1" not definded yet.
Code two : works normally becouse of "Onload" function.
Code three : works normally becouse its came after "e1" been defined
*/

// Second part of assignment
document.write("<h1>Elzero</h1>");
document.querySelector("h1").style.color = "blue";
document.querySelector("h1").style.fontFamily = "arial";
document.querySelector("h1").style.fontSize = "80px";
document.querySelector("h1").style.fontWeight = "bold";
document.querySelector("h1").style.textAlign = "center";

// Third part of assignment
console.log("%cElzero %cWeb %cSchool" , "color : red ; font-size: 40px" , "font-size: 40px ; font-Weight:bold; color:green;" , "font-size: 40px; background-color:blue;");

// Fourth part of assignment
console.group("Group 1");
console.log("Message One");
console.log("Message two");
console.group("Child Group");
console.log("Message One");
console.log("Message two");
console.group("Grand Child Group");
console.log("Message One");
console.log("Message two");
console.groupEnd();
console.groupEnd();
console.groupEnd();
console.group("Group 2");
console.groupEnd;

//Fivth part of assignment
console.table(["firstName","secondName","thirdName","fourthName","fivthName"]);

// Sixth part of assignment 
//console.log("Iam In Console");
/*document.write("Iam In Page");*/