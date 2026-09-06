multiplicacao = document.getElementById("multiplicacao");
divisao = document.getElementById("divisao");
adicao = document.getElementById("adicao");
subtracao = document.getElementById("subtracao");

multiplicacao.addEventListener("click" , multi);
divisao.addEventListener("click" , div);
adicao.addEventListener("click" , soma)
subtracao.addEventListener("click" , menos)

function multi(){
    valor1 = Number(document.getElementById("valor1").value);
    valor2 = Number(document.getElementById("valor2").value);

    vezes = valor1 * valor2
    document.getElementById("resultado").value = vezes;
}


function div(){
    valor1 = Number(document.getElementById("valor1").value);
    valor2 = Number(document.getElementById("valor2").value);

    divi = valor1 / valor2
    document.getElementById("resultado").value = divi;
}

function soma(){
    valor1 = Number(document.getElementById("valor1").value);
    valor2 = Number(document.getElementById("valor2").value);

    somas = valor1 + valor2
    document.getElementById("resultado").value = somas;
}

function menos(){
    valor1 = Number(document.getElementById("valor1").value);
    valor2 = Number(document.getElementById("valor2").value);

    tira= valor1 - valor2
    document.getElementById("resultado").value = tira;
}