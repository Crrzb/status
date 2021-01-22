let totalVacunadaMundo =57287507;
let totalVacunadaMexico = 552335;




let poblacionMundo =  7874965731;
let poblacionMexico = 130262220;

const fecha ="19-Enero-2021";
const hora = "19:23";





let restantesMundo = poblacionMundo - totalVacunadaMundo;
let restantesMexico = poblacionMexico - totalVacunadaMexico;

const barraMundo = document.getElementById('div-barra-mundo');
const barraMexico = document.getElementById('div-barra-mexico');

const PtotalVacMundo = document.getElementById('total-mundo');
const PrestanteVacMundo = document.getElementById('restante-mundo');

const PtotalVacMexico = document.getElementById('total-mexico');
const PrestanteVacMexico = document.getElementById('restante-mexico');

const fechaActualizado = document.getElementById('fecha-actualizado');
const horaActualizado = document.getElementById('hora-actualizado');


let porcentaje = 0;
const calcularBarra = (total,poblacion,barra) => {
    porcentaje = (total / poblacion) * 100;
    barra.style.height = "100%";
    barra.style.width = `${Math.floor(porcentaje)}%`;
    
    barra.innerHTML = `<p class="p-porcentaje">${Math.floor(porcentaje)}%</p>`;

    if (porcentaje > 80) {
        barra.style.backgroundColor = "#19e47e";
        
    } else if (porcentaje > 60) {
        barra.style.backgroundColor = "#c7e657"
    } else if (porcentaje > 40) {
        barra.style.backgroundColor = "#fbc45f"
    } else if (porcentaje > 20) {
        barra.style.backgroundColor = "#ff9d4d"
        barra.innerHTML = `<p class="p-porcentaje"></p>`;
    } else {
        barra.style.backgroundColor = "#ff4d4d"
        barra.innerHTML = `<p class="p-porcentaje"></p>`;

       // https://coolors.co/ff0000-ff7f00-f5bd1f-9acd32-009150

       //https://coolors.co/ff0000-ff7f00-f5bd1f-9acd32-009150

       //https://coolors.co/ff4d4d-ff9d4d-fbc45f-c7e657-19e47e
    }
}

calcularBarra(totalVacunadaMundo,poblacionMundo,barraMundo);

PtotalVacMundo.innerHTML = totalVacunadaMundo.toLocaleString('en') +" - "+ porcentaje.toFixed(2) + "%";
PrestanteVacMundo.innerHTML = restantesMundo.toLocaleString('en')+ " - " + ( 100 -porcentaje.toFixed(2)) + "%";

calcularBarra(totalVacunadaMexico,poblacionMexico,barraMexico);

PtotalVacMexico.innerHTML = totalVacunadaMexico.toLocaleString('en') + " - " + porcentaje.toFixed(2) + "%";
PrestanteVacMexico.innerHTML = restantesMexico.toLocaleString('en') + " - " + ( 100 -porcentaje.toFixed(2)) + "%";

fechaActualizado.innerHTML = fecha;
horaActualizado.innerHTML = hora;






