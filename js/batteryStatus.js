function updateBatteryStatus() {
    var battery = navigator.battery || navigator.mozBattery || navigator.webkitBattery;
    
    document.getElementById("level").innerHTML = battery.level * 100;
    
    if (battery.charging) {
        document.getElementById("charge").innerHTML = "Battery is charging";
    } else {
        document.getElementById("charge").innerHTML = "Battery is not charging";
    }
}

document.addEventListener("DOMContentLoaded", function() {

    updateBatteryStatus();
    battery.addEventListener("chargingchange", updateBatteryStatus);
    battery.addEventListener("levelchange", updateBatteryStatus);

 });