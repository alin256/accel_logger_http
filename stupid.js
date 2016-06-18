var req = new XMLHttpRequest();
req.open('PUT', 'http://127.0.0.1:8000', true);
  req.onreadystatechange = function(e) 
    {
      //console.log("Received Status: " + e.payload.status);
      if (req.readyState == 4) {
        if(req.status == 200) {
          console.log(JSON.stringify(JSON.parse(req.responseText), null, '\t'));
        }
      } 
      else {
        console.log("Error");
      }
    };
  //http.send(document.commandform.messagebody.value);

  req.send("{\"on\": true}");
