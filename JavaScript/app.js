// console.log("Hello World");
// let a = 10;
// let b = 12;
// let sum = a + b;
// console.log("Sum =", sum);
// let pencil = 5;
// let pen = 5;
// let noteBook = 20;
// console.log(`The total amount = ${pencil+pen+noteBook} rupees`);

// let color = "green";
// if (color == "red"){
//     console.log("Stop");
// }
// if (color == "yellow"){
//     console.log("go slow");
// }
// if (color == "green"){
//     console.log("Go");
// }
// alert("Allow Notificatin");
// console.error("Somthing is wrong"); 
// console.warn("Danger File");
// let lname = prompt("Enter Name");
// console.log(lname);
let fname = prompt("Enter Name");
let lname = prompt("Enter Last Name: ")
let msg = "Welcome "+fname+lname+"!";
alert(msg);

// JS P-2 Assignment
// js pr3

// let msg = "   H ii   ";
// console.log(msg);
// msg.trim();
// console.log(msg);

// let std = ["Rohit", "shradha", "Rahul"];

console.log("Hii, TruCoder");
 
console.log("Hii",123, (1+2));
let a= 10;
let b = 20;
console.log("Sum:", (a+b));

let penPrice = 10;
let notePrice = 20;
// let op = "The total price is : " +(penPrice+notePrice)+ "$";
let op2 = `The total price : ${penPrice+notePrice} $`;
console.log(op2);

let price = 50;
let size = "XL";

if (size == "XL") {
    console.log("price is RS. 250");
} else if (size == "L") {
    console.log("price is RS. 200");
}else if (size == "M"){
    console.log("price is RS. 100");
}else if (size == "S"){
    console.log("price is RS. 50");
}else{
    console.log("SIZE is INVALID");
}

alert("Something is wrong");
console.log("This is alert");
console.error("Download failed! Try again");
console.log("This is error");
console.warn("Try again");
console.log("This is warn");

let name = prompt("Enter your name: ");
let rollno = prompt("Enter roll no: ");
console.log("Student Details:");
console.log("Name : ",name);
console.log("Roll no : ",rollno);