let btnDiv = document.querySelector('.btn-div');
let num1 = document.querySelector('#num1');
let num2  = document.querySelector('#num2');
let answer  = document.querySelector('#ans');

function generateNumber() {
    let n = Math.floor(Math.random()*100) + 1;
    return n;
}

function add(a, b) {
    return a+b;
}

function sub(a, b) {
    return a-b;
}


function mul(a, b) {
    return a*b;
}

function div(a, b) {
    return a/b;
}

function sqrt(a, b) {
    return a ** b;
}

btnDiv.addEventListener('click', (event)=>{

    let a = parseInt(num1.value);
    let b = parseInt(num2.value);
    
    if (isNaN(a) || isNaN(b)) {
        alert("Enter numbers properly");
        return;
    }
    
    if(answer.value != ""){
        answer.value ="";
    }

    let n = generateNumber();
    let ans = null;
    let operater = event.target.id;

    console.log(operater, a ,b,n);

    switch (operater) {
        case "add":
            if (n > 10) {
                ans  = add( a,  b);
            }else{
                ans  = sub( a,  b);
            }
        break;
        case 'sub':
            if (n > 10) {
                ans  = sub( a,  b);
            }else{
                ans  = mul( a,  b);
            }
        break;
        case "mul":
            if (n > 10) {
                ans  = mul( a,  b);
            }else{
                ans  = div( a,  b);
            }
            break;
        case 'div':
            if (n > 10) {
                ans  = div( a,  b);
            }else{
                ans  = sqrt( a,  b);
            }
        break;
        default:
            console.log("Something is worng")
            break;
    }
    console.log(ans);

    answer.value = ans;
    num1.value = "";
    num2.value = "";

});


