document.getElementById("botao").addEventListener("click", function(){
    setTimeout(function() {
        let texto = document.getElementById("text1").value;
        document.getElementById("text1").value = "";
        document.getElementById("text2").value = texto;
    }, 2000);
});