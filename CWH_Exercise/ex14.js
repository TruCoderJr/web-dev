let container = document.querySelector('.container');

let html1 = '<pre>Initializing Hacking</pre>';

let dot = '<pre>Initializing Hacking</pre>';

let pre1 = document.createElement('pre');

pre1.innerText = "Initializing Hacking";

let pre2 = document.createElement('pre');

pre2.innerText = "Reading your Files";

let pre3 = document.createElement('pre');

pre3.innerText = "Password files Detected";

let pre4 = document.createElement('pre');

pre4.innerText = "Sending all passwords and personal files to server";


let pre5 = document.createElement('pre');

pre5.innerText = "Cleaning up";

function hacking() {
    container.appendChild(pre1);
    container.appendChild(pre2);
    container.appendChild(pre3);
    container.appendChild(pre4);
    container.appendChild(pre5);
}

hacking();