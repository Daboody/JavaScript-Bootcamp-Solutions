let chosen = 3;
let myFriends = [
    {title:"Osama", age:39, available:true, skills : ["HTML","CSS"]},
    {title:"Ahmed", age:25, available:false, skills : ["Python","Django"]},
    {title:"Sayed", age:33, available:true, skills : ["PHP","Laravel"]},
];
if (chosen == 1){
    [{title,age,available,skills:[first,last]},,] = myFriends;
    console.log(`${title} ${age} ${available == true ? "available" : "Not available"} ${last}`);
} else if (chosen == 2) {
     [,{title,age,available,skills:[,last]},] = myFriends;
    console.log(`${title} ${age} ${available == true ? "available" : "Not available"} ${last}`);
} else if (chosen == 3) {
     [,,{title,age,available,skills:[,last]}] = myFriends;
    console.log(`${title} ${age} ${available == true ? "available" : "Not available"} ${last}`);
};