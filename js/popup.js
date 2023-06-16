let popup = document.getElementById("popup")

document.getElementById("iucnstatus").addEventListener("click", function() {
    event.stopPropagation();
    popup.style.visibility = "visible";
});

document.addEventListener("click", function(){
    if (popup.style.visibility === "visible" && event.target !== iucnstatus){
        popup.style.visibility = "hidden";
        console.log("hiding")
    }
    else {
        console.log("test")
    }
  })