// 1st And 2nd Part Of Assingment
// ######################################################################
// let myReq = new XMLHttpRequest();
// myReq.open("GET","articles.json",true);
// myReq.send();

// myReq.onloadend = function () {
//     if(this.readyState === 4 && this.status === 200){
//         console.log(myReq.responseText)
//         console.log("Data Loaded");
//     };
// };

// ######################################################################
// 3rd Part Of Assingment
// ######################################################################
// let myReq = new XMLHttpRequest();
// myReq.open("GET","articles.json",true)
// myReq.send();

// myReq.onreadystatechange = function () {
// if(this.readyState === 4 && this.status === 200){
//         let mainData = JSON.parse(myReq.response)
//         for(let i = 0; i < mainData.length; i++) {
//             mainData[i].category = "All";
//         }
//         console.log(mainData)
//         let updatedData = JSON.stringify(mainData);
//         console.log(updatedData)
// }
// }
// ######################################################################
// 4th Part Of Assingment
// ######################################################################
// let myReq = new XMLHttpRequest();
// myReq.open("GET","articles.json");
// myReq.send();

// myReq.onreadystatechange = function () {
// if(this.readyState === 4 && this.status === 200){
//         let mainData = JSON.parse(myReq.response);
//         console.log(mainData);
//         let div = document.createElement("div");
//         div.setAttribute("id","data")
//         for(let i = 0; i < mainData.length; i++) {
//            let article = document.createElement("div");
//             article.innerHTML = `
//             <h2>${mainData[i].title}</h2>
//             <p>${mainData[i].body}</p>
//             <p>Author: ${mainData[i].author}</p>
//             <p>category: ${mainData[i].category}</p>`;
//             div.appendChild(article);
//         };
//         document.body.appendChild(div);
// };
// };