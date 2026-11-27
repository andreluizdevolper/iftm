document.getElementById("btnPlay").addEventListener("click" , play);

function play(){
    Math.random("nroAleatorio").innerHTML = parseInt(Math.random()*100)+1;
}   