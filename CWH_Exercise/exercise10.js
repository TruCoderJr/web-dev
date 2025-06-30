
let adjectives = "Crazy Amazing Fire";

let shopName = "Engine Foods Garments";

let anoWod = "Bros Limited Hub";

let gen = document.querySelector('#gbn');
let bussName = document.querySelector('#bn')

function generateNumber() {
    let n = Math.floor(Math.random()*100)+1;
    return n;
}

function nameGen() {
    let a = generateNumber();
    let b = generateNumber();
    let c = generateNumber();
    console.log(a, b ,c);

    let first, second, third;

    // let adj = adjectives.split(" ");
    // let shop = shopName.split(" ");
    // let another = anoWod.split(" ");
    // bussName.value = `${adj[a]} ${shop[b]} ${another[c]}`;

    /*

let adjectives = "Crazy Amazing Fire";

let shopName = "Engine Foods Garments";

let anoWod = "Bros Limited Hub";
    */
    if (a < 34) {
        first='Crazy';
    }else if (a > 33 && a < 67) {
        first ='Amazing';
    }else{
        first='Fire';
    }

    if (b < 34) {
        second='Engine';
    }else if (b > 33 && b < 67) {
        second ='Foods';
    }else{
        second='Garments';
    }
    
    if (c < 34) {
        third='Bros';
    }else if (c > 33 && c < 67) {
        third ='Limited';
    }else{
        third='Hub';
    }
    

    bussName.value = `${first} ${second} ${third}`;
}

gen.addEventListener('click',nameGen);