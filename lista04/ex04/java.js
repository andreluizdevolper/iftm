nome = document.getElementById("usuario");
senha = document.getElementById("senha");
enviar = document.getElementById("enviar");

enviar.addEventListener("click", cadastrar);


function cadastrar(){
    
cadastro = {
    usuario : nome.value, 
    senha : senha.value
}
    localStorage.setItem("cadastro" , JSON.stringify(cadastro))
}