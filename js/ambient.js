document.addEventListener("DOMContentLoaded", function() {
    
    window.addEventListener("devicelight", function(e) {
         document.getElementById("ambient-text").textContent = e.value;
    });
    
});
