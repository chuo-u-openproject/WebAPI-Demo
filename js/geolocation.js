$(document).ready(function() {
    
    var watchID = navigator.geolocation.watchPosition( function(position) {
        var str = "latitude: "+position.coords.latitude+", longitude: "+position.coords.longitude;
        $("#geolocation").text(str);
    });
    
});
