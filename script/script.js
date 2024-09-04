//comandos básicos em JS
function refresh() {
  location.reload();
}
function soma() {
  var a, b, c;
  console.log("hello world");

  a = Number(prompt("Digite o valor <A>: "));
  console.log(a);

  b = Number(prompt("Digite o valor <B>: "));
  console.log(b);

  //CALCULO
  c = a + b;

  //template string
  alert("O resultado de " + a + " + " + b + " é: " + c);
}

function escreverPagina() {
  document.write("Hello World!");
}

function limparConsole() {
  console.clear();
}

function trocarCor() {
  document.body.style.backgroundColor = "green";
}

//LAMPADA ACESA, APAGADA e QUEBRADA
function quebrar() {
  var lampada = document.getElementById("lampada");
  document.getElementById("lampada").src = "img/lampada-quebrada.jpg";
  var lampada = document.getElementById("lampada");
}

function acender(){
    var lampada = document.getElementById("lampada");

    if(lampada == "img/lampada-apagada.jpg"){
        document.getElementById("lampada").src = "img/lampada-acesa.jpg";
    }
}

// if (lampada.src == "img/lampada-apagada.jpg") {
//   console.log("acender");
//   document.getElementById("lampada").src = "img/lampada-acesa.jpg";
// } else {
//   console.log("Quebrado");
//   document.getElementById("lampada").src = "img/lampada-quebrada.jpg";
// }
