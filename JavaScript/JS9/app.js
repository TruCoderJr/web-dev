// let smlImg = document.getElementsByClassName("oldImg");

// for (let i = 0; i < smlImg.length; i++) {
//     // smlImg[i].src = "assets/spiderman_img.png";
//     console.dir(`the ${i+1} img of is changed.`);
// }

// let links = document.querySelectorAll(".box a");

// // for (let i = 0; i < links.length; i++) {
// //     links[i].style.color = "red";
// // }

// for(let l of links){
//     l.style.color = "purple";
// }

// practiclass

//assignment

let textBox = document.createElement('input');
textBox.style.type = 'text';

let body = document.querySelector('body');
body.insertAdjacentElement('afterBegin', textBox);

let btn = document.createElement('button');
btn.classList.add = "bt";
let btCls = document.querySelector('.bt');

btn.innerText = "Click me!";
body.append(btn)

// q2
textBox.placeholder = "username";
btn.id = 'btn';

let btnId = document.querySelector('#btn');
btnId.style.backgroundColor = "blue";
btnId.style.color = "white";

let h1 = document.createElement('h1');
h1.innerText = "DOM Pracice"
h1.style.textDecoration = "underline";
h1.style.textDecorationColor = "purple";
h1.style.textDecorationStyle = "wavy";

body.prepend(h1);

let p1 = document.createElement('p');
p1.innerText = "Apna College ";
body.prepend(p1);
let bold = document.createElement('b');

bold.innerText = "Delta";
p1.append(bold);
p1.append(" Practice");

