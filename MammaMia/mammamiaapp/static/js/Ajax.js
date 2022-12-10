var ajaxRequest = new XMLHttpRequest();
ajaxRequest.onreadystatechange = function(){

    if(ajaxRequest.readyState == 4){
        if(ajaxRequest.status == 200){
          var messagesArray = JSON.parse(ajaxRequest.responseText);

          var randomIndex = Math.floor(Math.random()*messagesArray.length);
          var messageObj = messagesArray[randomIndex];
          console.log(messagesArray);

          var welcomeDiv = document.getElementById("ajax");
          welcomeDiv.innerHTML = messageObj.fields.nombre;
          welcomeDiv.style.color = messageObj.color;	
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

