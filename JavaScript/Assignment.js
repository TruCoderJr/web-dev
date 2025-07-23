let num = 10;
if (num%10 == 0) {
    console.log("Good");
} else {
    console.log("Bad");
}

// let name = prompt("Enter Your Name: ");
// let age = prompt("Enter Your Age: ");
// let msg = name+" is "+ age +" years old.";
// alert(msg);
// alert(`${name} is ${age} years old.` );

let n = parseInt(prompt("Enter a any quarter number"));
switch (n) {
    case 1:
        console.log("January, February, March")
        break;

    case 2:
        console.log("April, May, June");
        break;

    case 3:
        console.log("July, August, September");
        break;
    
    case 4:
        console.log("October, November, December");
        break;
    default:
        console.log("Enter a wrong quarter number")
        break;
}

