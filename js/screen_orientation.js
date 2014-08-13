document.addEventListener("DOMContentLoaded", function(){
  
    screen.addEventListener("mozorientationchange", function (event) {
        document.getElementById("orientation").textContent = screen.mozOrientation;
    });

    document.getElementById("orientation").textContent = screen.mozOrientation;

});
