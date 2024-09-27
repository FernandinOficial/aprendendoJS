
function autoButton(){
    var redLight = document.getElementById('luz-vermelha');
    var yellowLight = document.getElementById('luz-amarela');
    var greenLight = document.getElementById('luz-verde');

    var redButton = document.getElementById('red-button');
    var yellowButton = document.getElementById('yellow-button');
    var greenButton = document.getElementById('green-button');

    //display
    var timerDisplay = document.getElementById('display');
    timerDisplay.style.display = 'flex';

    //Time
    const redTime = 30000;
    const yellowTime = 5000;
    const greenTime = 20000;

    let indexLight = 0;  // 0: red, 1: yellow, 2: green
    let timeRemaining = 0; // tempo restante para a luz atual
    let timerInterval; // intervalo do temporizador

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
            indexLight = 0;

            startTimer(redTime, () => {
                indexLight = 1;
                changeLight();
            });
        }else if(indexLight === 1){
                  yellowLight.style.backgroundColor = '#ff0';
                  yellowButton.style.backgroundColor = '#ff0';
                  yellowButton.style.scale = '1.1';
                  indexLight = 1;

                  startTimer(yellowTime, () => {
                    indexLight = 2;
                    changeLight();
                  });
              }
        else{
            greenLight.style.backgroundColor = '#0f0';
            greenButton.style.scale = '1.1';
            greenButton.style.backgroundColor = '#0f0';
            indexLight = 2;

            startTimer(greenTime, () => {
                indexLight = 0;
                changeLight();
            });
        }
    }
 
    //função do TimeDisplay
    function startTimer(duration, callback){
        clearInterval(timerInterval);  //limpa qualquer intervalo anterior
        timeRemaining = duration / 1000;
        timerDisplay.innerText = `${timeRemaining}`;

        //intervalo de tempo
        timerInterval = setInterval(() => {
            timeRemaining--;
            timerDisplay.innerText = `${timeRemaining}`;
        
            if(timeRemaining <= 0){
                clearInterval(timerInterval);
                callback();
            }
        }, 1000)

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