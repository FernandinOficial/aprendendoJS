function calcular() {
    event.preventDefault(); // Previne o envio do formulário

    let result;

    let nameInput = document.getElementById("name");
    let name = nameInput.value;

    let heightInput = document.getElementById("height");
    let heightValue = heightInput.value;
    let height = Number(heightValue);

    let weightInput = document.getElementById("weight");
    let weightValue = weightInput.value;
    let weight = Number(weightValue);

    //Cálculo
    imc = weight / (height ** 2).toFixed(2);    //duas casas decimais

    console.log(imc);
    
    //Condições
    if(imc > 0 && imc <= 18.5 ) {   //Abaixo do Normal - Nível 1
        console.log("baixo do normal");
        result = `<p>${name} <br>
                  Altura: ${height} metros <br>
                  Peso:   ${weight} kg <br>
                  IMC:    ${imc}</p>`; 
        document.getElementById('result-text').innerHTML = result;
    }else if(imc >= 18.6 && imc <= 24.9){   //Normal - Nível 2
            console.log("normal");
            result = `<p>${name} <br>
                  Altura: ${height} metros <br>
                  Peso:   ${weight} kg <br>
                  IMC:    ${imc}</p>`; 
            document.getElementById('result-text').innerHTML = result;
        }else if(imc >= 25.0 && imc <= 29.9){     //Sobrepeso - Nível 3
                console.log("sobrepeso");
                result = `<p>${name} <br>
                  Altura: ${height} metros <br>
                  Peso:   ${weight} kg <br>
                  IMC:    ${imc}</p>`; 
                document.getElementById('result-text').innerHTML = result;
            }else if(imc >= 30.0 && imc <= 34.9){     //Obesisade grau I - Nível 4
                    console.log("Obesidade grau I");
                    document.getElementById('result-text').innerHTML = result;
                }else if(imc >= 35.0 && imc <= 39.9){     //Obesisade grau II - Nível 5
                        console.log("Obesidade grau II");
                        document.getElementById('result-text').innerHTML = result;
                    }else if(imc >= 40.0){
                        console.log("Obesidade grau III");
                        document.getElementById('result-text').innerHTML = result;
                        }
    else{
        console.log("Valores inválidos");
    }
}