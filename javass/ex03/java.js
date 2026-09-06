botao = document.getElementById("btndobrar")
valor = document.getElementById("valor")
resultado = document.getElementById("resultado")

botao.addEventListener("click" , dobrarvalor  );

function dobrarvalor(){
    resultado.value = valor.value*2;
}