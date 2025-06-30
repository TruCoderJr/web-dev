let textArea = document.querySelector("#text");
let p = document.querySelector("p");
let i = 0;

textArea.addEventListener("input", () =>{
    
    let str = textArea.value;
    let charCount = [...str];
    i = charCount.length;
    if (textArea.value != "") {
        if (i >= 0 && i <= 500) {
            p.innerText = `${i} / 500`
        }else if( i > 500){
            let newStr = str.slice(0,501);
            
            textArea.value = `${newStr}`;
            p.innerText = `${500} / 500`
        }
    }
    
})

// Q10. Show a progress bara which shows how much page has been scrolled.
let db = document.querySelector("#downloadBar");
let pg = document.querySelector("#progressBar");
let body = document.querySelector('body');

let bdHt = body.scrollHeight - window.innerHeight;
// console.dir(body)
console.log(bdHt);

let j;

function progress(scrolledPostion) {
    j = (parseInt(scrolledPostion)/bdHt) * 100;
    console.log(j);
    
    // if (j >= bdHt) {
    //     pg.style.width = `${bdHt}%`;
    // }else{
    //     pg.style.width = `${j}%`;
    // }

    pg.style.width = `${Math.min(j, 100)}%`;
}
window.addEventListener('scroll', function() {
    console.log('Page is being scrolled');
    // console.log('Scroll position:', window.scrollY); // Get vertical scroll position
    progress(window.scrollY);
});