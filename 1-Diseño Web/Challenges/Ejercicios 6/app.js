const PrimerNumero = prompt("Primer Numero");
const SegundoNumero = prompt("Segundo Numero");
const ResultadoPrimer = parseFloat(PrimerNumero) + parseFloat(SegundoNumero);
alert("El resultado de la Primera cuenta es: " + ResultadoPrimer);
const TercerNumero = prompt("Tercer Numero");
const FinalCuenta = parseFloat(ResultadoPrimer) * parseFloat(TercerNumero);
alert("Su resultado final es: " + FinalCuenta);