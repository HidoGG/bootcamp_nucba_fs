const Monto = prompt("Monto a ingresar");
const Descuento = prompt("Descuento que tendra el Monto, debe comenzar en 0, ...");
const ResultadoDelDescuento = (parseFloat(Monto) - (parseFloat(Monto) * parseFloat(Descuento)));
alert("El resultado con descuento es: " + ResultadoDelDescuento);