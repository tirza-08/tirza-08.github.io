console.log("hallo!"); 

let blij = document.getElementById("blij");
let honger = document.getElementById("honger");
let boos = document.getElementById("boos");
let kuiken = document.getElementById("kuiken");

blij.addEventListener("click", () => playAudio(blij));
honger.addEventListener("click", () => playAudio(honger));
boos.addEventListener("click", () => playAudio(boos));
kuiken.addEventListener("click", () => playAudio(kuiken));

function playAudio(emotie) {
    geluid = new Audio(); 
    if (emotie == blij){
        geluid = new Audio("../geluidseffecten/happy.mp3");
    }
    if (emotie == honger){
        geluid = new Audio("../geluidseffecten/hungry.mp3");
    }
    if (emotie == boos){
        geluid = new Audio("../geluidseffecten/angry.mp3");
    }
    if (emotie == kuiken){
        geluid = new Audio("../geluidseffecten/baby.mp3");
    }

    emotie.setAttribute("src", "../images/geluid/"+emotie.id+"spelend.png")

    geluid.play()

    geluid.addEventListener("ended", function() {
        emotie.setAttribute("src", "../images/geluid/" + emotie.id + ".png");
    });
}

