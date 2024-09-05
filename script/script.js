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
const lampada = document.getElementById("lampada");
let lampadaQuebrada = false;  //inicia como falsa

//FUNÇÕES
function acender() {
  //verifica se é nao falso = true

  if (!lampadaQuebrada) {
    console.log("acender"); //console.log so para teste
    document.getElementById("lampada").src = "img/lampada-acesa.jpg"; //o documento pelo id vai receber uma imagem com o parametro .src
  }
}
function apagar(){
  if(!lampadaQuebrada){
    console.log("apagar");
    document.getElementById("lampada").src = "img/lampada-apagada.jpg";
  }
}
function quebrar() {
  lampadaQuebrada = true; //vai fazer com que as outras verificações não seja executadas
  console.log("quebrar");
  document.getElementById("lampada").src = "img/lampada-quebrada.jpg";
}

//desafio 1 Gustavo Guanabara
function botao1(){
  alert("Você clicou no 1° botão!");
}
function botao2(){
  alert("Você clicou no 2° botão!");
}
function botao3(){
  alert("Você clicou no 3° botão!");
}