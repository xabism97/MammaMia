var ajaxRequest = new XMLHttpRequest();
ajaxRequest.onreadystatechange = function () {

    if(ajaxRequest.readyState == 4){
        if(ajaxRequest.status == 200){
          var messagesArray = JSON.parse(ajaxRequest.responseText);

          createList("mammamiaapp.ingrediente", messagesArray);
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
      let li = document.createElement("li");
      let a = document.createElement('a');

      let ul = document.createElement("ul");
      let listaPizzas = document.createElement("li")
      let textoPizzas = document.createElement("a");
      let linebreak = document.createElement("br");
      let linebreak2 = document.createElement("br");
      textoPizzas.textContent = "Pizzas que contienen este ingrediente:\n";
      listaPizzas.append(textoPizzas);
      //ul.appendChild(textoPizzas);

      for (var y = 0; y < array.length; y++) {
        if ((array[y].model == "mammamiaapp.pizza") && (array[y].fields.ingredientes.includes(array[i].pk))) {
          var li2 = document.createElement("li");
          var a2 = document.createElement("a");
          a2.textContent = array[y].fields.nombre;
          a2.href = "pizzas/" +array[i].pk;
          li2.appendChild(a2);
          ul.appendChild(li2);
        }
      }

      a.addEventListener("click", function(event) {
        if (!expanded) {
          expanded = true;
          
          li.appendChild(linebreak);
          li.appendChild(linebreak2);
          li.appendChild(textoPizzas);
          li.appendChild(ul);
          
        } 
        
        else {
          li.removeChild(ul);
          li.removeChild(textoPizzas);
          li.removeChild(linebreak);
          li.removeChild(linebreak2);
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




