// nroVotosCand = 0;
// document.getElementById("btnIncrementar").addEventListener("click", incrementarVoto);

// function incrementarVoto(){
//     nroVotosCand ++;
//      document.getElementById("quantidadeVotos").innerHTML = nroVotosCand;
// // }

// nroVotosCand2 = 0;


// function incrementarVoto2(){
//     nroVotosCand2 ++;
//      document.getElementById("quantidadeVotos2").innerHTML = nroVotosCand2;
// }
let somUrna = document.getElementById("somUrna");


votosCands = [0, 0 , 0 , 0 , 0 , 0];
document.getElementById("votosCand1").innerHTML = votosCands[0];
document.getElementById("votosCand2").innerHTML = votosCands[1];
document.getElementById("votosCand1").innerHTML = votosCands[2];
document.getElementById("votosCand2").innerHTML = votosCands[3];
document.getElementById("votosCand1").innerHTML = votosCands[4];
document.getElementById("votosCand2").innerHTML = votosCands[5];

document.getElementById("btnIncrementar1").addEventListener("click", function(){incrementarVoto(1)});
document.getElementById("btnIncrementar2").addEventListener("click", function(){incrementarVoto(2)});
document.getElementById("btnIncrementar3").addEventListener("click", function(){incrementarVoto(3)});
document.getElementById("btnIncrementar4").addEventListener("click", function(){incrementarVoto(4)});
document.getElementById("btnIncrementar5").addEventListener("click", function(){incrementarVoto(5)});
document.getElementById("btnIncrementar6").addEventListener("click", function(){incrementarVoto(6)});

function incrementarVoto(nroCand){
    votosCands[nroCand-1]++;
    document.getElementById("votosCand"+nroCand).innerHTML = votosCands[nroCand-1];
}


