let button = document.querySelector("#btn");
let ip = document.querySelector('#inp');
let ul = document.querySelector("#ul");

function addInList() {
    let task = ip.value.trim();
    if (task !== "") {
        console.log(task)
        let li = document.createElement('li');
        li.classList.add(`${task}`);
        li.innerHTML = `${task} &nbsp;&nbsp; <button id="${task}" class="delBtn" > delete</button>`;
        console.log(li);
        ip.value = "";
        ul.insertAdjacentElement('beforeend',li);

    }
    
}
button.addEventListener('click', addInList);
// let liDel = "";
ul.addEventListener('click', (event) =>{
    if (event.target.classList[0] == "delBtn") {
        console.log(event.target.id);
        let liDel = document.querySelector(`.${event.target.id}`);
        console.log(liDel);
        liDel.remove();
    }
       
})