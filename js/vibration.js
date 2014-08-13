document.addEventListener("DOMContentLoaded", function() {

    document.getElementById("vib1").addEventListener("click", function() {
        window.navigator.vibrate(1000);
    });
    document.getElementById("vib2").addEventListener("click", function() {
        window.navigator.vibrate([200, 300, 200]);
    });
    document.getElementById("vib3").addEventListener("click", function() {
        window.navigator.vibrate([400, 150, 100, 150, 100, 150, 100]);
    });

});
