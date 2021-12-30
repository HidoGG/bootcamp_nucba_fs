const Kilometro = prompt("Cantidad de kilómetros que desea recorrer con su motocicleta");
const KmHs = prompt("La velocidad promedio a la que desea ir en kilómetros por hora");
const ResultadoMin = ((parseFloat(Kilometro) / parseFloat(KmHs)) * 60 / 1);
alert("El tiempo estimado en minutos son: " + ResultadoMin);