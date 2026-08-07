
let primeira = Number(prompt("Digite sua nota do primeiro bimestre"))

let segunda = Number(prompt("Digite sua nota do segundo bimestre"))

let soma = primeira + segunda;

if (soma >= 60){
    alert("Aluno aprovado")
}else {
    let pontos = 60 - soma;
    alert("Aluno reprovado por " + pontos + " pontos de diferença")
}
