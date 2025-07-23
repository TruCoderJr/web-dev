let url = "http://universities.hipolabs.com/search?name=";
let country = "nepal";

let ip = document.querySelector('.ipData');
let btn = document.querySelector(".btn");
let ul = document.querySelector('ul');
// let l = document.querySelector('li');
// console.dir(l);

function viewData(collArr) {
    for (let i = 0; i < collArr.length; i++) {
        let li = document.createElement('li');
        li.textContent = `${collArr[i].name}`;
        ul.append(li);
    }
}

btn.addEventListener('click', async () =>{
    let con = ip.value;
    let collArr = await getUniversityInfo(con);
    viewData(collArr);
});

ip.addEventListener('keypress', async (event) => {
    
    if (event.key === "Enter") {
        event.preventDefault();
        btn.click();
    }
    
    
});

async function getUniversityInfo(country) {
    try {
        let res = await axios.get(url+country);
        return res.data;
    } catch (error) {
        console.log("eror:",error);
    }
}

