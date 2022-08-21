// First Answer 
let a = 10;
a<10 ? console.log(10) : a>10&&a<=40 ? console.log("10 to 40") : a>40 ? console.log("> 40") : console.log("Unknown");

// Second Answer
let st = "Elzero Web School";
(st.length+st.length).toString() === "34" ? console.log("Good") : console.log("Failed");

// Third Answer
st.toLowerCase().includes("w") && "w" === "w" ? console.log("Good") : console.log("Failed");

// Fourth Answer
st  !== "string" ? console.log("Good") : console.log("Failed");

// fivth Answer
typeof +st  === "number" ? console.log("Good") : console.log("Failed");

// sixth Answer 
st.slice(0,6).repeat(2) === "ElzeroElzero" ? console.log("Good") : console.log("Failed");