// First Part Of Assingment
// #####################################################################
// const serverData = new XMLHttpRequest();
// serverData.open("GET","data.json");
// serverData.send();

// serverData.onload = function () {
//     if (this.readyState === 4 && this.status === 200){

//     const myPromise = new Promise((res,rej) => {
//         res(JSON.parse(this.response));
//     });

//        myPromise.then((theData) => {
//         theData.length = 5;
//        });

//        myPromise.then((addDataToDocument) => {
//            let div = document.createElement("div");

//         for (let i =0; i<addDataToDocument.length; i++){
//             let article = document.createElement("div");
//             article.innerHTML = `
//             <h2>${addDataToDocument[i].title}</h2>
//             <p>${addDataToDocument[i].description}</p>`
//             div.appendChild(article);
//         }
//         document.body.appendChild(div);
//        })  
//     } else {
//          throw Error("There Is Error In API Response")
//     }}
// #####################################################################
// Second Part Of Assingment
// #####################################################################
// let theFetch = fetch("data.json")
// .then((result) => {
//     let theData = result.json()
//     return theData
// });

// theFetch.then((editDataLength) => {
//     editDataLength.length = 5;
// });

// theFetch.then((addDataToDocument) => {
//     let theDiv = document.createElement("div");
//     for(let i =0; i<addDataToDocument.length; i++){
//         let article = document.createElement("div");
//             article.innerHTML = `
//             <h2>${addDataToDocument[i].title}</h2>
//             <p>${addDataToDocument[i].description}</p>`
//             theDiv.appendChild(article);
//     }
//     document.body.appendChild(theDiv);
// });
// #####################################################################