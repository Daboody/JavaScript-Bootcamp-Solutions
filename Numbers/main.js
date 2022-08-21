// 1st Part of Assignment
console.log(100_000); // 100000
console.log(100000); // 100000
console.log(5e4 + 5e4); // 100000
console.log(1e5) // 100000
console.log(100000.0); // 100000
console.log(1000000/10); // 100000
console.log(10*10*10*10*10);
console.log(10**5); // 100000
console.log(Number(100000));
console.log(parseInt("100000")); // 100000
console.log(Math.round(99999.5)); // 100000
console.log(Math.ceil(99999.12345)); // 100000
console.log(Math.floor(100000.99999)); // 100000
console.log(Math.pow(10,5)); // 100000
// console.log(Math.max(10544,56553,99997,85779,100000)); // 100000
// console.log(Math.min(100000,449844,7894566,654987)); // 100000

// 2nd Part of Assignment
console.log(-Number.MIN_SAFE_INTEGER);

// 3rd Part of Assignment
console.log(Number.MAX_SAFE_INTEGER.toString().length);

// 4th Part of Assignment
let myVar = "100.56789 Views";
console.log(parseInt(myVar)); //100
console.log(+parseFloat(myVar).toFixed(2)); //100.57

// 5th Part of Assignment
let num = 10;
console.log(Number.isInteger(num.toString().length));

// 6th Part of Assignment
let flt = 10.4;
console.log(+flt.toFixed());
console.log(parseInt(flt));
console.log(Math.floor(flt));
console.log(Math.round(flt));
console.log(Math.trunc(flt));

// 7th Part of Assignment
console.log(+(Math.random()*4).toFixed());