const MedidaMetros = prompt("Ingrese la medida en metros");
const MedidaPies = (parseFloat(MedidaMetros) * 3.28084 / 1);
const MedidaCenti = (parseFloat(MedidaMetros) * 100 / 1);
const MedidaPulg = (parseFloat(MedidaMetros) * 39.3701 / 1);
alert("En pies serian" + MedidaPies);
alert("En centimetros" + MedidaCenti);
alert("En Pulgadas" + MedidaPulg);