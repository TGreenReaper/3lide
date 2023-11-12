let lang = "jquery";
document.addEventListener("DOMContentLoaded"  , function(){
  document.getElementById("run").addEventListener("click" , function(){
    if(lang == "jquery"){
        var scr = document.createElement("script");
       scr.innerHTML = document.getElementById('txt').value
       document.getElementById("output").appendChild(scr)
       scr.remove()
    } 
    else if(lang == "html"){
     document.getElementById("out").src= "data:text/html;charset=utf-8," + encodeURI(document.getElementById("txt").value)
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
            alert("HTML")
        }

        else if(document.getElementById("txt").value == "/css"){
            lang = "css";
            alert("CSS")
        }

        else if(document.getElementById("txt").value == "/jQuery" || document.getElementById("txt").value == "/jquery" ){}
    }
  })
})