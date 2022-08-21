let friends = ["Ahmed" , "Sayed" , "Ali" , 1 , 2 , "Mahmoud" , "Amany"];
let index = 0;
let counter = 0;

while (counter < friends.length){

if(typeof friends[counter] == typeof index){
    counter++;
    continue;
    }
if (friends[counter].charAt() == friends[index][index]){
    counter++;
    continue;
    }
    console.log(`=> ${friends[counter]}`);
    counter++;
}
// outPut :
// Sayed
// Mahmoud
