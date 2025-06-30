function one() {
    return 1;
}

function two() {
    return one() + one();
}

function three() {
    let ans = one() + two();
    console.log(ans);
}
three();

h1 = document.querySelector("h1");
/*
function changeColor(color, delay, nextColorChange) {
    setTimeout(() => {
        h1.style.color = color;
        if (nextColorChange) nextColorChange();
    }, delay);
}
changeColor("red", 1000, () => {
    changeColor("orange", 1000, () => {
        changeColor("green", 1000, () => {
            changeColor("yellow", 1000, () => {
                changeColor("blue", 1000);
            });
        });
    });
});
 */

// 06. Setting up for Promises
/*
function saveToDB(data,success, failure) {
    let internetSpeed = Math.floor(Math.random()*10)+1;
    if (internetSpeed > 4) {
        success();
    }else{
        failure();
    }
}

saveToDB("Tufail", () => {
    console.log("success: Data is save to database");
        saveToDB("Coding", () => {
            console.log("Success: Data2 is save to database");
                saveToDB("DevOPs", () => {
                    console.log("Success: Data2 is save to database");
                }, ()=>{
                    console.log("Failure: Data2 is NOT save to database");
                });
        }, ()=>{
            console.log("Failure: Data2 is NOT save to database");
        });
}, ()=>{
    console.log("Failure: Data is NOT save to database");
});
 */

function saveToDB(data) {
    return new Promise( (resolve, reject) => {
        let intSpd = Math.floor(Math.random()*10)+1;
        if(intSpd > 4){
            resolve("Success: Data is save to database");
        }else{
            reject("Failure: Data is NOT save to database");
        }
    });
}

// saveToDB("wow")
//     .then((result) =>{
//         console.log("data 1 saved.");
//         console.log("result of promise: ",result);
//         return saveToDB("door");
//     })
//     .then((result) =>{
//         console.log("data 2 saved.");
//         console.log("result of promise: ",result);
//         return saveToDB("Mark");
//     })
//     .then((result) =>{
//         console.log("data 3 saved.");
//         console.log("result of promise: ",result);
//     })
//     .catch((error) => {
//         console.log("promise was rejected");
//         console.log("error of promise: ",error); 
//     });

    /*
    h1 = document.querySelector("h1");
    function changeColor(color, delay, nextColorChange) {
        setTimeout(() => {
            h1.style.color = color;
            if (nextColorChange) nextColorChange();
        }, delay);
    }
    changeColor("red", 1000, () => {
        changeColor("orange", 1000, () => {
            changeColor("green", 1000, () => {
                changeColor("yellow", 1000, () => {
                    changeColor("blue", 1000);
                });
            });
        });
    });
    */

function changeColor(color, delay) {
    return new Promise((resolve, reject) =>{
            let res = setTimeout(() => {
                h1.style.color = color;
                resolve("success: color was changed");
            }, delay)
        }
    );
}

changeColor("red", 1000)
    .then((result) =>{
        console.log("red color was changed");
        return changeColor("orange", 1000);
    })
    .then((result) =>{
        console.log("orange color was changed");
        return changeColor("green", 1000);
    })
    .then((result) =>{
        console.log("green color was changed");
        return changeColor("yellow", 1000);
    })
    .then((result) =>{
        console.log("yellow color was changed");
        return changeColor("blue", 1000);
    })
    .then((result) =>{
        console.log("blue color was changed");
    });