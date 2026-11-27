const cadastro = document.getElementById("btnCadastrar");

cadastro.addEventListener("click", function() {
  const novoUser = document.getElementById("cadUser").value;
  const novasenha = document.getElementById("cadsenha").value;
  const confsenha = document.getElementById("cadconfsenha").value;
  if (novoUser === "" || novasenha === "") {
    alert("Preencha todos os campos!");
    return;
  }
  if(novasenha != confsenha){
    alert("Senhas divergentes")
    return;
  }

  const dados = { novoUser, novasenha };

  localStorage.setItem("usuarioSalvo", JSON.stringify(dados));

  alert("Usuário cadastrado com sucesso!");
  window.location.href = "index.html";
});




