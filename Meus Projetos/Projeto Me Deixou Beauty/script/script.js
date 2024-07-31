let button1 = document.getElementById("text1"),
    button2 = document.getElementById("text2"),
    button3 = document.getElementById("text3")

    function proc1(){
        text1.style.display = "block";
        text2.style.display = "none";
        text3.style.display = "none";
    }

    function proc2(){
        text1.style.display = "none";
        text2.style.display = "block";
        text3.style.display = "none";
    }

    function proc3(){
        text1.style.display = "none";
        text2.style.display = "none";
        text3.style.display = "block";
    }
/*********ACIMA SISTEMA DE TROCA DE CONTEÚDO DOS PROCEDIMENTOS *****************/

var lista = document.getElementById("lista");

function aparecer(){
    if (lista.style.display == "none"){
        lista.style.display = "block"
    } else {
        lista.style.display = "none"
    }
}