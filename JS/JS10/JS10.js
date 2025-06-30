// // let btn = document.querySelector('button');

// // // btn.onclick = function(){
// // //     // console.log("button was clicked");
// // //     alert("button was clicked")
// // // }

// // function sayHello(params) {
// //     alert("hello")
// // }

// // function sayName() {
// //     alert("Trucoder")
// // }

// // btn.onclick = sayHello;

// // let btns = document.querySelectorAll('button');



// // // for (btn of btns) {
// // //     btn.onclick = sayHello;
// // //     // btn.onmouseenter = function(){
// // //     //     console.log("you are in my range");
// // //     // }
// // // }

// // // 3
// // // for (btn of btns) {
// // //     btn.onclick = sayHello;
// // //     btn.onclick = sayName;
// // // }

// // for (btn of btns) {
// //     btn.addEventListener("click", sayHello);
// //     btn.addEventListener("dblclick", sayName);
// // }

// // l4
// // let btn = document.querySelector('button');
// // btn.addEventListener('click',function(){
// //     let h3 = document.querySelector('h3');
// //     let randomCol = generateColor();
// //     h3.innerText= randomCol;
// //     let divBox = document.querySelector('div');
// //     divBox.style.backgroundColor = randomCol;
// // });

// // function generateColor() {
// //     let r = Math.floor(Math.random()*255)+1;
// //     let g = Math.floor(Math.random()*255)+1;
// //     let b = Math.floor(Math.random()*255)+1;

// //     let color = `rgb(${r}, ${g}, ${b})`;
// //     console.log(color);
    
// //     // btn.style.color = rgb(r, g, b);
// //     return color;
// // }

// // genertaeColor();

// // l5

// // let p1 = document.querySelector('p');

// // p1.addEventListener("click",function(){
// //     console.log("para was clicked");
// // });

// // let box = document.querySelector('.box');

// // box.addEventListener("mouseenter",function(){
// //     console.log("cueser in my range");
    
// // })

// // l6

// let btn2 = document.querySelector('button');

// // btn2.addEventListener("click",function(){
// //     console.log(this);
// //     console.dir(this);
    
// // })

// // btn2.addEventListener("click",function(event){
// //     console.log("button is clicked");  
// //     console.log(event);
    
// // })

// // btn2.addEventListener("dblclick",function(event){
// //     console.log("button is clicked");  
// //     console.log(event);
    
// // })

// // let ip = document.querySelector("input"); 
// // ip.addEventListener("keydown",function(event){
// //     console.log("key was pressed");
// //     console.dir(event)
// //     console.log("Key code:",event.keyCode);
// //     console.log("Key:",event.key);
    
// // });

// // l8

// // let fm = document.querySelector('form');

// // fm.addEventListener("submit",function(event){
// //     console.log("form is submitted");
// //     event.preventDefault();
    
// // })

// // L9
// // let fm = document.querySelector('form');

// // fm.addEventListener("submit",function(event){
// //     event.preventDefault();

// //     // let user = document.querySelector('#user');
// //     // let pass = document.querySelector('#pass');
// //     let user = this.elements[0];
// //     let pass = this.elements[1];
// //     // console.dir(ip);
// //     console.log(`username: ${user.value}`);
// //     console.log(`password: ${pass.value}`);
// //     alert(`hii,\nyour username is ${user.value} 
// //         &\npassword is ${pass.value}`)
// // })

// // L10
// // let fm = document.querySelector('form');
// // fm.addEventListener("sumit",function(event){
// //     event.preventDefault();
// // })

// // let user = document.querySelector("#user");

// // user.addEventListener("change",function(){
// //     console.log("change event");
// //     console.log(`final value: ${this.value}`);
// // });

// // user.addEventListener("input",function(){
// //     console.log("input event");
// //     console.log(`final input: ${this.value}`);
    
// // })

// // mouseout
// // - keypress
// // - Scroll
// // - load

// // Assignment
// let fm = document.querySelector('form');

// fm.addEventListener('submit',function(event){
//     event.preventDefault();
// })
// let user = document.querySelector('#user');
// let pass = document.querySelector('#pass');

// user.addEventListener('mouseout',function(){
//     console.log("mouse is now out");
    
// })

// pass.addEventListener('keypress', function(){
//     // console.log(this.value);
//     console.log("key is pressed");
    
// })

// // let div = document.querySelector('body');
// // window.addEventListener('scroll', function(){
// //     // output.textContent = "Scroll event fired!";
// //     console.log("Scroll event fired!");
    
// // })

// //
// let btn = document.createElement('button');

// btn.innerText = "change color to green";
// // btn.insertAdjacentElement('afterbegin',fm);

// fm.prepend(btn)
// btn.addEventListener('click',function(){
//     btn.style.backgroundColor = "green";
//     console.log(btn.style.backgroundColor);
// })


let inp=document.createElement("input");
let btn=document.createElement("button");
let ul=document.createElement("ul");
let li=document.cre
document.querySelector("body").append(inp);
document.querySelector("body").append(btn);
document.querySelector("body").append(ul);

btn.innerText="Add";
inp.setAttribute("placeholder", "Enter your task");
btn.classList.add("upd");

btn.addEventListener("click", function(){
   

   let item=document.createElement("li");
   document.querySelector("body").append(item);
   item.innerText=inp.value;
   ul.append(item);
   inp.value="";
});