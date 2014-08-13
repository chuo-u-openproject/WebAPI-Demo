document.addEventListener("DOMContentLoaded", function() {
    var battery = navigator.battery || navigator.mozBattery || navigator.webkitBattery;

    function updateBatteryStatus() {
        console.log("Battery status: " + battery.level * 100 + " %");
        document.write("Battery Level : ");
        document.write(battery.level * 100 + " %<br>");

        if (battery.charging) {
            document.write("Battery is charging");
            console.log("Battery is charging"); 
        }
    }

    battery.addEventListener("chargingchange", updateBatteryStatus);
    battery.addEventListener("levelchange", updateBatteryStatus);
    updateBatteryStatus();
});