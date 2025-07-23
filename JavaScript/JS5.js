const student = {
    name: "TruCoder",
    age: 21,
    marks: 65,
    city: "NYC"
};

let s2 = ["TruCoder", 21,65,"NYC"];

const item = {
    price : 100.99,
    discount: 50,
    colors: ["red", "pink"] 
};

let item2 = [100.99, 50, ["red", "pink"]];

// Assign

const post = {
    username : "@trucoder",
    content: "i love Coding",
    likes: 99,
    repost: 32,
    tag: ["@javed, @tufail"]
};

const classInfo = [
    {
        name: "john",
        rollno: 32
    },
    {
        name: "Bob",
        rollno: 31
    },
    {
        name: "Boid",
        rollno: 15
    }
];

// 12. Guessing Game

// alert("Enter Your Name:" );
let name = prompt("Enter Your Name:");
alert(`Welcome to Guessing Game!! ${name} `);

let n = prompt("Enter the Last number:");
let num = parseInt(n);
let m = Math.floor(Math.random()*num)+1;

console.log(m);

let x = prompt("Enter a number(Enter 'exit' for exist from game):");
x = parseInt(x);


console.log(x);

while (true) {
    if (x != m) {
        if (x == 'exit'){
            alert("You exist from the game");
            break;
        }

        if (m > x) {
            x = prompt(`Your guess is wrong!!\n HINT: Enter a larger number: `);
            x = parseInt(x);
        }else{
            x = prompt(`Your guess is wrong!!\n HINT: Enter a smaller number: `);
            x = parseInt(x);
        }
        x = prompt(`\nOhh!! You Lose. ${x} != ${m} \nEnter a number(Enter 'exit' for exist from game):`);
        x = parseInt(x);
    }else{
        alert("Congratulation!! You won the game.");
        break;
    }
    
}