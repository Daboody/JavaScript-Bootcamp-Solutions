let a = "Elzero Web School";
// first answer 
console.log(a.charAt(2).toUpperCase()+a.slice(3,6));

// second answer
console.log(a.charAt(13).toUpperCase().repeat(8));

// third answer 
console.log(a.split(" Web School",1));

// fourth answer 
console.log(`${a.substr(0,6)} ` + `${a.substr(11,6)}`);

// fivth answer 
console.log(`${a.charAt(0).toLowerCase()}${a.slice(1,a.length-1).toUpperCase()}${a.charAt(a.length-1).toLowerCase()}`);