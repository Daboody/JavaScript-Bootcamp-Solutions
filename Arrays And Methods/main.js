// 1st Part Of Assignment
let myFriends = ["Ahmed","Elham","Osama","Gamal"];
let num = 3;

console.log(myFriends.slice(-myFriends.length,num));
myFriends.pop()
console.log(myFriends);

// 2nd Part Of Assignment
let friends = ["Ahmed","Eman","Osama","Gamal"];

friends.pop();
friends.shift();
console.log(friends);


// 3rd Part Of Assignment
let arrOne = ["C","D","X"];
let arrtwo = ["A","B","Z"];
let finalArr = [];

finalArr = finalArr.concat((arrtwo.pop()).split(),arrOne.reverse(),arrtwo.reverse());
console.log(finalArr);


// 4th Part Of Assignment
let website = "Go";
let words = [`${website}ogle`, "Facebook" , ["Elzero", "Web" , "School"]];

console.log(words[website.length][0].slice(website.length).toUpperCase());


// 5th Part Of Assignment
let needle = "JS";
let haystack = ["PHP","JS","Python"];

if (haystack.includes(needle) == true){
    console.log("Found");
}else{
    console.log("Not Found");
}

if (haystack.lastIndexOf(needle) == true){
    console.log("Found");
}else{
    console.log("Not Found");
}

if (haystack.indexOf(needle) == true){
    console.log("Found");
}else{
    console.log("Not Found");
}

// 6th Part Of Assignment
let arr1 = ["A","C","X"];
let arr2 = ["D","E","F","Y"];
let allArrs = [];

allArrs = ((arr2.slice(-arr1.length,arr1.length).pop())+(arr1.pop())+(arr2.slice(-arr1.length).pop())).toLowerCase();
console.log(allArrs);