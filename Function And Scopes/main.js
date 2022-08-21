// function getDetails(zName,zAge,zCountry){

//        function namePattern(){
//         arr = zName.split(" ");
//         lastNameFirstLetter = (arr[1].substr(0,arr[1].charAt().length)).toUpperCase();
//         zName = arr[0]+" "+lastNameFirstLetter+".";
//         return zName;
//     }

//     function ageWithMessage(){
//         zAge = `Your Age Is ${parseInt(zAge)}`
//             return zAge;
//     }

//     function countryTwoLetters(){
//         zCountry = `You Live In ${zCountry.slice(0,2).toUpperCase()}`;
//         return zCountry;
//     }

//     function fullDetails(){
//         return `Hello ${namePattern()}, ${ageWithMessage()}, ${countryTwoLetters()}`
//     }

//     return fullDetails();
// }

// console.log(getDetails("Mudhafar salah","26 is my age", "sudan"));

// Second part
// let itsMe = () => `Iam A Normal Function`;
// console.log(itsMe());

// let urlCreate =  (protocal, web, tld) => `${protocal}://www.${web}.${tld}`;
// console.log(urlCreate("https","elzero","org"))

// part three
// let checker = (zName) => {
//     return (status) => {
//         return (salary) => {
//             return status === "Available" ? `My Name Is ${zName}, My Salary Is ${salary}` : `Iam Not Avaialble`;
//         }
//     }
// }
// console.log(checker("Mudhafar")("Available")(5000));

// part four
function specialMix(...data){
let result = 0;
    for (let i = 0; i < data.length ; i++) {
       isNaN(parseInt(data[i])) ? "" : (result += parseInt(data[i]));
    }

    if (result === 0){
        return "all is string";    
    }
    
return result;
}

console.log(specialMix(10, 20, 30)); // 60
console.log(specialMix("10Test", "Testing", "20Cool")); // 30
console.log(specialMix("Testing", "10Testing", "40Cool")); // 50
console.log(specialMix("Test", "Cool", "Test")); // All Is Strings