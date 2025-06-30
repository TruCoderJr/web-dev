
const { log } = require("console");
const fs = require("fs");

// fs.writeFile("abc.txt", "hii i am trucoder", (err) => {
//     if (err) throw err;
//     console.log("file is created");
// });


// fs.readFile("abc.txt","utf8", (err, data) =>{
//     if (err) throw err;
//     console.log(data);
// });

// append
// fs.appendFile("abc.txt", " i am a student", (err) =>{
//     if(err) console.log("error found");
//     console.log("saved");
// });

// rename file
// fs.rename("abc.txt", "demo.txt", (err) =>{
//     if (err) {
//         console.log("err is found",err); 
//     }
//     else{
//         console.log("done");
//     }
// })


// delete
fs.unlink("mynewfile3.txt", (err) =>{
    if(err) console.log(err);
    else console.log("file deleted");
})

// make file
fs.mkdir("new", (err) =>{
    if (err) console.log(err);
    else console.log("folder created");
})

