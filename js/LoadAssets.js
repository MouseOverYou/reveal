var hdrTexture, Screen, screenMat, WebPlane;
var ballsTask, bayTask, simpleTask, complexTask, rollTask, rollMeshTask;
var moveScene_P, Bay_P, Static_P, Balls_P, Complex_P, Roll_P, Simple_P;
function LoadAssets(scene, assetsManager) {
    Bay_P = new BABYLON.TransformNode("Bay_P")

    //ENV TASK
    var envTask = assetsManager.addCubeTextureTask("envTask", "./assets/environment.dds");

    envTask.onSuccess = function (task) {
        //alert('HDR LOADED');
        hdrTexture = new BABYLON.CubeTexture.CreateFromPrefilteredData("./assets/environment.dds", scene);

        // Create Skybox
        var hdrSkybox = BABYLON.Mesh.CreateBox("hdrSkyBox", 1000.0, scene);
        hdrSkybox.visibility = 0
        var hdrSkyboxMaterial = new BABYLON.PBRMaterial("skyBox", scene);
        hdrSkyboxMaterial.backFaceCulling = false;
        hdrSkyboxMaterial.microSurface = 1.0;
        hdrSkyboxMaterial.disableLighting = true;
        hdrSkybox.material = hdrSkyboxMaterial;
        hdrSkybox.infiniteDistance = false;

    }
    envTask.onError = function (task, message, exception) {
        console.log(message, exception);
    }


    Balls_P = new BABYLON.TransformNode("Balls_P", scene);
    ballsTask = assetsManager.addMeshTask("", "", "./assets/balls_anim.glb")

    ballsTask.onSuccess = function (task) {
        task.loadedMeshes[0].parent = Balls_P;
        Balls_P.parent = Bay_P;
        task.loadedAnimationGroups[0].name = "balls anim"
        task.loadedAnimationGroups[0].stop();
        //var standard = new BABYLON.StandardMaterial("standard", scene)
        task.loadedMeshes[0].getChildMeshes(false, (m) => {
            if (m.name.indexOf("Kugel") != -1 || m.name.indexOf("main") != -1) {
                m.visibility = 0;
                console.log(m.name)
            }
        })
        //Bay2 = task.loadedMeshes[0].clone();

        Bay_P.rotation.y = Math.PI / 2;
    }

    ballsTask.onError = function (task, message, exception) {
        console.log(message, exception);
    }

    Simple_P = new BABYLON.TransformNode("Simple_P", scene);

    simpleTask = assetsManager.addMeshTask("", "", "./assets/text simple.glb")

    simpleTask.onSuccess = function (task) {
        task.loadedMeshes[0].parent = Simple_P;
        Simple_P.parent = Bay_P
        task.loadedAnimationGroups[0].name = "simple anim"
        task.loadedAnimationGroups[0].stop();
        //var standard = new BABYLON.StandardMaterial("standard", scene)
        task.loadedMeshes[0].getChildMeshes(false, (m) => {
            if (m.name.indexOf("Kugel") != -1 || m.name.indexOf("main") != -1) {
                //m.visibility = 0;
                console.log(m.name)
            }
        })
    }

    simpleTask.onError = function (task, message, exception) {
        console.log(message, exception);
    }

    Complex_P = new BABYLON.TransformNode("Complex_P", scene);
    complexTask = assetsManager.addMeshTask("", "", "./assets/text complex.glb")

    complexTask.onSuccess = function (task) {
        task.loadedMeshes[0].parent = Complex_P;
        Complex_P.parent = Bay_P;
        task.loadedAnimationGroups[0].name = "complex anim"
        task.loadedAnimationGroups[0].stop();
        //var standard = new BABYLON.StandardMaterial("standard", scene)
        task.loadedMeshes[0].getChildMeshes(false, (m) => {
            if (m.name.indexOf("Kugel") != -1 || m.name.indexOf("main") != -1) {
                //m.visibility = 0;
                console.log(m.name)
            }
        })
    }

    complexTask.onError = function (task, message, exception) {
        console.log(message, exception);
    }

    Static_P = new BABYLON.TransformNode("Static_P", scene);
    staticTask = assetsManager.addMeshTask("", "", "./assets/bay text static.glb")

    staticTask.onSuccess = function (task) {
        task.loadedMeshes[0].parent = Static_P;
        Static_P.parent = Bay_P;
        //var standard = new BABYLON.StandardMaterial("standard", scene)
        task.loadedMeshes[0].getChildMeshes(false, (m) => {
            if (m.name.indexOf("Kugel") != -1 || m.name.indexOf("main") != -1) {
                //m.visibility = 0;
                //console.log(m.name)
            }
        })
    }

    staticTask.onError = function (task, message, exception) {
        console.log(message, exception);
    }
    Roll_P = new BABYLON.TransformNode("Roll_P", scene);

    rollTask = assetsManager.addMeshTask("", "", "./assets/roll_anim.glb")

    rollTask.onSuccess = function (task) {
        task.loadedMeshes[0].parent = Roll_P;
        Roll_P.parent = Bay_P;
        task.loadedAnimationGroups[0].name = "roll anim"
        task.loadedAnimationGroups[0].stop();
        //var standard = new BABYLON.StandardMaterial("standard", scene)
        task.loadedMeshes[0].getChildMeshes(false, (m) => {
            if (m.name.indexOf("profile") != -1) {
                m.visibility = 0;
                console.log(m.name)
            }
        })
        //Bay2 = task.loadedMeshes[0].clone();

        Bay_P.rotation.y = Math.PI / 2;
    }

    rollTask.onError = function (task, message, exception) {
        console.log(message, exception);
    }

    rollMeshTask = assetsManager.addMeshTask("", "", "./assets/roll_mesh.glb")

    rollMeshTask.onSuccess = function (task) {

    }

    rollMeshTask.onError = function (task, message, exception) {
        console.log(message, exception);
    }


    var psHolder
    assetsManager.onFinish = function (task) {
        //create screen
        Screen = new BABYLON.MeshBuilder.CreatePlane("Screen", { width: 19.20, height: 10.8 }, scene)
        Screen.scaling = new BABYLON.Vector3(0, 0, 0);
        screenMat = new BABYLON.PBRMaterial("screen", scene);
        Screen.material = screenMat;

        //create web
        WebPlane = new BABYLON.MeshBuilder.CreatePlane("WebPlane", { width: 10.8, height: 10.8 }, scene)
        WebPlane.scaling = new BABYLON.Vector3(0, 0, 0);
        webMat = new BABYLON.PBRMaterial("screen", scene);
        WebPlane.material = webMat;

        moveScene_P = new BABYLON.TransformNode("moveScene_P", scene)
        moveScene_P.scaling = new BABYLON.Vector3(0.15, 0.15, 0.15);
        Bay_P.parent = moveScene_P;
        Screen.parent = moveScene_P;
        WebPlane.parent = moveScene_P

        rollTask.loadedMeshes[0]._children[0]._children[0].scaling = new BABYLON.Vector3(1, 1, 1);
        rollMeshTask.loadedMeshes[0].parent = rollTask.loadedMeshes[0]._children[0]._children[0];
        console.log(rollTask.loadedMeshes[0]._children[0]._children[0]);
        Static_P.setEnabled(false);
        Complex_P.setEnabled(false);
        Simple_P.setEnabled(false);
        Bay_P.setEnabled(false)
        changeMats();
    }
    //Asset Manager check
    assetsManager.onProgress = function (remainingCount, totalCount, lastFinishedTask) {
        engine.loadingUIText = 'We are loading the scene. ' + remainingCount + ' out of ' + totalCount + ' items still need to be loaded.';
    };

    assetsManager.load();
}



