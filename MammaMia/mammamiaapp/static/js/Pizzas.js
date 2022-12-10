var ajaxRequest = new XMLHttpRequest();
ajaxRequest.onreadystatechange = function () {

    if(ajaxRequest.readyState == 4){
        if(ajaxRequest.status == 200){
          var messagesArray = JSON.parse(ajaxRequest.responseText);

          createList("mammamiaapp.pizza", messagesArray);
        }
        else{
          console.log("Status error: " + ajaxRequest.status);
        }
      }
      else{
        console.log("Ignored readyState: " + ajaxRequest.readyState);
      }
    }

ajaxRequest.open('GET', 'http://127.0.0.1:8000/mammamiadata.json');
ajaxRequest.send();

function createList(name, array) {
  var list_html = document.getElementById("ajaxList");

  for (let i = 0; i < array.length; i++) {
    if (array[i].model == name) {
      
      let expanded = false;
      let ul = document.createElement("ul");
      let li = document.createElement("li");
      let a = document.createElement("a");
      let ulIngredientes = document.createElement("ul");
      let tipoMasa = document.createElement('a');
      let precio = document.createElement('p');
      let linebreak = document.createElement("br");
      let linebreak2 = document.createElement("br");


      for (let z = 0; z < array.length; z++) {
        console.log(array[i].fields.tipomasa);
        if ((array[z].model == "mammamiaapp.tipomasa") && (array[i].fields.tipoMasa == array[z].pk)) {
          console.log("Llega");
          tipoMasa.textContent = "Tipo de masa: " + array[z].fields.nombre;
        }
      }

      
      

      for (let z = 0; z < array.length; z++) {
        if ((array[z].model == "mammamiaapp.ingrediente") && (array[i].fields.ingredientes.includes(array[z].pk))) {
          var liIngrediente = document.createElement("li");
          var aIngrediente = document.createElement("a");
          aIngrediente.textContent = array[z].fields.nombre;
          liIngrediente.appendChild(aIngrediente);
          ulIngredientes.appendChild(liIngrediente);
        }
      }

      precio.textContent = "Precio: " + array[i].fields.precio + " €";
      


      a.addEventListener("click", function(event) {
        if (!expanded) {
          expanded = true;
          
          li.appendChild(linebreak);
          li.appendChild(linebreak2);
          li.appendChild(tipoMasa);
          li.appendChild(ulIngredientes);
          li.appendChild(precio);
          
        } 
        
        else {

          li.removeChild(linebreak);
          li.removeChild(linebreak2);
          li.removeChild(tipoMasa);
          li.removeChild(ulIngredientes);
          li.removeChild(precio);
          
          expanded = false;
        }
      });

      a.setAttribute("style", "backgroundColor");
      a.textContent = array[i].fields.nombre;
      //a.href = "http://127.0.0.1:8000/ingredientes/" + array[i].pk;
      li.appendChild(a);
      list_html.appendChild(li);
      //console.log(array[i].fields.nombre);
    }
  }
}




