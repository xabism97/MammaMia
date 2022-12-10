var ajaxRequest = new XMLHttpRequest();
ajaxRequest.onreadystatechange = function(){

    if(ajaxRequest.readyState == 4){
        if(ajaxRequest.status == 200){
          var messagesArray = JSON.parse(ajaxRequest.responseText);

          var list_html = document.getElementById("ajaxList");
          for (var i = 0; i < messagesArray.length; i++) {
            if (messagesArray[i].model == "mammamiaapp.ingrediente") {
              var li = document.createElement("li");
              var a = document.createElement('a');
              a.textContent = messagesArray[i].fields.nombre;
              a.href = "http://127.0.0.1:8000/ingredientes/" + messagesArray[i].pk;
              li.appendChild(a);
              list_html.appendChild(li);
              console.log(messagesArray[i].fields.nombre);
            }
          }
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

