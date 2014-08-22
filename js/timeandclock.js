document.addEventListener("DOMContentLoaded", function() {

    function setTime(time) {
        document.getElementById("time").textContent = time;
        navigator.mozTime.set(time);
    }
    
    setTime(new Date());

    window.addEventListener('moztimechange', function () {
        console.log('Time has changed');
    });

});