const PrimerNota = prompt("Primera nota");
const SegundaNota = prompt("Segunda Nota");
const TerceraNota = prompt("Tercera Nota");
const Resultado = (parseFloat(PrimerNota) + parseFloat(SegundaNota) + parseFloat(TerceraNota)) / 3;
alert("El resultado es: " + Resultado);