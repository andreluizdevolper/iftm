 document.getElementById("botao").addEventListener("click", enviar);
function enviar (){
 let nomeCompleto = document.getElementById("nome").value;
 document.getElementById("exibir").innerHTML = nomeCompleto;
let tamanho = 14;
document.getElementById("exibir").style.fontSize = tamanho + "px"

let intervalo = setInterval(function(){
    tamanho = tamanho + 2 ;
    document.getElementById("exibir").style.fontSize = tamanho + "px";

if(tamanho >=40){
    clearInterval(intervalo)
}
}, 500)  

}   


