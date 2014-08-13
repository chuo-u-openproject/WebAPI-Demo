document.addEventListener("DOMContentLoaded", function(){

    window.addEventListener("userproximity", function(e) {
        document.getElementById("proximity").textContent = e.near;
    });

});
