//function
function myFunction() {
  alert("Welcome to my website, its still a work in progress!");
}
myFunction();

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


//objects
const hobby = {firhobby:"sketching", sechobby:"reading manhuas/manhwas/mangas", thihobby:"photography", forhobby:"playing sports", fifhobby:"gaming"};


document.getElementById("hobby").innerHTML =
"My hobbies include " + hobby.firhobby + ", " + hobby.sechobby + ", " + hobby.thihobby + ", " + hobby.forhobby + " and " + hobby.fifhobby + ".";

