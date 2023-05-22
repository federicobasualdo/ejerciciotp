
function Calcular()
{
    let resultado = 0;
    let cant = document.getElementById("iCant");
    cant =  cant.value;
    let descuento = document.getElementById("iDescuento");
    descuento =  descuento.options[descuento.selectedIndex].text;
    switch(descuento) {
        case 'Estudiante':
          // code block
          resultado = cant * (200-200 * 0.8);
          break;
        case 'Trainee':
          // code block
          resultado = cant * (200-200 * 0.5);
          break;
          
          case 'Junior':
          // code block
          resultado = cant * (200-200 * 0.15);
          break;
      }

      
      document.getElementById("resultado").innerHTML = resultado;
      //alert(resultado);
      return resultado;
}


function Limpiar()
{
    let collection = document.getElementsByClassName("form-control");

    for (let i = 0; i < collection.length; i++) {
       collection[i].value = "";
       
      }
      document.getElementById("resultado").innerHTML = '';

      return "";
}