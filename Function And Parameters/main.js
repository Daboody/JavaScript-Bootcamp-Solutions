// 1st Part of Assignment
function sayHello(theName,theGender){
         if (theGender == "male"){
         console.log(`Hello Mr ${theName}`);
     }
     else if(theGender == "female"){
         console.log(`Hello Miss ${theName}`);
     }
     else console.log(`Hello ${theName}`);
}
sayHello("Fatma","female");
sayHello("Ahmed","male");
sayHello("Wijdan");

// 2nd Part Of Assignment
function calc(firstNum, secondNum, operation){
    if (secondNum === undefined){
        firstNum = ""
        secondNum = "Second Number Not Found"
    }
    if(operation == "add" || operation == "Add"){
        return  firstNum + secondNum ;
    }
    if(operation == "subtract" || operation == "Subtract"){
        return firstNum - secondNum ;
    }
     if (operation == "multiply" || operation == "Multiply"){
        return firstNum * secondNum ;
    }
    if(operation == undefined){
        return firstNum + secondNum ;
    }
  }
console.log(calc(4)); // second number not found
console.log(calc(4,2)); // 6
console.log(calc(40,60,"subtract")); // -20

// 3rd Part Of Assignment
function ageInTime(age){
    if (age < 10 || age > 100){
       age = "Age Out Of Range"
    }
return(`your age is ${age * 12} months 
${age * 365 / 7} weeks 
${age * 365 } days 
${age * 365 * 24 } hours 
${age * 365 * 24 * 60} minutes 
${age * 365 * 24 * 60 * 60} second `);
}
console.log(ageInTime(38)) 

// 4th Part Of Assignment
function checkStatus(a , b , c){
if (typeof a == "number" && typeof b == "boolean" && typeof c == "string"){
    x = c
    c = b 
    b = a 
    a = x
}
if (typeof a == "boolean" && typeof b == "string" && typeof c == "number"){
    x = b ,
    b = c,
    c = a,
    a = x 
}
if (typeof a == "string" && typeof b == "boolean" && typeof c == "number"){
    x = c ,
    c = b ,
    b = x
}
if (typeof a == "boolean" && typeof b == "number" && typeof c == "string"){
    x = c ,
    c = a,
    a = x
}
if (typeof a == "number" && typeof b == "string" && typeof c == "boolean"){
    x = b ,
    b = a ,
    a = x
}
if (c == true){
c = "You are available for hire";
}else{
  c = "You are Not available for hire";
}

console.log(`Hello ${a}, your age is ${b},  ${c}`);
}
checkStatus ("ali", 20 , true )
checkStatus (20 , "ali", true )
checkStatus (true , 20, "ali" )
checkStatus (false , "ali" ,20)

// 5th Part Of Assignment
function createSelectBox(start,end){
document.write(`<select>`)
    for(start ; start <= end ; start++){
    document.write(`<option value = "${start}">${start}</option>`);
    }
document.write(`</select>`)
}
createSelectBox(2000,2021);

// 6th Part Of Assignment
function multiplyNumbers(...num){
let result = 1 ;
for (let i = 0 ; i < num.length;i++){
    if(typeof num[i] === "string"){
        continue;
    }
      if (num[i] % 1 !== 0){
      num[i] = parseInt(num[i]);
   }
    result *= num[i];
}
console.log(result);
}
multiplyNumbers(10,20);
multiplyNumbers("A",10,30);
multiplyNumbers(100.5,10,"B");
