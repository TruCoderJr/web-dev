let gameseq=[];
let userseq=[];

let boxes=["box1", "box2", "box3", "box4"];

let started= false;
let level=0;

let h4= document.querySelector("h4");

document.addEventListener("keypress", function(){
    if(started==false){
        console.log("Game is started")
        started=true;
    levelUp();
    }
});

function flashBtn(btn){
   btn.classList.add("flash");
   setTimeout(function(){
    btn.classList.remove("flash");
   },250);
}

 
function levelUp(){
    level++;
    h4.innerText = Level `${level}`;
    let randomNum=Math.floor(Math.random()*3);
    console.log(randomNum);
    let randomBox=boxes[randomNum];
    console.log(randomBox);
    let randbtn=document.querySelector(`.${randomBox}`);
    console.dir(randbtn);
    flashBtn(randbtn);
}