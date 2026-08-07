let nome = prompt("Digite seu nome")

let idade = prompt("Digite sua idade")

if(idade>18){
    alert(nome + " você já possui idade para tirar carteira")
}else {
    let carteira = 18 - idade
    alert(nome + " você ainda não possui idade para tirar carteira, ainda falta(m) " + carteira + " anos")
}