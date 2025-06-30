let button = document.querySelector("#btn");
let para = document.querySelector('p');

function changeParaColor() {
    console.log("btn clicked");
    
    let r = Math.floor(Math.random() * 255)+1;
    let g = Math.floor(Math.random() * 255)+1;
    let b = Math.floor(Math.random() * 255)+1;

    let rgb = `${r}, ${g}, ${b}`; 
    console.log(rgb);
    
    para.style.color = `rgb(${rgb})`;
}
button.addEventListener('click', changeParaColor)