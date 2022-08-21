// First Part Of Assignment
// ###################################################################################
// class Car {
//     constructor(name, model, price){
//         this.n = name;
//         this.m = model;
//         this.p = price;
//     }
//     // 
//     run(){
//         return `Car Is Running Now`;
//     }
//     stop(){
//         return `Car Is Stopped`;
//     }
// }
//     let firstCar = new Car("MG",2022,420000);
//     let secondtCar = new Car("BMW",2020,4250000);
//     let thirdCar = new Car("NISSAN",2025,5420000);
//     console.log(`Car One Name Is ${firstCar.n} And Model Is ${firstCar.m} And Price Is ${firstCar.p}`);
//     console.log(firstCar.run());
// ###################################################################################

// Second Part Of Assignment
// ###################################################################################
// class Phone {
    //     constructor(name, serial, price) {
//       this.name = name;
//       this.serial = serial;
//       this.price = price;
//     }
//   }
  
// class Tablet extends Phone {
//     constructor(name, serial, price, size){
    //         super(name,serial,price);
    //         this.size = size || "Unknown";
    //     }
    //     fullDetails(){
        //         return `${this.name} Serial is ${this.serial} And Size Is ${this.size}`
//     }
// }
  
//   let TabletOne = new Tablet("iPad", 100200300, 1500, 12.9);
//   let TabletTwo = new Tablet("Nokia", 350450650, 800, 10.5);
//   let TabletThree = new Tablet("LG", 250450650, 650);

//   console.log(`${TabletOne.fullDetails()}`);
//   // iPad Serial is 100200300 And Size Is 12.9

//   console.log(`${TabletTwo.fullDetails()}`);
//   // Nokia Serial is 350450650 And Size Is 10.5

//   console.log(`${TabletThree.fullDetails()}`);
//   // LG Serial is 250450650 And Size Is Unknown
// ###################################################################################

// Third Part Of Assignment
// ###################################################################################
// class User {
//         #c;
//     constructor(username, card) {
//       this.u = username;
//       this.#c = card;
//     }
//     get showData(){
//             return `Hello ${this.u} Your Credit Card Number Is ${this.getCard()}`;
//         }
//         getCard(){
//                 let stringNum = this.#c.toString();
//                 let result = stringNum.split("").toString().replaceAll(",","").replaceAll("-","")
//                 let newValue = result.replaceAll(result,`${result[0]}${result[1]}${result[2]}${result[3]}-${result[4]}${result[5]}${result[6]}${result[7]}-${result[8]}${result[9]}${result[10]}${result[11]}-${result[12]}${result[13]}${result[14]}${result[15]}`)
//                 return newValue;
//     }
// }



//   let userOne = new User("Osama", "1234-5678-1234-5678");
//   let userTwo = new User("Ahmed", "1234567812345678");
//   let userThree = new User("Ghareeb", 1234567812345678);

//   console.log(userOne.showData);
//   // Hello Osama Your Credit Card Number Is 1234-5678-1234-5678

//   console.log(userTwo.showData);
//   // Hello Ahmed Your Credit Card Number Is 1234-5678-1234-5678

//   console.log(userThree.showData);
//   // Hello Ghareeb Your Credit Card Number Is 1234-5678-1234-5678

//   console.log(userOne.c); // Prevent Accessing To Card Property Here
  // Undefined
// ###################################################################################

// Fourth Part Of Assignment
// ###################################################################################
// String.prototype.addLove = function(){
//     return `I Love ${this} Web School`;
// }

// // Do Not Edit Below
// let myStr = "Elzero";
// console.log(myStr.addLove()); // I Love Elzero Web School
// ###################################################################################

// Fivth Part Of Assignment
// ###################################################################################

// const myObj = {
//     username: "Elzero",
//     id: 100,
//     score: 1000,
//     country: "Egypt",
// };

// Object.defineProperties(myObj,{
//     score:{
//         writable:false,
//     },
//     id:{
//         enumerable:false,
//     },
//     country:{
//         configurable:true,
//     },
// });
// delete myObj.country;

// myObj.score = 500;

// for (let prop in myObj) {
//     console.log(`${prop} => ${myObj[prop]}`);
//   }
//   console.log(myObj);
  
  "username => Elzero"
  "score => 1000"
  //   {username: 'Elzero', score: 1000, id: 100}
  // ###################################################################################