const Numero = prompt("Ingrese un Numero");
const Resultado = Math.trunc((((parseFloat(Numero) + 5) * 10) % 3));
alert("Hola, su resultado es " + Resultado);