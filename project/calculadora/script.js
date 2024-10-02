document.addEventListener('DOMContentLoaded', function() {
    // Seleciona o botão "0" pela classe 'button-zero'
    const zeroButton = document.querySelector('.button-zero');
    
    // Adiciona o evento de clique ao botão "0"
    zeroButton.addEventListener('click', function() {
        // Acessa o valor atual do elemento display
        let displayElement = document.getElementsByClassName('display')[0];
        let value = displayElement.innerText;

        // Verifica se o valor atual do display atingiu o limite de 14 caracteres
        if (value.length < 11) {
            // Concatena o valor atual com o dígito "0"
            let result = value + '0';

            // Atualiza o display com o novo valor
            displayElement.innerText = result;
        }  
    });

    const values = document.querySelectorAll('.buttons');

    alert(values);
});