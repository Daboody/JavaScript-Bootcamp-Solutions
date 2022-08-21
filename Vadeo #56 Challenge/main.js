let myAdmins = ["Ahmed","Osama","Sayed","Stop","Samera"];
let myEmployees = ["Amged","Samah","Ameer","Omar","Othman","Amany","Samia"];
myEmployees.sort();

for (let firstCounter= 0 ; firstCounter < myAdmins.length ;firstCounter++){
  if(myAdmins[firstCounter] == "Stop"){
    myAdmins = myAdmins.slice(myAdmins[firstCounter],myAdmins.indexOf("Stop"));
    break;
  }
  document.write(`<hr>`);
  document.write(`The Admin for team ${firstCounter+1} Is ${myAdmins[firstCounter]}
  <h3>Team Member :</h3>`);
  



  


}

// }

// for (i ; i < friends.length ; i++){
//     if(friends[i].startsWith(letter.toUpperCase()) == true){
//         friends.splice(friends[i].charAt(letter.toUpperCase()),letter.length);
//     }
// console.log(`${i+letter.length} => ${friends[i]}`);
// }

// document.write(`<div> We Have ${myAdmins.length} Admins </div> `);
