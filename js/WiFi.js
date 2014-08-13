document.addEventListener("DOMContentLoaded", function() {

    var wifi = navigator.mozWifiManager;
    
    var request = wifi.getNetworks();

    request.onsuccess = function () {
        var networks = this.result;
        var infoElm = document.getElementById("info");

        infoElm.innerHTML += networks.length + '件のWi-Fiを検出しました<br><br>';

        networks.sort(sortNetworksByStrength);
        networks.forEach(function (network) {
            infoElm.innerHTML += network.ssid;
            infoElm.innerHTML += ' (' + network.relSignalStrength + ')<br>';
        });
    };

    request.onerror = function (err) {
        infoElm.innerHTML += 'エラーが発生しました。再読み込みしてください。';
    };
    
    function sortNetworksByStrength(a, b) {
        return a.signalStrength > b.signalStrength ? 1 : -1;
    }
});