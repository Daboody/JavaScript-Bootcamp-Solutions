// // 1st Part Of Assignment
// let start = 10;
// let end = 100;
// let exclude = 40; 
// for (start;start<=end;start+=(((start.toString()).length)+((end.toString()).length))*((exclude.toString()).length)){
//     if(start == exclude){
//       start += (((start.toString()).length)+((end.toString()).length))*((exclude.toString()).length)
//     }
//     console.log(start);
// }

// // 2nd Part Of Assignment
// let start1 = 10;
// let end1 = 0;
// let stop1 = 3;
// for (start1;start1>=stop1;start1--){
//     if(start1<(stop1+stop1+stop1)+(stop1.toString().length)){
//     start1 = `${end1}${start1}`; 
// }
//     console.log(start1);
// }

// // 3rd Part Of Assignment
// let start2 = 1;
// let end2 = 6;
// let breaker = 2;

// for (start2;start2<=end2;start2++){
//     console.log(start2);

//     // for (breaker-start2;breaker;breaker+=breaker)
//     console.log("-- "+breaker);
//     console.log("-- "+(end2-breaker));
// }


// 4th Part Of Assignment
// let index = 10;
// let jump = 2;
// let end3 = 0;

// for(;;){
//         if (index<= jump){
//             break;
//         }
//         console.log(index)
//         index = index-jump ;
// }


// 5th Part Of Assignment

// let friends = ["Ahmed","Sayed","Eman","Mahmoud","Ameer","Osama","Sameh"];
// let letter = "a";
// let i=letter.length-letter.length;

// for (i ; i < friends.length ; i++){
//     if(friends[i].startsWith(letter.toUpperCase()) == true){
//         friends.splice(friends[i].charAt(letter.toUpperCase()),letter.length);
//     }
// console.log(`${i+letter.length} => ${friends[i]}`);
// }


// 6th Part Of Assignment
// let start = 0 ;
// let swappedName = "elZerO";
// let result = "";

// for(start; start<swappedName.length;start++){
// if (swappedName[start] == swappedName[start].toLowerCase()){
//     result += swappedName[start].toUpperCase();
// }
// if (swappedName[start] == swappedName[start].toUpperCase()){
//     result +=  swappedName[start].toLowerCase();
// }
// }
// console.log(result);


// 7th Part Of Assignment
// let start = 0;
// let mix = [1 , 2 , 3 , "A" , "B" , "C" , 4 ];
// for (start ; start<mix.length;){
//     start++;
//     if(typeof mix[start] !== typeof start){
//         continue;
//     }
//     console.log(mix[start])
// }
