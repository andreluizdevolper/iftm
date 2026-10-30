
document.getElementById("botao").addEventListener("click", function(){
    let tempo = document.getElementById("tempo").value;
    setTimeout(function() {
        let texto = document.getElementById("text1").value;
        document.getElementById("text1").value = "";
        document.getElementById("text2").value = texto;
    }, tempo);
    
}); 