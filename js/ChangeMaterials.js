var mainMask, secondMask, secondEmissive, vidText;
var mainMat, mainStaticMat, mainMatC;

function changeMats(){

    var bayblack = new BABYLON.Color3.FromHexString("#000000");
    mainMat = scene.getMaterialByName("BayMat");
    mainMat.reflectionTexture = hdrTexture;
    mainMat.metallic = 0.8;
    mainMat.roughness = 0.1;
    mainMat.albedoColor = bayblack;

    mainMatC = scene.getMaterialByName("BayMatComp");
    mainMatC.transparencyMode = 3;
    mainMatC.alpha =0;
    mainMatC.reflectionTexture = hdrTexture;
    mainMatC.metallic = 0.8;
    mainMatC.roughness = 0.1;
    mainMatC.albedoColor = bayblack;

    mainStaticMat = scene.getMaterialByName("BayStaticMat");
    mainStaticMat.reflectionTexture = hdrTexture;
    mainStaticMat.metallic = 0.8;
    mainStaticMat.roughness = 0.1;
    mainStaticMat.albedoColor = bayblack;
    mainStaticMat.transparencyMode = 3;

    var ballsMat = scene.getMaterialByName("ballsMat");
    ballsMat.reflectionTexture = hdrTexture;
    ballsMat.metallic = 0.8;
    ballsMat.roughness = 0.1;
    ballsMat.albedoColor =bayblack;

    //FilmRolle Mats
    var discMat = scene.getMaterialByName("filmRolle");
    discMat.reflectionTexture = hdrTexture;
    discMat.metallic = 0.8;
    discMat.roughness = 0.1;
    discMat.albedoColor = new BABYLON.Color3.FromHexString("#353F46");

    var metalMat = scene.getMaterialByName("filmMetal");
    metalMat.reflectionTexture = hdrTexture;
    metalMat.metallic = 1;
    metalMat.roughness = 0.2;
    metalMat.albedoColor = new BABYLON.Color3.FromHexString("#788B98");

    var knopMat = scene.getMaterialByName("filmKnop");
    knopMat.reflectionTexture = hdrTexture;
    knopMat.metallic = 0.8;
    knopMat.roughness = 0.2;
    knopMat.albedoColor = new BABYLON.Color3.FromHexString("#EBD7A0");

    vidText = new BABYLON.VideoTexture("video", "./assets/bay_vid.mp4", scene, true);
    vidText.video.autoplay = false;
    vidText.video.muted = false;

    screenMat.unlit = true;
    screenMat.albedoTexture = vidText;

    webMat.unlit = true;
    var webText= new BABYLON.Texture("./assets/web.png", scene, false, true)
    webMat.albedoTexture = webText;
    webMat.opacityTexture = webText;
    
}