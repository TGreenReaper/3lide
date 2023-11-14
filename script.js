let lang = "jquery";
let scr_bool = false;
document.addEventListener("DOMContentLoaded"  , function(){

  function bg() {
    document.getElementById("urnoti-txt").style.display = "block"
    document.getElementById("urnoti-txt").onchange = function(){
      var img_ur = document.getElementById("ur_box").value;
  
    document.getElementById("txt").style.backgroundImage = "url('" + img_ur+ "')"
    document.getElementById("txt").style.backgroundRepeat = "no-repeat";
    document.getElementById("txt").style.backgroundSize = "cover";
    document.getElementById("txt").style.backgroundPosition = "center"
    document.getElementById("txt").style.color = "black"
    document.getElementById("urnoti-txt").style.display = "none"
    }

    
  }

  document.getElementById("txt").style.backgroundImage = 'url(' + localStorage.getItem("bgimg") + ")"

  document.getElementById("using").innerHTML = "You are using: " + lang
  document.getElementById("run").addEventListener("click" , function(){
    var scrpt = document.createElement("script");

    if(lang == "jquery"){
     function wow(){
      var scrpt = document.createElement('script')
      scrpt.innerHTML = document.getElementById("txt").value
      scrpt.id = "scr";
      document.getElementById("output").appendChild(scrpt)
      document.getElementById("scr").remove()
     }
     wow()
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
              document.getElementById("txt").value = ""

            }, 1500)
           


        }

        else if(document.getElementById("txt").value == "/theme green") {
          theme("green")
        }

        else if(document.getElementById("txt").value == "/theme default") {
          theme("blue")
        }

        else if(document.getElementById("txt").value == "/theme yellow") {
          theme("yellow")
        }

        else if(document.getElementById("txt").value == "/theme purple") {
          theme("purple")
        }

        else if(document.getElementById("txt").value == "/theme red") {
          theme("red")
        }

        else if(document.getElementById("txt").value == "/clear"){
          document.getElementById("output").innerHTML = "";
          document.getElementById("txt").value = "";

        }

        else if(document.getElementById("txt").value == "/bg-img"){
        bg()
        document.getElementById("txt").value = ""
        } else if(document.getElementById('txt').value == "/bg --save"){
          bg()
          localStorage.setItem("bgimg", document.getElementById("ur_box").value)
          document.getElementById("txt").value = ""

        } 
        else if(document.getElementById("txt").value == "/remove bg"){
          localStorage.removeItem("bgimg")
          location.reload()
        }

        else if(document.getElementById("txt").value == "/help"){
          document.getElementById("txt").value = "/jquery (Switches to jquery, it is used by default\n/html (Switches to HTML)\n/css (You totally do not know what this will do.\n/clear (Clears the output and the input.)\n/bg-image(Allows you to put your image urls as the bg image of the textbox.\n/bg --save(Saves the image for every time you visit again)\n/theme red , green , default(blue),purple,yellow (Changes color scheme)";
          setTimeout(function() {
            document.getElementById("txt").value = "";
          } , 8500)
        }
        

        else if(document.getElementById("txt").value == "/jQuery" || document.getElementById("txt").value == "/jquery" ){
          lang = "jquery";
          document.getElementById("using").innerHTML = "You are using: " + lang
          document.getElementById("noti").style.display = "flex";
          document.getElementById("notif_txt").innerHTML = "$(jQuery)\n.Selected"
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

document.addEventListener('keydown' , function(e){
if(e.altKey && e.key == "o"){
var newWin = window.open("" , "_blank")
newWin.document.write(document.getElementById("output").innerHTML)
}
})


document.addEventListener('keydown' , function(e){
  if(e.altKey && e.key == "c"){

    document.getElementById("txt").value = "";
    document.getElementById("noti").style.display = "flex";
    document.getElementById("notif_txt").innerHTML = "Cleared!"
    document.getElementById("noti").style.color = "blue"
    document.getElementById("noti").style.borderColor = "blue"
    document.getElementById("notif_txt").style.borderBottomColor = "blue"

 setTimeout(function(){
   document.getElementById("noti").style.display = "none"
 }, 1500)

  }
  })




  document.addEventListener('keydown' , function(e){
    if(e.altKey && e.key == "b"){
bg()
  }
    })
    
  
  
function theme(color){
document.getElementById("ide-container").style.borderColor = color
document.getElementById("output").style.borderColor = color
document.getElementById("ide-container").style.color = color
document.getElementById("txt-title").style.color = color


document.getElementById("txt").style.borderColor = color
document.getElementById("txt").style.color = color

document.getElementById("txt").style.boxShadow = "2px 2px 2px 1px ${color}"
}