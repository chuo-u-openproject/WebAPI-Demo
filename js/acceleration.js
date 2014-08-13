var flag = 0;

document.addEventListener("DOMContentLoaded", function() {
    window.addEventListener("devicemotion", deviceMotion)
    window.addEventListener("deviceorientation", deviceOrientation);
});

function deviceMotion(e) {
    var x = e.accelerationIncludingGravity.x;
    var y = e.accelerationIncludingGravity.y;
    var z = e.accelerationIncludingGravity.z;

    document.getElementById("x").innerHTML = x;
    document.getElementById("y").innerHTML = y;
    document.getElementById("z").innerHTML = z;
}

function deviceOrientation(e) {
    var alpha = e.alpha;
    var beta = e.beta;
    var gamma = e.gamma;

    document.getElementById("alpha").innerHTML = alpha;
    document.getElementById("beta").innerHTML = beta;
    document.getElementById("gamma").innerHTML = gamma;
}
