// let addClassesInput = document.querySelector(".classes-to-add");
// let removeClassesInput = document.querySelector(".classes-to-remove");
// let currentElement = document.querySelector(".assign").children[2];
// let containerArea = document.querySelector(".classes-list").children[1];



// addClassesInput.onblur = function (){
//     if (addClassesInput.value.toString().split(" ").length == 1){
//         let theFirstClass = addClassesInput.value.toString().split(" ")[0];
//         currentElement.classList.add(`${theFirstClass.toLowerCase()}`);
//     }else{
//         let theFirstClass = addClassesInput.value.toString().split(" ")[0];
//         let theSecondClass = addClassesInput.value.toString().split(" ")[1];
//         currentElement.classList.add(`${theFirstClass.toLowerCase()}`,`${ theSecondClass.toLowerCase()}`);
//     }
// }

// removeClassesInput.onblur = function (){
//     if (removeClassesInput.value.toString().split(" ").length == 1){
//         let theFirstClass = removeClassesInput.value.toString().split(" ")[0];
//         currentElement.classList.remove(`${theFirstClass.toLowerCase()}`);
//     }else{
//     let theFirstClass = removeClassesInput.value.toString().split(" ")[0];
//     let theSecondClass = removeClassesInput.value.toString().split(" ")[1];
//     currentElement.classList.remove(`${theFirstClass.toLowerCase()}`,`${ theSecondClass.toLowerCase()}`);
    
// }
// }

// addClassesInput.addEventListener("blur",function(){
   
//     for(let i = 0; i < currentElement.classList.length; i++){
//         let theAddedClassElement = document.createElement("span"); 
//         theAddedClassElement.innerHTML = currentElement.classList[i];
//         containerArea.appendChild(theAddedClassElement);
//     }
//     addClassesInput.value = "";
// });


// removeClassesInput.addEventListener("blur",function(){
//     for(let i = 0; i < containerArea.children.length; i++){
//         if (removeClassesInput.value.toString().toLowerCase().split(" ")[0] === containerArea.children[i].innerHTML){
//             containerArea.children[i].remove(`${removeClassesInput.value.toString().toLowerCase().split(" ")[0]}`);
//         }
//         if (removeClassesInput.value.toString().toLowerCase().split(" ")[1] === containerArea.children[i].innerHTML){
//             containerArea.children[i].remove(`${removeClassesInput.value.toString().toLowerCase().split(" ")[1]}`);
//         }
        
//     }
//     removeClassesInput.value = "";
// });

// Use Filter Method To Solve Previous part of assignment
// let arr = [1,2,1,3,4];
// let mynew = arr.filter(function(ele,index,arr){
//     return arr.indexOf(ele) === index;
// });


// Third Part
// let myP = document.querySelector("p");
// let myDiv = document.querySelector("div");
// myP.remove();

// let myStartElement = document.createElement("div");
// myStartElement.classList ="start";
// myStartElement.setAttribute("title","Start Element");
// myStartElement.setAttribute("data-value","Start");
// myStartElement.innerHTML = "Start";
// myDiv.before(myStartElement);

// let myEndElement = document.createElement("div");
// myEndElement.classList ="end";
// myEndElement.setAttribute("title","End Element");
// myEndElement.setAttribute("data-value","End");
// myEndElement.innerHTML = "End";
// myDiv.after(myEndElement);

// Fourth Part 
// let myParentDiv = document.querySelector("div");
// console.log(myParentDiv.textContent.slice(32,38));

// Fivth Part
// addEventListener("click",function(e){
// console.log(`This is ${e.target.nodeName}`);
// });



