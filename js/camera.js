document.addEventListener("DOMContentLoaded", function() {

    var CameraManager = window.navigator.mozCamera || window.navigator.mozCameras;

    var options = {
      mode: 'picture',
      recorderProfile: 'jpg',
      previewSize: {
        width: 320,
        height: 240
      }
    };
    
    var camera = null;
    var cameraType = CameraManager.getListOfCameras()[0];
    var idx = 0;

    function onSuccess(CameraControl) {
        camera = CameraControl;
        console.log('success: ', camera);
        var video = document.getElementById('video');
        var rot   = (cameraType === 'back') ? 90 : -90;
        video.mozSrcObject = camera;
        video.style.transform = 'rotate(' + rot + 'deg)';
        video.play();
        
        // Effect
        var effectsBtn = document.getElementById('effects');
        var effects = camera.capabilities.effects;
        if(effects < 1){
            effectsBtn.setAttribute('disabled', 'disabled');
        }else{
            //console.log(effects);
            effectsBtn.addEventListener('click', function(){
                idx = (idx === effects.length) ? 0 : ++idx; 
                camera.effect = effects[idx];
            });
        }
        
    };

    function onError(error) {
        console.warn(error);
    };
    
    function releaseCamera(){
        if(camera){
            camera.release();
        }
    }

    function getCamera(){
        releaseCamera();
        CameraManager.getCamera(cameraType, options, onSuccess, onError);   
    }
    
    // ボタン
    var start = document.getElementById('start');
    var end = document.getElementById('end');
    start.addEventListener('click', function(){
        getCamera();
    });
    end.addEventListener('click', function(){
        releaseCamera();
    });
    
    // カメラ開始
    getCamera();

    // 終了時に解放
    window.addEventListener('unload', releaseCamera);
    
});