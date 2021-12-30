const Sueldo = prompt("ingresar el sueldo bruto");
const ObraSocial = (parseFloat(Sueldo) * 0.03);
const Jubilacion = (parseFloat(Sueldo) * 0.11);
const Ley = (parseFloat(Sueldo) * 0.03);
alert("Sus Deducciones son: " + "Obra Socual " + ObraSocial + " - " + "Jubilación " + Jubilacion + " - " + "Ley 19032 " + Ley);
const Resultado = (parseFloat(Sueldo) - parseFloat(ObraSocial) - parseFloat(Jubilacion) - parseFloat(Ley));
alert("el monto final. No contempla impuesto a las ganancias ni sindicatos es: " + Resultado);