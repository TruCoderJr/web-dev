let button = document.querySelector("#btn");
let inp1 = document.querySelector('label #name');
let inp2 = document.querySelector('label #age');
let form = document.querySelector("form");

let info = document.createElement('h4');

form.addEventListener("submit", (event)=>{
    event.preventDefault();
    // event.stopPropagation();
    // alert("Event prevent");
})
button.addEventListener('click', () =>{
    if (info.classList == "warning") {
        info.remove();
        info = document.createElement('h4');
    }
    
    if (inp1.value === "" || inp2.value == "") {
        info.innerText = "fill form properly"
        info.style.color = "red";
    }else{
        if (inp1.value === "") {
            info.innerText = "fill form properly"
            info.style.color = "red";
        }
    
        if (inp2.value <= 18) {
            info.innerText = "Your are not eligibley"
            info.style.color = "red";
            
        }
    }
    info.classList.add("warning");
    console.log(info.innerText);
    
    form.insertAdjacentElement("afterend", info)
});