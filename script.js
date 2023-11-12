let lang = "jquery";
document.addEventListener("DOMContentLoaded"  , function(){
  document.getElementById("using").innerHTML = "You are using: " + lang
  document.getElementById("run").addEventListener("click" , function(){
    if(lang == "jquery"){
       var scr = document.createElement("script");
       scr.innerHTML = document.getElementById('txt').value
       document.getElementById("output").appendChild(scr)
       scr.remove()
    } 
    else if(lang == "html"){
    document.getElementById("output").innerHTML = document.getElementById("txt").value
    }
    else if(lang == "css"){
        var cs = document.createElement("style");
        
        cs.innerHTML = document.getElementById("txt").value;
        document.getElementById("output").append(cs)
    }
  })

  document.getElementById("txt").addEventListener("keydown" , function(){
    if(event.keyCode == 13){
        if( document.getElementById("txt").value == "/html"){
            lang = "html"
            document.getElementById("using").innerHTML = "You are using: " + lang
            document.getElementById("noti").style.display = "flex";
            document.getElementById("notif_txt").innerHTML = "HTML Selected"
            document.getElementById("noti").style.color = "brown"
            document.getElementById("noti").style.borderColor = "brown"
            document.getElementById("notif_txt").style.borderBottomColor = "brown"
            setTimeout(function(){
              document.getElementById("noti").style.display = "none"
            }, 1500)

        }

        else if(document.getElementById("txt").value == "/css"){
            lang = "css";
            document.getElementById("using").innerHTML = "You are using: " + lang
            document.getElementById("noti").style.display = "flex";
            document.getElementById("notif_txt").innerHTML = "{CSS: Selected;}"
            document.getElementById("noti").style.color = "blue"
            document.getElementById("noti").style.borderColor = "blue"
            document.getElementById("notif_txt").style.borderBottomColor = "blue"


            setTimeout(function(){
              document.getElementById("noti").style.display = "none"
            }, 1500)

        }

        else if(document.getElementById("txt").value == "/help"){
          document.getElementById("txt").value = "/jquery (Switches to jquery, it is used by default\n/html (Switches to HTML)\n/css (You totally do not know what this will do.)";
          setTimeout(function() {
            document.getElementById("txt").value = "";
          } , 6000)
        }

        else if(document.getElementById("txt").value == "/jQuery" || document.getElementById("txt").value == "/jquery" ){
          lang = "jquery";
          document.getElementById("using").innerHTML = "You are using: " + lang
          var scr = document.createElement("script");
          scr.innerHTML = document.getElementById('txt').value
          document.getElementById("output").appendChild(scr)
          scr.remove()
          document.getElementById("noti").style.display = "flex";
          document.getElementById("notif_txt").innerHTML = "$(jQuery).Selected"
          document.getElementById("noti").style.color = "green"
          document.getElementById("noti").style.borderColor = "green"
          document.getElementById("notif_txt").style.borderBottomColor = "green"

       setTimeout(function(){
         document.getElementById("noti").style.display = "none"
       }, 1500)

        } 
    } 
  })
  
})

