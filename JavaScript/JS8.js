let arr = [2,4,5,7,3,9];

arr.forEach(function (el){
    console.log(el);  
});

arr.forEach((el) => {
    console.log(el);
});

let obj = [{
    name: "john",
    marks: 87
},
{
    name: "lily",
    marks: 76
},
{
    name: "bob",
    marks: 65
}
];

obj.forEach((ei) => {
    console.log(ei.marks);
});

let print  = function(el){
    console.log(el);
    
}

obj.forEach(print);
// lec 2
let num = [2,35,4,65,6,5];

let x = num.map(function(el){
    return el*2;
});

console.log(x);

x = num.map((el) => {
    return el*3;
});

console.log(x);
let gpa = obj.map((el) => {
    return (el.marks/10);
});

let cgpa = obj.map(function(el){
    return (el.marks/10);
});

let findGPA = function(el){
    return (el.marks/10);
};

console.log(obj.map(findGPA));


console.log(gpa);
console.log(cgpa);

// filter

let list = [93, 88,62,63,73];
let dist = function(ele){
    return ele >= 80;
}

let isEven = list.filter((ele) => {
    return ele%2==0;
});
console.log(list.filter(dist));
console.log(isEven);

// lec 3 
// every AND

let evyAns = list.every(function(ele){
    return ele > 60; 
});
console.log(evyAns);

if (evyAns) {
    console.log("you are pass with 1st div.");
}else{
    console.log("you don't get 1st div.");
}

let isDist = list.every(function(ele){
    return ele > 80; 
});

console.log(isDist);

if (isDist) {
    console.log("you get distinction in all subject.");
}else{
    console.log("you don't get distinction in all subject");
}

// .some like OR 

let marks = [23, 93, 88,62,63,73];

let isPass  = marks.some((ele) => {
    return ele < 33;
});

console.log(isPass);

if (isPass) {
    console.log("Your are fail in exam.");    
}else{
    console.log("Your are pass in exam.");  
}

// lec 4
let totMarks = marks.reduce((ans, ele) => ans+ele);
console.log(totMarks);

let maxMarks = marks.reduce((ans, ele)=>{
    if (ans < ele) {
        return ele;
    }
    return ans;
});

console.log(maxMarks);

// PQ
let mul = [10,20,30,40,50];

let ans = mul.every(function(ele){
    return (ele % 10 == 0);
});

console.log("Is the array ele is mutiple of 10? true/false\nans:",ans);

let minMarks = marks.reduce((min, ele) =>{
    console.log(min);
    
    if (min > ele) {
        return ele;
    }
    return min;
});
console.log("Min ans:",minMarks);


function getMin(marks) {
    let min = marks.reduce((min, ele) =>{
        console.log(min);
        
        if (min > ele) {
            return ele;
        }
        return min;
    });
    return min;
}

// 07. Default Parameters
function additiom(a=10,b=7) { // a=10,b=7 | a,b=7 | (a=10,b)wrong
    console.log("Sum:",a+b);
}

additiom();

//08. Spread

let newMarks = [...marks];
// newMarks.push(..."hii");
console.log("\n",..."ajsdhs");

// 09. Spread (Array Literals)

let odd = [1,3,5,7,9];
let even = [2,4,6,8,10];

let mix = [...odd, ...even];

// 10. Spread (Object Literals)
let Obj = {
    name:"Tuafil",
    rollno:"23",
    username:"@trucoder"
};
let newObj = {...Obj, ...marks, id:"23030"}; 

// 11. Rest
function totMark(mes,...args) {
    console.log(mes);
    
    return args.reduce((ans, ele) => ans+ele);
}

function makeEven(...args) {
    return args.map((ele) => ele*2);
}

// 12. Destructuring
let hero = ["superman","batman","ironman","thor"];

let[fly,power, ...other] = hero;

console.log(fly,power,other);


// 13. Destructuring (Objects)

let std = {
    name:"Tuafil",
    rollno:"23",
    username:"@trucoder",
    id:"23030",
    place:"Delhi"
};

let{name: userName,id: userID, place: city="Patna"} = std;

console.log(userName,userID, city);


// Assignment
// Qs1. Square and sum the array elements using the arrow function and then find the average of the array.

let newArr = [32,5,65,76,98,45,32,12,34,56];

let ts = 0;

let sq = newArr.map((newArr) => newArr*newArr);

console.log(sq);

let sum = sq.reduce((res, ele) => res+ele);
console.log(sum);
let avg = sum/newArr.length;
console.log(avg);

// 

let na = [5,10,15,20];

let incArr = na.map((ele) => (ele+5));

console.log(incArr);

// Q3



let strArr = ["launches", "public", "offering","commercial"];


let upperArr = strArr.map((ele) => ele.toUpperCase());

console.log(upperArr);

function modifyArray(arr,...args) {
    let argArr = [...args];

    let s = argArr.map((ele) => ele*2);
    
    
    let fnlArr = [...arr,...s];
    return fnlArr;
}

console.log(modifyArray(na,2,3,4,5));


//q5
let std1 = {
    name:"Tuafil",
    rollno:"23",
    username:"@trucoder",
    id:"23030",
    place:"Delhi"
};

let cor = {
    course:"cse",
    sem:"4",
    cgpa:"7.75",
    skill:"JS",
    colege:"piet"
};
function mergeObjects(obj1, obj2) {
    let obj = {...obj1,...obj2};
    return obj;
}
console.log(mergeObjects(std1,cor));

