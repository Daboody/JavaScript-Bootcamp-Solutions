// First Part Of Assignment
// let twoNum = window.prompt("Print Number From - To","Example: 5-20").split("-");

// if (twoNum[0] < twoNum[1]){
//     for(let i = twoNum[0]; i <= twoNum[1]; i++){
//         console.log(+i);
//     }
// } else {
//     for(let i = twoNum[0]; i >= twoNum[1]; i--){
//         console.log(+i);
//     }
// }

// Second Part Of Assignment
// window.onload = setTimeout(popup,5000);

// function popup(){
// let popupContainer = document.createElement("div");
// popupContainer.classList = "popup";
// popupContainer.style.cssText = "width:400px; padding:20px; margin: 50px auto; background-color:rgb(47, 47, 47); border-radius:4px; position: relative; ";

// let intro = document.createElement("p");
// intro.classList = "text";
// intro.innerHTML = "Welcome To Our Platform"
// intro.style.cssText = " font-size:25px; text-align:center; color:#fff;";

// let deletePopup = document.createElement("button");
// deletePopup.classList = "delete-element";
// deletePopup.innerHTML = "X";
// deletePopup.style.cssText = "width:25px; height:25px; text-align:center; font-size:9px; font-weight: bold; text-align:center; border-radius:50%; border:none;background-color: #d94949; cursor: pointer; position: absolute; top: -10px; right: -10px; color: #fff;";

// document.body.appendChild(popupContainer);
// popupContainer.appendChild(intro);
// popupContainer.appendChild(deletePopup);

// // Delete Popup on Click
// deletePopup.addEventListener("click",function(){
//     deletePopup.parentElement.remove();
// });

// };


// Third Part Of Assingment
// let div = document.createElement("div");
// div.innerHTML = "3";
// document.body.appendChild(div);

// let counter = setInterval(countDown,1000);

// function countDown (){
//     div.innerHTML -= 1;
//     if (div.innerHTML == "0"){
//         clearInterval(counter);
//     };
// };

// Fourth Part Of Assingment
// let div = document.createElement("div");
// div.innerHTML = "3";
// document.body.appendChild(div);

// let counter = setInterval(countDown,1000);

// function countDown (){
//     div.innerHTML -= 1;
//     if (div.innerHTML == "0"){
//         window.location.href = "https://elzero.org/";
//     };
// }


// Fivth Part Of Assingment
// let div = document.createElement("div");
// div.innerHTML = "3";
// document.body.appendChild(div);

// let counter = setInterval(countDown,1000);

// function countDown (){
//     div.innerHTML -= 1;
//     if (div.innerHTML == "0"){
//         clearInterval(counter);
//         window.open("https://elzero.org/","_blank","width =800,height=400,left=300,top=100");
//     };
// }