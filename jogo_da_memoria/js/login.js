const btnEntrar = document.getElementById("btnEntrar");

btnEntrar.addEventListener("click", function() {
  const nomeUser = document.getElementById("nomeUser").value;
  const senhaUser = document.getElementById("senha").value;
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