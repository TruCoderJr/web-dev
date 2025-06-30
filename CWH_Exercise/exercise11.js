let num = document.querySelector("#num");
let ans = document.querySelector("#fac");



function generateFactorial(){
    let n = parseInt(num.value);

    if (isNaN(n)) {
        alert("Enter a number");
    }

    let arr =[];
    let cal = 1;
    for (let i = 1; i <= n; i++) {
        cal*=i;
        arr.push(i);
    }
    let res = arr.reduce((res,ele)=> res*ele);
    console.log(arr);
    console.log(res);

    ans.value = cal;
}

document.querySelector('#genFac').addEventListener('click',generateFactorial);

const fruits = ["Banana", "Orange", "Apple", "Mango"];

// Create an Iterable
const list = fruits.keys();
console.log(list)

// List the Keys
let text = "";
for (let x of list) {
  text += x + "<br>";
}