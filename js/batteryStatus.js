function updateBatteryStatus() {
    var battery = navigator.battery || navigator.mozBattery || navigator.webkitBattery;
    document.getElementById("battery").innerHTML += battery.level * 100 + " %<br>";
    
    if (battery.charging) {
        document.getElementById("battery").innerHTML += "Battery is charging";
    }
}

document.addEventListener("DOMContentLoaded", function() {

    updateBatteryStatus();
    battery.addEventListener("chargingchange", updateBatteryStatus);
    battery.addEventListener("levelchange", updateBatteryStatus);

 });