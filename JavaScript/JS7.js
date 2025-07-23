// lec 1
const student = {
    name: "samay",
    age: 30,
    eng: 80,
    math: 40,
    sci: 50,
    prop: this,
    getAvg() {
        console.log("Name:", this.name);
        var avg = (this.eng + this.math + this.sci) / 3;
        console.log("avg of marks:", avg);
        console.log(this);
    }
};

// lec 2
console.log("hello");
console.log("hello");
console.log("hello");

try {
    console.log(a);
} catch (error) {
    console.log(error);
    console.log("An error occure");

}

console.log("hello2");
console.log("hello2");
console.log("hello2");


// lec 3
const mul = (a, b) => {
    console.log(a * b);
};
// lec 4

const sum = (a, b) => (a + b);

const areOfCir = (r) => (3.14 * r * r);


// lec 5
// let user = prompt("Tell me your the name: ");

// function print(name) {
//     console.log(name);
// }

// // lec 6
// let id5 = setInterval(print(user), 2000);

// setTimeout(() => {
//     clearInterval(id5);
//     console.log("Set timeout clear");
// },10000);

let user = prompt("Tell me your name: ");

function print(name) {
    console.log(name);
}

// Start a setInterval to call print with the user's name every 2 seconds
let id5 = setInterval(() => print(user), 2000);

// Clear the interval after 10 seconds
setTimeout(() => {
    clearInterval(id5);
    console.log("Set timeout clear");
}, 10000);


// lec 4


// practice question

//  Q1
/*
// Method 1
const sq = (n) => {
    return n*n;
}
// method 2
const square = (n) => (n*n);

let id1 = setInterval( () => {
    console.log("Hello World")
}, 2000);

setTimeout( () => {
    clearInterval(id1);
},11000);
*/


// practice question
let arrayAvg = (array) => {
    let avg = 0;
    for (let i = 0; i < array.length; i++) {
        avg += array[i];
    }
    return (avg / array.length);
}

var arr = [2, 4, 2, 1, 4];

let isEven = (n) => (n % 2 == 0);

const object = {
    message:'Hello, World!',
    logMessage(){
        console.log(this.message);
    }
};
setTimeout(object.logMessage, 1000);

// Q4 
let length = 4;

function callback() {
    console.log(this.length);
}

const obj = {
    length: 5,
    method(callback) {
        callback(); // Regular function call
    },
};

obj.method(callback); // Correcting "object" to "obj"
