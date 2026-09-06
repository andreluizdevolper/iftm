senha = document.getElementById("senha");
confirma = document.getElementById("confirma");
login = document.getElementById("login");
entra = document.getElementById("entra");

entra.addEventListener("click" , validacao);

function validacao(){
    if(login.value === ""){
     alert("O campo de login deve ser preenchido!");
     return
    }
    if(senha.value !== confirma.value){
        alert("As senhas não conferem. Os campos foram limpos.");
        senha.value = "";
        confirma.value = "";
    }else{
         alert("Todos os campos foram digitados corretamente!");
    }
    
}