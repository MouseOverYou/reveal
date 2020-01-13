var particleSystem;

function createParticles() {
    var child = new BABYLON.TransformNode("holder");
            //child.parent = psHolder;
            child.position.y = 0.3;
            child.position.x = -12;

    particleSystem = new BABYLON.ParticleSystem("particles", 30, scene, null, true);
    particleSystem.particleTexture = new BABYLON.Texture("https://raw.githubusercontent.com/PatrickRyanMS/BabylonJStextures/master/ParticleSystems/Steam/T_SteamSpriteSheet.png", scene, true,
        false, BABYLON.Texture.TRILINEAR_SAMPLINGMODE);

    particleSystem.startSpriteCellID = 0;
    particleSystem.endSpriteCellID = 31;
    particleSystem.spriteCellHeight = 256;
    particleSystem.spriteCellWidth = 128;
    particleSystem.spriteCellChangeSpeed = 4;
    particleSystem.maxInitialRotation = Math.PI*2;

    particleSystem.minScaleX = 4;
    particleSystem.minScaleY = 8;
    particleSystem.maxScaleX = 4;
    particleSystem.maxScaleY = 8;

    particleSystem.addSizeGradient(0, 0.0, 0.0);
    particleSystem.addSizeGradient(1.0, 1, 1);

    particleSystem.translationPivot = new BABYLON.Vector2(-0., 0);

    // Where the particles come from
    var radius = 0.4;
    var angle = Math.PI;
    var coneEmitter = new BABYLON.ConeParticleEmitter(radius, angle);

    particleSystem.particleEmitterType = coneEmitter;
    particleSystem.emitter = child;

    // Life time of each particle (random between...
    particleSystem.minLifeTime = 4.0;
    particleSystem.maxLifeTime = 4.0;

    // Color gradient over life
    particleSystem.addColorGradient(0, new BABYLON.Color4(1, 1, 1, 0));
    particleSystem.addColorGradient(0.5, new BABYLON.Color4(1, 1, 1, 70 / 255));
    particleSystem.addColorGradient(1.0, new BABYLON.Color4(1, 1, 1, 0));

    // Emission rate
    particleSystem.emitRate = 6*4;

    // Blend mode : BLENDMODE_ONEONE, or BLENDMODE_STANDARD
    particleSystem.blendMode = BABYLON.ParticleSystem.BLENDMODE_ADD;

    // Set the gravity of all particles
    particleSystem.gravity = new BABYLON.Vector3(0, 0, 0);

    // Speed
    particleSystem.minEmitPower = 0;
    particleSystem.maxEmitPower = 0;
    particleSystem.updateSpeed = 1 / 60;

}