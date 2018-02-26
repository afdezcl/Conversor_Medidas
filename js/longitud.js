function resultado() {
  var select = document.getElementById('longitud');
  var valor = select.value;
  var valorInput = document.getElementById('valor-input').value;
  var result = 0;

  if((valorInput == "") || (valorInput == null) || (valorInput<=0)){
    document.getElementById('valor-input').style="border: 2px solid tomato";
  } else {
    //Constantes Cambio de Medidas
    var unMetroPie = 3.28084;
    var unMetroPulgada = 39.3701;
    var unPieMetro = 0.3048;
    var unaPulgadaMetro = 0.0254;

    if(valor == "metros-pies"){
        result = valorInput * unMetroPie;
        document.getElementById('result-input').value = result;

    } else if (valor == "metros-pulgadas"){
        result = valorInput * unMetroPulgada;
        document.getElementById('result-input').value = result;

    } else if (valor == "pies-metros") {
        result = valorInput * unPieMetro;
        document.getElementById('result-input').value = result;

    } else if (valor == "pulgadas-metros") {
        result = valorInput * unaPulgadaMetro;
        document.getElementById('result-input').value = result;
    }
    document.getElementById('valor-input').style="border: 2px solid #ccc";
  }
}
