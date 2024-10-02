const values = document.querySelectorAll('.buttons');
var displayElement = document.getElementById('input-value');

document.addEventListener('DOMContentLoaded', function() {
    // Seleciona o botão "0" pela classe 'button-zero'
    const zeroButton = document.querySelector('.button-zero');
    
    // Adiciona o evento de clique ao botão "0"
    zeroButton.addEventListener('click', function() {
        // Acessa o valor atual do elemento display
        let displayElement = document.getElementById('input-value');
        let value = displayElement.innerText;

        // Verifica se o valor atual do display atingiu o limite de 14 caracteres
        if (value.length < 11) {
            // Concatena o valor atual com o dígito "0"
            let result = value.replace("|", "") + '0';

            // Atualiza o display com o novo valor
            displayElement.innerText = result;
        }  
    });
});

function clearDisplay(){
    let result = `|`;
    let displayElement = document.getElementById('input-value');
    
    displayElement.innerText = result;
}

function numberOne(){
    let displayElement = document.getElementById('input-value');
    let value = displayElement.innerText;

    if (value.length < 11){
        let result = value.replace("|", "") + '1';
        displayElement.innerText = result;
    }
}

function numberTwo(){
    let displayElement = document.getElementById('input-value');
    let value = displayElement.innerText;

    if (value.length < 11){
        let result = value.replace("|", "") + '2';
        displayElement.innerText = result;
    }
}

function numberThree(){
    let displayElement = document.getElementById('input-value');
    let value = displayElement.innerText;

    if (value.length < 11){
        let result = value.replace("|", "") + '3';
        displayElement.innerText = result;
    }
}

function numberFour(){
    let displayElement = document.getElementById('input-value');
    let value = displayElement.innerText;

    if (value.length < 11){
        let result = value.replace("|", "") + '4';
        displayElement.innerText = result;
    }
}

function numberFive(){
    let displayElement = document.getElementById('input-value');
    let value = displayElement.innerText;

    if (value.length < 11){
        let result = value.replace("|", "") + '5';
        displayElement.innerText = result;
    }
}

function numberSix(){
    let displayElement = document.getElementById('input-value');
    let value = displayElement.innerText;

    if (value.length < 11){
        let result = value.replace("|", "") + '6';
        displayElement.innerText = result;
    }
}

function numberSeven(){
    let displayElement = document.getElementById('input-value');
    let value = displayElement.innerText;

    if (value.length < 11){
        let result = value.replace("|", "") + '7';
        displayElement.innerText = result;
    }
}

function numberEight(){
    let displayElement = document.getElementById('input-value');
    let value = displayElement.innerText;

    if (value.length < 11){
        let result = value.replace("|", "") + '8';
        displayElement.innerText = result;
    }
}

function numberNine(){
    let displayElement = document.getElementById('input-value');
    let value = displayElement.innerText;

    if (value.length < 11){
        let result = value.replace("|", "") + '9';
        displayElement.innerText = result;
    }
}

let operador

function operator(operador){
    switch (operador){
        case "+":
            console.log("ADIÇÃO");
            inputValue = Number(document.getElementById('input-value').innerText);
            currentValue = Number(document.getElementById('current-value').innerText);
            
            operacao = inputValue + currentValue;

            document.getElementById('input-value').innerText = `${operacao}`;

            break;
        case "-":
            console.log("SUBTRAÇÃO");
            break;
        case "x":
            console.log("MULTIPLICAÇÃO");
            break;
        case "/":
            console.log("DIVISÃO");
            break;
        case "%":
            console.log("PORCENTAGEM");
            break;
    }
}

// function result(){
//     let currentValue = Number(document.getElementById('current-value').innerText);
//     let inputValue = Number(document.getElementById('input-value').innerText);

//     document.getElementById('input-value') = result;
//     console.log(result);
// }