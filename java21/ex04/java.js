nomeCompleto = prompt("Digite o seu nome completo:");

///1º passo: transformar tudo p/ letras minusculas, posteriormente transforma a string em um vetor
nomeCompleto = nomeCompleto.toLowerCase().split(" ");//split "quebra" a variavel, ela variaveis

nomeCompleto[0] = nomeCompleto[0].toUpperCase();



nomeCompleto = nomeCompleto.join(" ");
alert(nomeCompleto);