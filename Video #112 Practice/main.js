let lis = document.querySelectorAll("ul li");
let exp = document.querySelector(".experiment")

if(window.localStorage.getItem("color")){
    // If There is a Color in Local Storage
    // [1] Add Color To Div
    exp.style.backgroundColor = window.localStorage.getItem("color");
    // [2] Remove Active Class From All Lis
    lis.forEach((li) => {
        li.classList.remove("active");
    });
    // [3] Add Active Class To Current Color
    document.querySelector(`[data-color = "${window.localStorage.getItem("color")}"]`).classList.add("active");
}

lis.forEach((li) => {
    li.addEventListener("click",(e) => {

        lis.forEach((li) => {
            // Remove active class from all lis
            li.classList.remove("active");
        });
        // Add Active Class To Current Element
        e.currentTarget.classList.add("active");
        // Add Current Color To local Storage 
        window.localStorage.setItem("color",e.currentTarget.dataset.color);
        // Change Div BackGround Color
        exp.style.backgroundColor = e.currentTarget.dataset.color;
    });
});
