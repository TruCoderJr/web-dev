function poem(){
    console.log("Twinkle, twinkle, little star,");
    console.log("How I wonder what you are!");
    console.log("Up above the world so high,\nLike a diamond in the sky.");
    console.log("When the blazing sun is gone, When he nothing shines upon,\nThen you show your little light, Twinkle, twinkle, all the night");
}
poem();

function rollDics(){
    let n = Math.floor(Math.random() * 6)+1;
    console.log(n);
}
 rollDics();
 rollDics();


 function avgOf3Number(a,b,c) {
    let avg = (a+b+c)/3;
    console.log(avg);
 }

 avgOf3Number(1,2,4);

 function table(n) {
    for (let i = 1; i <= 10; i++) {
        console.log(`${n}  ${i} = ${n*i}`);
    }
 }

 table(5);

 function sumOfNumber(n) {
    if (n == 1){
        return 1;
    }
    return sumOfNumber(n-1)+n;
 }
let n = 20;
 console.log(`Sum of number from 1 to ${n}: ${sumOfNumber(n)}`);

 function concArr(array) {
    let str = "";
    for (let i = 0; i < array.length; i++) {
        str = str.concat(array[i]);  
    }
    return str;
 }
let arr= ["Md", "Javed", "Sheikh"];
console.log(concArr(arr));

function printGreet(func, count) {
    for (let i = 0; i < count; i++) {
        func();
    }
}

let greet = function(){
    console.log("namste");
};

printGreet(greet, 10);

function oddEvenTest(n) {
    if (n == "odd") {
        return function(n){
            console.log(! (n % 2 == 0));
        }
    }else if (n == "even") {
        return function(n){
            console.log((n % 2 == 0));
        }
    }else{
        console.log("wrong request");
    }
}

const calc = {
    num: 55,
    sum: function(a, b) {
        return a+b;
    },
    sub: function (a,b) {
        return a-b;
    },
    mul: function (a,b) {
        return a*b;
    }
};



// Assignment 

// Qs1. Write a JavaScript function that returns array elements larger than a number.

let num = [3, 10, 7, 1, 20];
let key = 8;

function printGreaterElement(arr, key) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > key) {
            console.log(arr[i]);
        }
        
    }
}

printGreaterElement(num, key);

// Qs2. Write a JavaScript function to extract unique characters from a string.
// Example: str = “abcdabcdefgggh” ans = “abcdefgh”

let str = "abcdabcdefgggh";

function uniqueChar(str) {
    let arr = [];
    let res = "";
    let isCointains = false;

    for (let i = 0; i < str.length; i++) {
        let char = str.charAt(i);
        isCointains = false;
        if (arr.length == 0) {
            arr.push(char);
            res+=char;
        }else{
            for (let i = 0; i < arr.length; i++) {
                if (arr[i] == char) {
                    isCointains = true;
                    break;
                }
            }

            if(isCointains != true){
                arr.push(char);
                res+=char;
            }
        }
    }

    return res;
}

console.log(uniqueChar(str));

// Qs3. Write a JavaScript function that accepts a list of country names as input and returns the longest country name as output.
// Example : country = ["Australia", "Germany", "United States of America"] output : "United States of America"

let country = ["Australia", "Germany", "United States of America"];

function longestCountryName(country) {
    let res = 0;
    let con = "";
    for (let i = 0; i < country.length; i++) {
        let curr = country[i];

        if (curr.length > res) {
            res = curr.length;
            con = curr;
        }
    }

    return con;
}

console.log(longestCountryName(country));

// Qs4. Write a JavaScript function to count the number of vowels in a String argument.

let str1 = "The quick brown fox jumps over the lazy dog";

function countVowel(str) {
    let count = 0;
    for (let i = 0; i < str.length; i++) {
        let ch = str.charAt(i); 
        if (ch == 'a' || ch == 'e' || ch == 'i' || ch == 'o' || ch == 'u') {
            count++;
        }
    }
    return count;
}

console.log("The total vowel in the sentence: ", countVowel(str1));

// Qs5. Write a JavaScript function to generate a random number within a range (start, end)

let strt = 11;
let end = 50;

function genRanNum(strt, end) {
    
    // let m =Math.floor(Math.random() * end)+1;

    // if (m >= strt) {
    //     return m;
    // }else{
    //     while (m < strt) {
    //         m = Math.floor(Math.random() * end)+1;
    //     }
    // }
    // return m;

    let diff = end - strt;
    return Math.floor(Math.random() * diff) + strt;
}

console.log(genRanNum(strt,end));