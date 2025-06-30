// let str = "Hello, ProCoder!!";
// for (let I = 0; I < str.length; I++) {
//     console.log(str);
// }
// console.log(process.argv);

let lastName = process.argv;

for (let i = 2; i < lastName.length; i++) {
    console.log("Full name :",lastName[i],"Naushad");
}

module.exports = someFunction; // Export a single function
module.exports = { someFunction, someVariable }; // Export an object containing multiple properties

