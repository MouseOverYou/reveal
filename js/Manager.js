function startExp() {
  //enableNodeChildren(rollTask);
  //enableNodeChildren(complexTask);
  startBalls();
  startText();
  startRollen();

  Static_P.setEnabled(false);
  Bay_P.setEnabled(true)
  Balls_P.setEnabled(true);
  Roll_P.setEnabled(true);

  window.setTimeout(showScreen, 7500);
  window.setTimeout(hideScreen, 12000);
;
}

function startBalls() {
  ballsTask.loadedAnimationGroups[0].play(false);
  ballsTask.loadedMeshes[0].getChildMeshes(false, (m) => {
    if (m.name.indexOf("Kugel") != -1 || m.name.indexOf("main") != -1) {
      m.visibility = 1;
    }
  })
}

function startText() {
  if (isComplex)
  {
    window.setTimeout(()=>{
      Complex_P.setEnabled(true);
      gsap.fromTo(mainMatC,{alpha: 0}, {duration: 1, ease: "bounce", alpha:1});
    }, 2000)

    complexTask.loadedAnimationGroups[0].play(false);
    window.setTimeout(() => 
    {
      Complex_P.setEnabled(false);
      Static_P.setEnabled(true);
    }, 5000);
  }

  else
  {
    window.setTimeout(()=>{
      Simple_P.setEnabled(true);
    }, 4000)
    
    simpleTask.loadedAnimationGroups[0].play(false);
    window.setTimeout(() => 
    {
      Simple_P.setEnabled(false);
      Static_P.setEnabled(true);
    }, 5000);
  }
}

function startLogo() {
  bayTask.loadedMeshes[0].getChildMeshes(false, (m) => {
    if (m.name.indexOf("Bay") != -1) {
      m.visibility = 1;
    }
  })
}

function startRollen() {
  rollTask.loadedAnimationGroups[0].play(false);
}

function enableNodeChildren(parent){
  var current = parent.isEnabled
  parent.setEnabled(!current);
  console.log(!current)

}

function showScreen(){
  gsap.to(Bay_P.scaling, {duration: 1, ease: "bounce", x: 0, y: 0, z: 0});
  gsap.to(Bay_P.rotation, {duration: 0.5, ease: "bounce", x: 0, y: -Math.PI / 2, z: 0});
  gsap.to(Screen.scaling, {delay: 0.5, duration:1, ease:"bounce", x:1, y:1, z:1});
  vidText.video.play();
}

function hideScreen(){
  gsap.to(Bay_P.scaling, {delay: 0.5, duration: 1, ease: "bounce", x: 1, y: 1, z: 1});
  gsap.to(Bay_P.rotation, {delay: 0.5, duration: 0.5, ease: "bounce", x: 0, y: Math.PI / 2, z: 0});
  gsap.to(Screen.scaling, {duration:1, ease:"bounce", x:0, y:0, z:0});
  vidText.video.pause();
  window.setTimeout(showWeb, 3000)
}

function showWeb(){
  gsap.to(WebPlane.scaling, {duration:0.5, ease: "bounce", x:2, y:2, z:2});
  gsap.to(Bay_P.position, {duration:0.5, ease: "bounce", x:0, y:0, z:-20});
  gsap.to(mainStaticMat, {duration:0.5, ease: "linear", alpha: 0 });
}