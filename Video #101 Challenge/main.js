// Create Header Elements
let header = document.createElement("header");
let logo = document.createElement("a");
let nav = document.createElement("ul");
let home = document.createElement("li");
let about = document.createElement("li");
let service = document.createElement("li");
let contact = document.createElement("li");
// Create Body Content Element
let productContainer = document.createElement("div");
// Create Footer Element
let footer = document.createElement("footer");

// Header Text Content
home.innerHTML = "Home";
about.innerHTML = "About";
service.innerHTML = "Service";
contact.innerHTML = "Contact";
logo.innerHTML = "Logo";
// Footer Text Content
footer.innerHTML = "Copyright 2022";

// Add Navbar Items
nav.appendChild(home);
nav.appendChild(about);
nav.appendChild(service);
nav.appendChild(contact);
// Add header Elements
header.appendChild(logo);
header.appendChild(nav);
// Add header to the page
document.body.appendChild(header);

// Products
for (let i = 0 ; i < 15 ; i++){
    let productItem = document.createElement("div");
    let productNumber = document.createElement("span");
    let productDescription = document.createElement("span");
    productItem.appendChild(productNumber);
    productItem.appendChild(productDescription);
    productContainer.appendChild(productItem);
    productNumber.innerHTML = `${i + 1}`;
    productDescription.innerHTML = `Product`;
    productItem.style.cssText = "display: flex; flex-flow: column; justify-content : center; align-items: center; padding: 15px; border : 1px solid black; background-color: #fff;";
    productNumber.style.cssText = "font-size: 40px;";
    productDescription.style.cssText = "color: rgb(153, 153, 134);";
};

// Add Content Main Element To Body
document.body.appendChild(productContainer);
// Add Footer Element To Body
document.body.appendChild(footer);

// CSS Style
document.body.style = "margin: 0px; padding:0;";
header.style.cssText = "display: flex; justify-content: space-between; align-items: center; padding : 0 25px;";
logo.style.cssText = "font-size : 20px; color : red;";
nav.style.cssText = "display: flex; width : 250px; justify-content: space-between; list-style-type: none; color: blue";
productContainer.style.cssText = "display: grid; grid-template-columns : repeat(auto-fill, minmax(220px, 1fr)); gap:10px; background-color: rgb(227, 227, 224);" ;
footer.style.cssText = "display: flex; justify-content: center; align-items: center; color: #fff; background-color: green; padding: 20px";
