
const d = new Date();
document.getElementById("demo").innerHTML = d.toDateString();

let text1 = "Hello, ";
text1 += "My Name is";
document.getElementById("intro").innerHTML = text1;

let Name = "John Emmanuel Piala";
document.getElementById("demo1").innerHTML = Name;

function bg() {
    document.querySelector('body').style.background = "url('bg.jpg') center center / cover";
}

function bg2() {
    document.querySelector('body').style.background = "url('bg2.jpg') center center / cover";
}