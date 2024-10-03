var C, D, E, F, S, A, B;

function noteC(){
    C = document.getElementById('C');
    C.play();
}
document.addEventListener('keydown', function(event) {
    if (event.key === 'c' || event.key === 'C') {
        noteC();
    }
});


function noteD(){
    D = document.getElementById('D');
    D.play();
}
document.addEventListener('keydown', function(event) {
    if (event.key === 'd' || event.key === 'D') {
        noteD();
    }
});


function noteE(){
    E = document.getElementById('E');
    E.play();
}
document.addEventListener('keydown', function(event) {
    if (event.key === 'e' || event.key === 'E') {
        noteE();
    }
});


function noteF(){
    F = document.getElementById('F');
    F.play();
}
document.addEventListener('keydown', function(event) {
    if (event.key === 'f' || event.key === 'F') {
        noteF();
    }
});


function noteS(){
    S = document.getElementById('S');
    S.play();
}
document.addEventListener('keydown', function(event) {
    if (event.key === 's' || event.key === 'S') {
        noteS();
    }
});


function noteA(){
    A = document.getElementById('A');
    A.play();
}
document.addEventListener('keydown', function(event) {
    if (event.key === 'a' || event.key === 'A') {
        noteA();
    }
});


function noteB(){
    B = document.getElementById('B');
    B.play();
}
document.addEventListener('keydown', function(event) {
    if (event.key === 'b' || event.key === 'B') {
        noteB();
    }
});