
function autoButton(){
    var redLight = document.getElementById('luz-vermelha');
    var yellowLight = document.getElementById('luz-amarela');
    var greenLight = document.getElementById('luz-verde');

    var redButton = document.getElementById('red-button');
    var yellowButton = document.getElementById('yellow-button');
    var greenButton = document.getElementById('green-button');

    //Time
    const redTime = 30000;
    const yellowTime = 5000;
    const greenTime = 20000;

    let indexLight = 0;  // 0: red, 1: yellow, 2: green

    function changeLight(){
        
        //desligar luzes
        redLight.style.backgroundColor = '#6e0a0a';
        yellowLight.style.backgroundColor = '#87870f';
        greenLight.style.backgroundColor = '#0a6e0a';

        //desligar botoes
        redButton.style.backgroundColor = '#6e0a0a';
        redButton.style.scale = '1.0';

        yellowButton.style.backgroundColor = '#87870f';
        yellowButton.style.scale = '1.0';

        greenButton.style.backgroundColor = '#0a6e0a';
        greenButton.style.scale = '1.0';
        
        //Condições Luzes e Botões
        if(indexLight === 0){    //red
            redLight.style.backgroundColor = '#f00';
            redButton.style.backgroundColor = '#f00';
            redButton.style.scale = '1.1';
            setTimeout(() =>{
                indexLight = 1;
                changeLight();
            }, redTime);
        }else if(indexLight === 1){
                  yellowLight.style.backgroundColor = '#ff0';
                  yellowButton.style.backgroundColor = '#ff0';
                  yellowButton.style.scale = '1.1';
                  setTimeout(()=>{
                    indexLight = 2;
                    changeLight();
                  }, yellowTime);
              }
        else{
            greenLight.style.backgroundColor = '#0f0';
            greenButton.style.scale = '1.1';
            greenButton.style.backgroundColor = '#0f0';
            setTimeout(()=>{
                indexLight = 0;
                changeLight();
            }, greenTime);
        }
    }

    //inicia o semaforo
    changeLight();
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
    redButton.style.scale = '1.1';
    yellowButton.style.backgroundColor = '#87870f';
    yellowButton.style.scale = '1.0';
    greenButton.style.backgroundColor = '#0a6e0a';
    greenButton.style.scale = '1.0';

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
    redButton.style.scale = '1.0';
    yellowButton.style.backgroundColor = '#ff0';
    yellowButton.style.scale = '1.1';
    greenButton.style.backgroundColor = '#0a6e0a';
    greenButton.style.scale = '1.0';
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
    redButton.style.scale = '1.0';
    yellowButton.style.backgroundColor = '#87870f';
    yellowButton.style.scale = '1.0';
    greenButton.style.backgroundColor = '#0f0';
    greenButton.style.scale = '1.1';
}