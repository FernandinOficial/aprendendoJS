
function autoButton(){

}

function redButton(){
    var redLight = document.getElementById('luz-vermelha');
    var yellowLight = document.getElementById('luz-amarela');
    var greenLight = document.getElementById('luz-verde');
    
    var redButton = document.getElementById('red-button');
    var yellowButton = document.getElementById('yellow-button');
    var greenButton = document.getElementById('green-button');

    //luzes
    redLight.style.backgroundColor = '#f00';
    yellowLight.style.backgroundColor = '#87870f';
    greenLight.style.backgroundColor = '#0a6e0a';

    //botões
    redButton.style.backgroundColor = '#f00';
    yellowButton.style.backgroundColor = '#87870f';
    greenButton.style.backgroundColor = '#0a6e0a';

}
function yellowButton(){
    var redLight = document.getElementById('luz-vermelha');
    var yellowLight = document.getElementById('luz-amarela');
    var greenLight = document.getElementById('luz-verde');

    var redButton = document.getElementById('red-button');
    var yellowButton = document.getElementById('yellow-button');
    var greenButton = document.getElementById('green-button');

    //luzes
    redLight.style.backgroundColor = '#6e0a0a';
    yellowLight.style.backgroundColor = '#ff0';
    greenLight.style.backgroundColor = '#0a6e0a';

    //botões
    redButton.style.backgroundColor = '#6e0a0a';
    yellowButton.style.backgroundColor = '#ff0';
    greenButton.style.backgroundColor = '#0a6e0a';
}
function greenButton(){
    var redLight = document.getElementById('luz-vermelha');
    var yellowLight = document.getElementById('luz-amarela');
    var greenLight = document.getElementById('luz-verde');

    var redButton = document.getElementById('red-button');
    var yellowButton = document.getElementById('yellow-button');
    var greenButton = document.getElementById('green-button');
    
    //luzes
    redLight.style.backgroundColor = '#6e0a0a';
    yellowLight.style.backgroundColor = '#87870f';
    greenLight.style.backgroundColor = '#0f0';

    //botões
    redButton.style.backgroundColor = '#6e0a0a';
    yellowButton.style.backgroundColor = '#87870f';
    greenButton.style.backgroundColor = '#0f0';
}