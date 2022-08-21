// First Part
// document.getElementById("elzero");
// document.getElementsByTagName("div");
// document.getElementsByClassName("element");
// document.getElementsByName("js");
// document.querySelector("div");
// document.querySelector("#elzero");
// document.querySelector(".element");
// document.querySelector("[name = js]");
// document.querySelectorAll("div");
// document.querySelectorAll("#elzero");
// document.querySelectorAll(".element");
// document.querySelectorAll("[name = js]");
// document.body.children[0];
// document.body.childNodes[1];
// document.body.firstElementChild;

// Second Part
// for (let i = 0 ; i <= 10 ; i++){
//     document.images[i].src = "https://elzero.org/wp-content/themes/elzero/imgs/logo.png";
//     document.images[i].alt = "Elzero Logo";
// }

// Third Part 
// let theInput = document.querySelector("[name = dollar]");
// let theResult = document.querySelector(".result");
// theInput.oninput = function (){
//     theResult.firstElementChild.innerHTML = theInput.value;
//     theResult.lastElementChild.innerHTML = (theInput.value * 15.6).toFixed(2);
// }

// // Fourth Part
// let firstDiv = document.querySelector(".one");
// let secondDiv = document.querySelector(".two");

// firstTitle = secondDiv.getAttribute("title");
// secondTitle = firstDiv.getAttribute("title");

// firstContent = secondDiv.textContent;
// secondContent = firstDiv.textContent;

// firstDiv.title = firstTitle;
// firstDiv.innerHTML = firstContent;

// secondDiv.title = secondTitle;
// secondDiv.innerHTML = `${secondContent} ${secondDiv.getAttributeNS.length}`;

// Fivth Part 
// for (let i = 0; i < 5; i++){
//     if (document.images[i].hasAttribute("alt")){
//         document.images[i].alt = "Old";
//     }else{
//         document.images[i].setAttribute("alt","Elzero New");
//     }
// }

// sixth Part
// let numberOfElement = document.querySelector("[name = elements]");
// let elementText = document.querySelector("[name = texts]");
// let elementType = document.querySelector("select");
// let create = document.querySelector("[name = create]");
// let elementContainer = document.querySelector(".results");

// document.forms[0].style.cssText = "display: flex; flex-flow:column; margin: 0 auto; gap:10px;";
// numberOfElement.style.cssText = "padding:10px; font-size:17px; border-radius: 10px; border: none; background-color: cadetblue; color:#fff;"
// elementText.style.cssText = "padding:10px; font-size:17px; border-radius: 10px; border: none; background-color: cadetblue; color:#fff;"
// elementType.style.cssText = "padding:10px; font-size:17px; border-radius: 10px; border: none; background-color: cadetblue; color:#fff;"
// create.style.cssText = "padding:10px; font-size:17px; background-color: #065ba6; color:#fff; border:none; border-radius: 10px;"
// elementContainer.style.cssText =  "display: grid; grid-template-columns: repeat(auto-fill,minmax(200px,1fr)); gap:15px";

// create.onclick = function (e) {
//     elementContainer.innerHTML = "";
//     if (elementType.value == "Section"){
        
//         for (let i = 0 ; i < numberOfElement.value; i++){
//             let mySection = document.createElement("section");
//             mySection.style.cssText = "padding:10px; font-size:15px; background-color: rgb(19, 40, 60); color:#fff; border:none; border-radius: 10px; text-align:center";
//             mySection.setAttribute("title","Element");
//             mySection.setAttribute("class","box");
//             mySection.setAttribute("id",`id-${i+1}`)
            
//             let myElementText = elementText.value;
//             mySection.innerHTML = myElementText;
            
//             elementContainer.appendChild(mySection);
//         }
//     }else{
//         for (let i = 0 ; i < numberOfElement.value; i++){
//             let myDiv = document.createElement("div");
//             myDiv.style.cssText = "padding:10px; font-size:15px; background-color: rgb(19, 40, 60); color:#fff; border:none; border-radius: 10px; text-align:center";

//             myDiv.setAttribute("title","Element");
//             myDiv.setAttribute("class","box");
//             myDiv.setAttribute("id",`id-${i+1}`)
            
//             let myElementText = elementText.value;
//             myDiv.innerHTML = myElementText;
//             elementContainer.appendChild(myDiv);
//         }
//     }
//         e.preventDefault(); 
// }

