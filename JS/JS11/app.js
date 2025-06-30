// L1
/*
let div = document.querySelector('div');
let ul = document.querySelector('ul');
let list = document.querySelectorAll('li');

div.addEventListener('click',function(){
    console.log("div was clicked");
    
});

ul.addEventListener('click',function(event){
    event.stopPropagation();
    console.log("ul was clicked");
});

for (li of list) {
    li.addEventListener('click',function(event){
        event.stopPropagation();
        console.log("li was clicked");
    });
}
*/

// TOdo app

let ip = document.querySelector('input');
let btn = document.querySelector('button');
let ul = document.querySelector('ul');

btn.addEventListener('click',function(){
    let li1 = document.createElement('li');
    console.dir(ip);
    
    if (ip.value != '') {
        li1.innerText = ip.value;
    
    // li1.classList.add("task");

    // let tsk = document.querySelector('.task');
    let del = document.createElement('button');
    del.classList.add('delete');
    del.innerText = " Delete ";
    li1.append(del);
    // tsk.appendChild(del);
    ul.appendChild(li1);

    // let br = document.createElement()
    ip.value = "";
    
    }
});

ul.addEventListener('click', function(event){
    // console.log("button was clicked");
    // console.dir(event.target.nodeName);
    if (event.target.nodeName == 'BUTTON') {
        let btnDel = event.target;
        console.log(btnDel);
        // btnDel.remove();
    }
});

// let delBtns = document.querySelectorAll('.delete');

// for (bt of delBtns) {
//     bt.addEventListener('click',function(){
//         let par = this.parentElement;
//         console.log();
        
//         par.remove();
//     });
// }