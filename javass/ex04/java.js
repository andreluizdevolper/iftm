
primeiro = document.getElementById("primeiro");
segundo = document.getElementById("segundo");
resultado = document.getElementById("resultado");


resultado.addEventListener("click", calcula );

function calcula (){
    soma = parseFloat(primeiro.value) + parseFloat(segundo.value);
    if(soma >= 60){
         alert(`Aprovado!`)
    }else{
        alert(`Reprovado. Faltou(ram) ${60-soma} ponto(s)!`);
    }
}