let upBtn = document.querySelector("#upload");
let form = document.querySelector('form');

let imgUrl = document.querySelector("#img");
let videoTitle = document.querySelector("#vidtitle");
let channelName = document.querySelector("#cn");

let vidDuarion = document.querySelector("#vidDuarion");

let viewsCount = document.querySelector("#viewsCount");

let time = document.querySelector("#time-amount");

let  timeUnit= document.querySelector("#time-unit");

let container = document.querySelector(".container");

function makeCard() {
    let cardDiv = document.createElement('div');
    cardDiv.classList.add("card");

    let imgDiv = document.createElement('div');
    imgDiv.classList.add("img");

    let durationDiv = document.createElement('div');
    durationDiv.id = "duration";

    imgDiv.appendChild(durationDiv);

    let titleDiv = document.createElement('div');
    titleDiv.id = "titleBox";

    let titleHeading = document.createElement('h5');
    titleHeading.id = "title";

    let vidDataDiv = document.createElement('div');
    vidDataDiv.id = "vidData";

    let cnPara = document.createElement('p');
    cnPara.id = "channelName";

    let dot1 = document.createElement('pre');
    dot1.innerText = " • ";

    let viewsPara = document.createElement('p');
    viewsPara.id = "views";

    let dot2 = document.createElement('pre');
    dot2.innerText = " • ";

    let timePara = document.createElement('p');
    timePara.id = "time";

    // Append correct elements
    vidDataDiv.appendChild(cnPara);
    vidDataDiv.appendChild(dot1);
    vidDataDiv.appendChild(viewsPara);
    vidDataDiv.appendChild(dot2);
    vidDataDiv.appendChild(timePara);

    titleDiv.appendChild(titleHeading);
    titleDiv.appendChild(vidDataDiv);

    cardDiv.appendChild(imgDiv);
    cardDiv.appendChild(titleDiv);

    console.log(cardDiv);



    // console.log(imgUrl.value);
    imgDiv.style.backgroundImage = `url('${imgUrl.value}')`;

    durationDiv.innerText = `${vidDuarion.value}`;

    titleHeading.innerText = `${videoTitle.value}`

    cnPara.innerText = `${channelName.value}`;

    let vwUnit ="";
    let totalViews=parseInt(viewsCount.value);
    if (totalViews > 999 && totalViews<=999999) {
        totalViews /=1000;
        vwUnit = "K";
    }else if(totalViews > 999999 && totalViews<=999999999){
        totalViews /=1000000;
        vwUnit = "M";
    }else if(totalViews > 999999999){
        totalViews /=1000000000;
        vwUnit = "B";
    }

    if (viewsCount.value < 999) {
        viewsPara.innerText = `${totalViews}`;
    }else{
        viewsPara.innerText = `${totalViews} ${vwUnit}`;
    }


    timePara.innerText = `${time.value} ${timeUnit.value}`;

    // container.appendChild(cardDiv);
    // form.prepend(cardDiv);
    form.insertAdjacentElement('beforebegin', cardDiv);

    imgUrl.value = "";
    vidDuarion.value = "";
    videoTitle.value = "";
    channelName.value = "";
    viewsCount.value = "";
    time.value = "";
}

upBtn.addEventListener('click', makeCard);
