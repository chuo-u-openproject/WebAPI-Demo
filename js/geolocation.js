document.addEventListener("DOMContentLoaded", function() {
    
    var watchID = navigator.geolocation.watchPosition( function(position) {
        var str = "latitude: "+position.coords.latitude+", longitude: "+position.coords.longitude;
        document.getElementById("geolocation").textContent = str;
    });
    
});
