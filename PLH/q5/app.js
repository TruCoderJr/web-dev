let start = document.querySelector("#str");
let stop = document.querySelector("#sto");
let para = document.querySelector('p');

let i ;
let countDown;

start.addEventListener('click', () =>{
    // para.innerText = '0';
    i = 1;
    countDown = setInterval(() =>{
        para.innerText = `${i}`;
        i++;
    },1000);
})
stop.addEventListener("click", ()=>{
    clearInterval(countDown);
})