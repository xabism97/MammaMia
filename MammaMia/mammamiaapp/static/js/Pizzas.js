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
          tipoMasa.textContent = "Tipo de masa: " + array[z].fields.nombre;
          tipoMasa.href = "tiposmasa/" + array[z].pk;

          tipoMasa.addEventListener("mouseover", function(event) {
            tipoMasa.style.color = "red";
          });

          tipoMasa.addEventListener("mouseout", function(event) {
            tipoMasa.style.color = "#6495ED";
          });
        }
      }

      
      

      for (let z = 0; z < array.length; z++) {
        if ((array[z].model == "mammamiaapp.ingrediente") && (array[i].fields.ingredientes.includes(array[z].pk))) {
          var liIngrediente = document.createElement("li");
          var aIngrediente = document.createElement("a");
          aIngrediente.textContent = array[z].fields.nombre;

          aIngrediente.addEventListener("mouseover", function(event) {
            aIngrediente.style.color = "red";
          });

          aIngrediente.addEventListener("mouseout", function(event) {
            aIngrediente.style.color = "#6495ED";
          });

          liIngrediente.appendChild(aIngrediente);
          ulIngredientes.appendChild(liIngrediente);

          aIngrediente.href = "ingredientes/" + array[z].pk;

          
        }
      }

      precio.textContent = "Precio: " + array[i].fields.precio + " €";
      a.style.color = "#6495ED";


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

      a.addEventListener("mouseover", function(event) {
        a.style.color = "red";
        document.body.style.cursor = "pointer";
      });

      a.addEventListener("mouseout", function(event) {
        a.style.color = "#6495ED";
        document.body.style.cursor = "default";
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




