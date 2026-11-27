const btnEntrar = document.getElementById("btnEntrar");

btnEntrar.addEventListener("click", function() {
  const nomeUser = document.getElementById("nomeUser").value.trim();
  const senhaUser = document.getElementById("senha").value.trim();

  if (nomeUser === "" || senhaUser === "") {
        alert("Por favor, preencha o usuário e a senha!");
        return; 
    }
  const dadosalvos = JSON.parse(localStorage.getItem("usuarioSalvo"));

  if (!dadosalvos) {
    alert("Nenhum usuário cadastrado!");
    return;
  }

  if (nomeUser === dadosalvos.novoUser && senhaUser === dadosalvos.novasenha) {
    alert("Login realizado com sucesso!");
    window.location.href = "jogo.html";
  } else {
    alert("Usuário ou senha incorretos!");
  }
});