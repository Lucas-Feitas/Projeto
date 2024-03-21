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

const image = document.getElementById("img");
let imgx = document.querySelectorAll("#img img");
let start = 0

function right(image){
    imgx++
}