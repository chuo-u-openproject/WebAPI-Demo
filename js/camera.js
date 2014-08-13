$(document).ready(function() {
    var options = {
        mode: 'picture',
        recorderProfile: 'jpg',
        previewSize: {
            width: 352,
            height: 288
        }
    };

    $('#info').append("test1<br>");
    var cameras = navigator.mozCameras.getListOfCameras();
    for(var elm in navigator.mozCameras) {
        $('#info').append(navigator.mozCameras[elm] + "<br>");
    }

    function onSuccess(camera) {
        $('#info').append('Success<br>');
    };

    function onError(error) {
        $('#info').append('エラーが発生しました。再読み込みしてください。');
    };

    $('#info').append("test2<br>");
    navigator.mozCameras.getCameras(cameras[0], options, onSuccess, onError);
    $('#info').append("test3<br>");
});