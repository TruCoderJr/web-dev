// async function greet() {
//     // throw new Error("some random error");
//     return "Hello, Coders";
// }


// greet()
//     .then( (result) =>{
//         console.log("promish was resolve");
//         console.log("result was : ", result);
        
//     })
//     .catch( (error) => {
//         console.log("promish was rejected with error: ",error);        
//     });

// function ranNum() {
//     return new Promise ((resolve, reject) => {
//         let n = Math.floor(Math.random()*10)+1;
//         setTimeout(() => {
//             console.log("number is:",n);
//             resolve();
//         }, 1000);
//     });
// }

// async function ranNumUtil() {
//     await ranNum();
//     await ranNum();
//     await ranNum(); 
// }
// ranNumUtil();

// let h1 = document.querySelector('h1');
// function changeColor(color, delay) {
//     return new Promise((resolve, reject) =>{
//         let n = Math.floor(Math.random()*10)+1;
//             let res = setTimeout(() => {
//                 if (n < 4) {
//                     reject("week connection");
//                 }
//                 h1.style.color = color;
//                 console.log("color was changed successfully");
//                 resolve("success: color was changed");
//             }, delay)
//         }
//     );
// }

// async function changeColorUtil() {
//     try {
//         await changeColor("blue",1000);
//         await changeColor("red",1000);
//         await changeColor("green",1000);
//         await changeColor("orange",1000);
//         await changeColor("pink",1000);
//         await changeColor("yellow",1000);
//     } catch (error) {
//         console.log("some eror dected");
//         console.log(error);
//     }
//     let a = 5;
//     console.log(5);
// }

// changeColorUtil();    

// // API
// let obj = '{"fact":"Edward Lear, author of \\"The Owl and the Pussycat\\", is said to have had his new house in San Remo built to exactly the same specification as his previous residence, so that his much-loved tabby, Foss, would immediately feel at home.","length":236}';

// let newObj = JSON.parse(obj);
// console.log(newObj.fact);

// let info = {
//     coder:"TruCoder",
//     marks:"95"
// }

// par 12

let url = "https://catfact.ninja/fact";

/*
fetch(url)
    .then((response) =>{
        return response.json();
    })
    .then((data) =>{
        console.log("Data:",data.fact);
        return fetch(url);
    })
    .then((res) =>{
        return res.json();
    })
    .then((data2) =>{
        console.log("\nData2:",data2.fact);
    })
    .catch( (err) =>{
        console.log(err);
    });
*/

// async function getFacts() {
//     try{
//         let resp = await fetch(url);
//         let data = await resp.json();
//         console.log("Data:",data.fact);
        
//         resp = await fetch(url);
//         data = await resp.json();
//         console.log("\nData2:",data.fact); 

//         resp = await fetch(url);
//         data = await resp.json();
//         console.log("\nData3:",data.fact); 
//     } catch(e){
//         console.log(`error - ${e}`);
        
//     }
// }
// getFacts();

async function getFacts() {
    try{
        let resp = await axios.get(url);
        console.log("Data:",resp.data.fact); 
    } catch(e){
        console.log(`error - ${e}`);
        
    }
}

// L1: cat fact 
let factUrl = "https://catfact.ninja/fact";
let btn = document.querySelector('button');
let p = document.querySelector('#result');

async function newFact() {
    try{
        let ans = await axios.get(factUrl)
        let fact = ans.data.fact;
        return fact;
    }catch(e){
        console.log(`error - ${e}`);
    }
}
// btn.addEventListener('click', async ()=>{
//     let rs = await newFact();
//     console.log(rs);
    
//     p.innerText = rs;
// })

// L2: Dog img

let newImg = "https://dog.ceo/api/breeds/image/random";
let btn2 = document.querySelector('button');
let img = document.querySelector('#result');



// backgroundImage


async function getImg() {
    try{
        let imgResp = await axios.get(newImg);
        return imgResp.data.message;
    }catch(e){
        console.log(`error - ${e}`);
    }
}
btn2.addEventListener('click',async () =>{
    let link = await getImg();
    img.setAttribute("src", link);
})

// L4
// let jokeUrl = "https://icanhazdadjoke.com/";

// async function getJoke() {
//     try {
//         const config = {
//             headers: {
//                 Accept: "application/json"
//             }
//         }
//         let jk = await axios.get(jokeUrl, config);
//         let ans = await jk.data;
//         console.log(ans.joke);
//     } catch (error) {
//         console.log(error);   
//     }
// }

// L5

let uniURL = "https://api.unsplash.com/search/photos?query=";

let btnSer = document.querySelector('button');
let con = "India";
async function getColleges() {
    try{
        let info = await axios.get(uniURL);
        console.log(info);
    }catch(e){
        console.log("error : ",e);
    }
}
getColleges();