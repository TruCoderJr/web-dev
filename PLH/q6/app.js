// let btns = document.querySelectorAll(".btn");
// let paras = document.querySelectorAll("p");

// function removeAllText() {
//         paras.forEach((para) => para.classList.add("remove"));
// }

// btns.forEach((btn, index) => {
//         btn.addEventListener("click", () => {
//             removeAllText(); // Hide all paragraphs
//             paras[index].classList.remove("remove"); // Show only the clicked one
//         });
// });

// Method 2

let paras = document.querySelectorAll("p");
let divs = document.querySelectorAll("#tab")

paras[0].style.display = "block";
paras[0].style.display = "50%";

divs.forEach((div, index) =>{
    div.addEventListener("mouseenter", () =>{
        div.style.cursor = 'pointer';
        // console.log("enter");
        // console.log(div.style.cursor);
        
        
    });

    div.addEventListener("click", () =>{
        hideAllPara();
        paras[index].style.display= "block";
        paras[index].style.display = "50%";
    });
})


function hideAllPara(){
    paras.forEach((para,index) => {
        paras[index].style.display = "none";
    });
}