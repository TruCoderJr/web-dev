let btn = document.querySelector("#btn");
let img1 = document.querySelector("#img1");
let img2 = document.querySelector("#img2");

function swapImg() {
    let s1 = img1.src; // Get the src of img1
    let s2 = img2.src; // Get the src of img2

    img1.src = s2; // Swap the sources
    img2.src = s1;
}

btn.addEventListener('click', swapImg);
