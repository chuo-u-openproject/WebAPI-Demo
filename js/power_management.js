document.addEventListener("DOMContentLoaded", function(){
  
    var power = window.navigator.mozPower;

    document.getElementById("brightness").textContent = power.screenBrightness;
    
    document.getElementById("sleep").addEventListener("click", function(){
        power.cpuSleepAllowed = true;
        power.screenEnabled   = false;
    });

});
