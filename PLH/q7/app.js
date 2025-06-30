let db = document.querySelector("#downloadBar");
let pg = document.querySelector("#progressBar");

let i = 0;

function message() {
    let h4 = document.createElement("h4");
    h4.innerText = "Download completed";
    h4.classList.add("message");
    db.insertAdjacentElement("beforebegin",h4);
}
function download() {
    let d = setInterval(() =>{
        if (i >= 100) {
            // i = 100;
            pg.style.width = `${i}%`;
            message();
            clearInterval(d);
        }else{
            pg.style.width = `${i}%`;
        }
        i++;
    },75)
}
download();