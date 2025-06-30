let sb = document.querySelector("#searchBar");
let search = document.querySelector("#search");
let imgDiv = document.querySelector("#imgDiv");
let imgs = document.querySelectorAll("img");

// console.dir(sb);
// console.dir(search);
// console.dir(imgDiv);
// console.dir(imgs[0].alt);

search.addEventListener("input",() =>{
    let ip = search.value;
    if (ip != "") {
        // let input = [...ip];
    // console.log(input);
    imgs.forEach((img) =>{
        // let data = [...img.alt]
        // console.log(data);
        // for (let i = 0; i < input.length; i++) {
        //     if (input[i] != data[i]) {
        //         img.style.display = "none";
        //     }
            
        // }
        // matchData(img.alt, ip);

        
        if (img.alt.startsWith(ip)) {
            img.style.display = "";
        }else{
            img.style.display = "none";
        }
    })
    }else{
        imgs.forEach((img) =>{
            img.style.display = "";
        })
    }
});