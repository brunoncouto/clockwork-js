const container = document.querySelector(".container");
const color = document.querySelector("input");
const hora = document.querySelector("#hour");
const minuto = document.querySelector("#min");
const segundo = document.querySelector("#sec");
const defaultColor = '#FFFFFF';
// onChangeBg() é a função que opera a troca da cor do background
// a troca é feita usando o atributo style, juntamente com o backgroundColor
// captura o valor da cor atribuído no input e aplica na página
function onChangeBg(){
    container.style.backgroundColor = `${color.value}`;
    hora.style.color = `${color.value}`;
    minuto.style.color = `${color.value}`;
    segundo.style.color = `${color.value}`;
}

// setInterval determina uma pausa para a execução do código. 
// Aqui temos uma arrow function () => {} que irá capturar os dados referentes a hora

setInterval(() =>{
    let date = new Date();
    // Date() retorna a hora atual que será importada à pagina pelo método getHour/Minutes/Seconds
    let horas = date.getHours();
    let minutos = date.getMinutes();
    let segundos = date.getSeconds();
// Com o inner.html "escrevemos" na página as informações com o método .get 
    hora.innerHTML = `${fortmatTime(horas)}`
    minuto.innerHTML = `${fortmatTime(minutos)}`
    segundo.innerHTML = `${fortmatTime(segundos)}`
}, 1000) 

function fortmatTime(time){
    return time < 10 ? "0" + time : time
}
