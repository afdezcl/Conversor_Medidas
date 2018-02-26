function resultado() {
  var select = document.getElementById('pesos');
  var valor = select.value;
  var valorInput = document.getElementById('valor-input').value;
  var result = 0;

  if((valorInput == "") || (valorInput == null) || (valorInput<=0)){
    document.getElementById('valor-input').style="border: 2px solid tomato";
  }else{
    //Constantes Cambio de Medidas
    var unGramoLibra = 0.00220462;
    var unGramoOnza = 0.035274;
    var unaLibraGramo = 453.592;
    var unaOnzaGramo = 28.3495;

    if(valor == "gramos-libras"){
        result = valorInput * unGramoLibra;
        document.getElementById('result-input').value = result;

    } else if (valor == "gramos-onzas"){
        result = valorInput * unGramoOnza;
        document.getElementById('result-input').value = result;

    } else if (valor == "libras-gramos") {
        result = valorInput * unaLibraGramo;
        document.getElementById('result-input').value = result;

    } else if (valor == "onzas-gramos") {
        result = valorInput * unaOnzaGramo;
        document.getElementById('result-input').value = result;
    }
    //reset color borde del input
    document.getElementById('valor-input').style="border: 2px solid #ccc";
  }

}
