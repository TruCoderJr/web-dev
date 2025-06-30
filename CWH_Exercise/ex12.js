let box1 = document.querySelector('.box1');
let box2 = document.querySelector('.box2');
let box3 = document.querySelector('.box3');
let box4 = document.querySelector('.box4');
let box5 = document.querySelector('.box5');


let gen = document.querySelector('#gen');

function generateNumber() {
    let n = Math.floor(Math.random()*100)+1;
    return n;
}

function fillColor() {
    let a = generateNumber();
    let b = generateNumber();
    let c = generateNumber();

    box1.style.backgroundColor = `rgb(${a}, ${b}, ${c})`;
    console.log(`rbc(${a}, ${b}, ${c})`);
        console.dir(box1);

    

    a = generateNumber();
    b = generateNumber();
    c = generateNumber();

    box2.style.backgroundColor = `rgb(${a}, ${b}, ${c})`;

    a = generateNumber();
    b = generateNumber();
    c = generateNumber();

    box3.style.backgroundColor = `rgb(${a}, ${b}, ${c})`;

    a = generateNumber();
    b = generateNumber();
    c = generateNumber();

    box4.style.backgroundColor = `rgb(${a}, ${b}, ${c})`;

    a = generateNumber();
    b = generateNumber();
    c = generateNumber();

    box5.style.backgroundColor = `rgb(${a}, ${b}, ${c})`;
}


gen.addEventListener('click', fillColor);
