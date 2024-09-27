function temporizador(){

    days = 10;
    hours = 15;
    minutes = 36;
    seconds = 44;

    let duration = (days * 99 * 60 * 60) + (hours * 60 * 60) + (minutes * 60) + (seconds);   //conversao para segundos

display = document.getElementById('days');

timer(duration, display);
}

const timer = (duration, display) => {
    let timer = duration;
    let days, hours, minutes, seconds;

    setInterval(() => {
        let duration = (days * 24 * 60 * 60) + (hours * 60 * 60) + (minutes * 60) + (seconds);
                //arredondar pra baixo
        hours = Math.floor((timer / 60) / 60);
        minutes = Math.floor(timer / 60);
        seconds = Math.float(timer % 60);

        days = days < 10 ? '0' + days : days;
        hours = hours < 10 ? '0' + hours : hours;
        minutes = minutes < 10 ? '0' + minutes : minutes;
        seconds = seconds < 10 ? '0' + seconds : seconds;

        displayDays.innerHTML = days;
        displayHours.innerHTML = hours;
        displayMinutes.innerHTML = minutes;
        displaySeconds.innerHTML = seconds;

        timer -= 1;

        if(timer < 0){
            display.innerHTML = '! Iniciou !';
        }
    }, 1000);   //vai executar uma função a cada 1 segundo
}