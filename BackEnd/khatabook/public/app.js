// JS part
let container = document.querySelector(".container");
let allHisaab = document.querySelectorAll(".btn");


container.addEventListener('click', (event) => {
    let page = `${event.target.innerText}`;
    console.log('Clicked:', event.target.id);
    console.dir(event.target)
         
    // if (page != "") {
    //     location.href = `http://localhost:8080/hissab/${page}`;
    // }else 
    const classArr = event.target.className.split(" ");
    const file = classArr[0].split(".");

    if (event.target.id == "view") {
        // console.log(event.target.className);
        // const classArr = event.target.className.split(" ");
        // const file = classArr[0].split(".");
        location.href = `http://localhost:8080/hissab/${file[0]}`;
    }else if (event.target.id == "edit") {
        // console.log(event.target.className);
        // const classArr = event.target.className.split(" ");
        location.href = `http://localhost:8080/edit/${file[0]}`;
    }else if (event.target.id == "delete") {
        // console.log(event.target.className);
        // const classArr = event.target.className.split(" ");
        location.href = `http://localhost:8080/delete/${classArr[0]}`;
    }
    
    
})



