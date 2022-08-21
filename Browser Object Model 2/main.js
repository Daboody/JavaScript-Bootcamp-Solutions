// let fontSizes = document.querySelectorAll("#font-size option");
// let fontFamily = document.querySelectorAll("#fonts-family option");
// let textColors = document.querySelectorAll("#colors option");
// let myP = document.querySelector("p");

// // If There Is Color In Local Storage
// if(window.localStorage.getItem("color")){
// // [1] Add Color To Element
// myP.style.color = window.localStorage.getItem("color");
// // Remove Selected From All Options
// textColors.forEach((color) => {
//     color.removeAttribute("selected");
// });
// // Add Selected To Current Element
// let current = document.querySelector(`[value = "${window.localStorage.getItem("color")}"]`);
// current.setAttribute("selected","selected");
// }

// // If There Is Font Size In Local Storage
// if(window.localStorage.getItem("fontsize")){
//     // [1] Add Font Size To Element
//     myP.style.fontSize = window.localStorage.getItem("fontsize");
//     // Remove Selected From All Options
//     fontSizes.forEach((size) => {
//         size.removeAttribute("selected");
//     });
//     // Add Selected To Current Element
//     let current = document.querySelector(`[value = "${window.localStorage.getItem("fontsize")}"]`);
//     current.setAttribute("selected","selected");
//     }

//     // If There Is Font Family In Local Storage
// if(window.localStorage.getItem("fontFamily")){
//     // [1] Add Font Size To Element
//     myP.style.fontFamily = window.localStorage.getItem("fontFamily");
//     // Remove Selected From All Options
//     fontFamily.forEach((font) => {
//         font.removeAttribute("selected");
//     });
//     // Add Selected To Current Element
//     let current = document.querySelector(`[value = "${window.localStorage.getItem("fontFamily")}"]`);
//     current.setAttribute("selected","selected");
//     }

//     // Font Size Settings
// fontSizes.forEach((size) => {
//     size.addEventListener("click", (e) =>{
//         // Remove Selected from all Elements
//         fontSizes.forEach((size) => {
//                 size.removeAttribute("selected");
//         });
//         // Add Selected to current element
//         e.currentTarget.setAttribute("selected","");
//         // Add current fontSize to Local storage
//         window.localStorage.setItem("fontsize",e.currentTarget.value);
//         // Change P Font Size
//         myP.style.fontSize = e.currentTarget.value;
//     });
// });
//     // Colors Settings
// textColors.forEach((color) => {
//     color.addEventListener("click", (e) =>{
//         // Remove Selected from all Elements
//         textColors.forEach((color) => {
//                 color.removeAttribute("selected");
//         });
//         // Add Selected to current element
//         e.currentTarget.setAttribute("selected","");
//         // Add current fontSize to Local storage
//         window.localStorage.setItem("color",e.currentTarget.value);
//         // Change P Font Size
//         myP.style.color = e.currentTarget.value;
//     });
// });

//     // Font Family Settings
// fontFamily.forEach((font) => {
//     font.addEventListener("click", (e) =>{
//         // Remove Selected from all Elements
//         fontFamily.forEach((font) => {
//                 font.removeAttribute("selected");
//         });
//         // Add Selected to current element
//         e.currentTarget.setAttribute("selected","");
//         // Add current fontSize to Local storage
//         window.localStorage.setItem("fontFamily",e.currentTarget.value);
//         // Change P Font Size
//         myP.style.fontFamily = e.currentTarget.value;
//     });
// });


// // Second Part Of Assignment

// let userName = document.querySelector("[type='text']");
// let userEmail = document.querySelector("[type='email']");
// let userNumber = document.querySelector("[type='tel']");
// let Address = document.querySelectorAll("#address option");

// userName.addEventListener("input", () => {
//     window.sessionStorage.setItem("userName", `${userName.value}`);
// });

// userEmail.addEventListener("input", () => {
//     window.sessionStorage.setItem("userEmail", `${userEmail.value}`);
// });

// userNumber.addEventListener("input", () => {
//     window.sessionStorage.setItem("userNumber", `${userNumber.value}`);
// });

// Address.forEach((addr) => {
//     addr.addEventListener("click", (e) => {
//         window.sessionStorage.setItem("address", `${e.currentTarget.value}`);
        
//     });
// });

// // If There Is UserName In Session Storage
// if(window.sessionStorage.getItem("userName")){
//     userName.value = window.sessionStorage.getItem("userName");
// }

// // If There Is userEmail In Session Storage
// if(window.sessionStorage.getItem("userEmail")){
//     userEmail.value = window.sessionStorage.getItem("userEmail");
// }

// // If There Is userNumber In Session Storage
// if(window.sessionStorage.getItem("userNumber")){
//     userNumber.value = window.sessionStorage.getItem("userNumber");
// }

// // If There Is address In Session Storage
// if(window.sessionStorage.getItem("address")){
//     // Add Selected To Current Element
//    let current = document.querySelector(`[value = "${window.sessionStorage.getItem("address")}"]`);
//    current.setAttribute("selected","selected");
// };