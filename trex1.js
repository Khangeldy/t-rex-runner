!function(){"use strict";function t(i,e){if(t.instance_)return t.instance_;t.instance_=this,this.outerContainerEl=document.querySelector(i),this.containerEl=null,this.snackbarEl=null,this.config=e||t.config,this.dimensions=t.defaultDimensions,this.canvas=null,this.canvasCtx=null,this.tRex=null,this.initialLives=3,this.lives=this.initialLives,this.score=0,this.immortal=!1,this.distanceMeter=null,this.distanceRan=0,this.highestScore=0,this.time=0,this.runningTime=0,this.msPerFrame=1e3/s,this.currentSpeed=this.config.SPEED,this.obstacles=[],this.obstacleLength=18,this.points=0,this.activated=!1,this.playing=!1,this.crashed=!1,this.paused=!1,this.inverted=!1,this.invertTimer=0,this.resizeTimerId_=null,this.playCount=0,this.audioBuffer=null,this.soundFx={},this.audioContext=null,this.images={},this.imagesLoaded=0,this.isDisabled()?this.setupDisabledRunner():this.loadImages()}window.Runner=t;var i=document.body.clientHeight,s=60,e=window.devicePixelRatio>1,n=/iPad|iPhone|iPod/.test(window.navigator.platform),h=/Android/.test(window.navigator.userAgent)||n;window;function o(t,i){return Math.floor(Math.random()*(i-t+1))+t}function a(t){h&&window.navigator.vibrate&&window.navigator.vibrate(t)}function r(t){for(var i=t.length/4*3,s=atob(t),e=new ArrayBuffer(i),n=new Uint8Array(e),h=0;h<i;h++)n[h]=s.charCodeAt(h);return n.buffer}function c(){return n?(new Date).getTime():performance.now()}function d(t,i,s,e){this.canvas=t,this.canvasCtx=t.getContext("2d"),this.canvasDimensions=e,this.textImgPos=i,this.restartImgPos=s,this.draw()}function u(t,i){return new T(t.x+i.x,t.y+i.y,t.width,t.height)}function l(t,i,s){t.save(),t.strokeStyle="#f00",t.strokeRect(i.x,i.y,i.width,i.height),t.strokeStyle="#0f0",t.strokeRect(s.x,s.y,s.width,s.height),t.restore()}function m(t,i){var s=!1,e=(t.x,t.y,i.x);i.y;return t.x<e+i.width&&t.x+t.width>e&&t.y<i.y+i.height&&t.height+t.y>i.y&&(s=!0),s}function T(t,i,s,e){this.x=t,this.y=i,this.width=s,this.height=e}function p(t,i,s,e,n,h,a){this.canvasCtx=t,this.spritePos=s,this.typeConfig=i,this.gapCoefficient=n,this.size=o(1,p.MAX_OBSTACLE_LENGTH),this.dimensions=e,this.remove=!1,this.xPos=e.WIDTH+(a||0),this.yPos=0,this.width=0,this.collisionBoxes=[],this.gap=0,this.speedOffset=0,this.currentFrame=0,this.timer=0,this.init(h)}function f(t,i){this.canvas=t,this.canvasCtx=t.getContext("2d"),this.spritePos=i,this.xPos=0,this.yPos=0,this.groundYPos=0,this.currentFrame=0,this.currentAnimFrames=[],this.blinkDelay=0,this.blinkCount=0,this.animStartTime=0,this.timer=0,this.msPerFrame=1e3/s,this.config=f.config,this.status=f.status.WAITING,this.jumping=!1,this.ducking=!1,this.jumpVelocity=0,this.reachedMinHeight=!1,this.speedDrop=!1,this.jumpCount=0,this.jumpspotX=0,this.init()}function I(i,s,e){this.canvas=i,this.canvasCtx=i.getContext("2d"),this.image=t.imageSprite,this.spritePos=s,this.x=0,this.y=5,this.currentDistance=0,this.maxScore=0,this.highScore=0,this.container=null,this.digits=[],this.achievement=!1,this.defaultString="",this.flashTimer=0,this.flashIterations=0,this.invertTrigger=!1,this.config=I.config,this.maxScoreUnits=this.config.MAX_DISTANCE_UNITS,this.init(e)}function E(t,i,s){this.canvas=t,this.canvasCtx=this.canvas.getContext("2d"),this.spritePos=i,this.containerWidth=s,this.xPos=s,this.yPos=0,this.remove=!1,this.cloudGap=o(E.config.MIN_CLOUD_GAP,E.config.MAX_CLOUD_GAP),this.init()}function g(t,i){this.spritePos=i,this.canvas=t,this.canvasCtx=t.getContext("2d"),this.sourceDimensions={},this.dimensions=g.dimensions,this.sourceXPos=[this.spritePos.x,this.spritePos.x+this.dimensions.WIDTH],this.xPos=[],this.yPos=0,this.bumpThreshold=.5,this.setSourceDimensions(),this.draw()}function C(t,i,s,e,n){this.canvas=t,this.canvasCtx=this.canvas.getContext("2d"),this.config=C.config,this.dimensions=s,this.gapCoefficient=e,this.obstacles=[],this.obstacleHistory=[],this.horizonOffsets=[0,0],this.cloudFrequency=this.config.CLOUD_FREQUENCY,this.spritePos=i,this.obstacleCount=0,this.obstacleLength=n,this.jokes=[{type:0,text:"Жаман Шутка бір"},{type:1,text:"Жақсы Шутка екі"},{type:0,text:"Жаман Шутка үш"},{type:0,text:"Жаман Шутка төрт"},{type:1,text:"Жақсы Шутка бес"},{type:0,text:"Жаман Шутка алты"},{type:0,text:"Жаман Шутка жеті"},{type:1,text:"Жақсы Шутка сегіз"},{type:0,text:"Жаман Шутка тоғыз"},{type:1,text:"Жақсы Шутка он"},{type:0,text:"Жаман Шутка он бір"},{type:0,text:"Жаман Шутка он екі"},{type:1,text:"Жақсы Шутка он үш"},{type:0,text:"Жаман Шутка он төрт"},{type:1,text:"Жақсы Шутка он бес"},{type:1,text:"Жақсы Шутка он алты"},{type:0,text:"Жаман Шутка он жеті"},{type:0,text:"Жаман Шутка он сегіз"}],this.jokeIndex=0,this.clouds=[],this.cloudSpeed=this.config.BG_CLOUD_SPEED,this.horizonLine=null,this.init()}t.config={ACCELERATION:.001,BG_CLOUD_SPEED:.2,BOTTOM_PAD:10,CLEAR_TIME:3e3,CLOUD_FREQUENCY:.5,GAMEOVER_CLEAR_TIME:750,GAP_COEFFICIENT:.6,GRAVITY:.6,INITIAL_JUMP_VELOCITY:12,INVERT_FADE_DURATION:12e3,INVERT_DISTANCE:700,MAX_BLINK_COUNT:3,MAX_CLOUDS:6,MAX_OBSTACLE_LENGTH:1,MAX_OBSTACLE_DUPLICATION:2,MAX_SPEED:13,MIN_JUMP_HEIGHT:35,MOBILE_SPEED_COEFFICIENT:1.2,RESOURCE_TEMPLATE_ID:"audio-resources",SPEED:6,SPEED_DROP_COEFFICIENT:3,ARCADE_MODE_INITIAL_TOP_POSITION:35,ARCADE_MODE_TOP_POSITION_PERCENT:.1},t.defaultDimensions={WIDTH:i,HEIGHT:150},t.classes={ARCADE_MODE:"arcade-mode",CANVAS:"runner-canvas",CONTAINER:"runner-container",CRASHED:"crashed",ICON:"icon-offline",INVERTED:"inverted",SNACKBAR:"snackbar",SNACKBAR_SHOW:"snackbar-show",TOUCH_CONTROLLER:"controller"},t.spriteDefinition={LDPI:{CACTUS_LARGE:{x:332,y:2},CACTUS_SMALL:{x:228,y:2},CLOUD:{x:86,y:2},HORIZON:{x:2,y:54},MOON:{x:484,y:2},PTERODACTYL:{x:134,y:2},RESTART:{x:2,y:2},TEXT_SPRITE:{x:655,y:2},TREX:{x:848,y:2},STAR:{x:645,y:2}},HDPI:{CACTUS_LARGE:{x:652,y:2},CACTUS_SMALL:{x:446,y:2},CLOUD:{x:166,y:2},HORIZON:{x:2,y:104},MOON:{x:954,y:2},PTERODACTYL:{x:260,y:2},RESTART:{x:2,y:2},TEXT_SPRITE:{x:1294,y:2},TREX:{x:1678,y:2},STAR:{x:1276,y:2}}},t.sounds={BUTTON_PRESS:"offline-sound-press",HIT:"offline-sound-hit",SCORE:"offline-sound-reached"},t.keycodes={JUMP:{38:1,32:1},DUCK:{40:1},RESTART:{13:1}},t.events={ANIM_END:"webkitAnimationEnd",CLICK:"click",KEYDOWN:"keydown",KEYUP:"keyup",POINTERDOWN:"pointerdown",POINTERUP:"pointerup",RESIZE:"resize",TOUCHEND:"touchend",TOUCHSTART:"touchstart",VISIBILITY:"visibilitychange",BLUR:"blur",FOCUS:"focus",LOAD:"load"},t.prototype={isDisabled:function(){return"undefined"!=typeof loadTimeData&&loadTimeData.valueExists("disabledEasterEgg")},setupDisabledRunner:function(){this.containerEl=document.createElement("div"),this.containerEl.className=t.classes.SNACKBAR,this.containerEl.textContent=loadTimeData.getValue("disabledEasterEgg"),this.outerContainerEl.appendChild(this.containerEl),document.addEventListener(t.events.KEYDOWN,function(i){t.keycodes.JUMP[i.keyCode]&&(this.containerEl.classList.add(t.classes.SNACKBAR_SHOW),document.querySelector(".icon").classList.add("icon-disabled"))}.bind(this))},updateConfigSetting:function(t,i){if(t in this.config&&null!=i)switch(this.config[t]=i,t){case"GRAVITY":case"MIN_JUMP_HEIGHT":case"SPEED_DROP_COEFFICIENT":this.tRex.config[t]=i;break;case"INITIAL_JUMP_VELOCITY":this.tRex.setJumpVelocity(i);break;case"SPEED":this.setSpeed(i)}},loadImages:function(){e?(t.imageSprite=document.getElementById("offline-resources-2x"),this.spriteDef=t.spriteDefinition.HDPI):(t.imageSprite=document.getElementById("offline-resources-1x"),this.spriteDef=t.spriteDefinition.LDPI),t.imageSprite.complete?this.init():t.imageSprite.addEventListener(t.events.LOAD,this.init.bind(this))},loadSounds:function(){if(!n){this.audioContext=new AudioContext;var i=document.getElementById(this.config.RESOURCE_TEMPLATE_ID).content;for(var s in t.sounds){var e=i.getElementById(t.sounds[s]).src,h=r(e=e.substr(e.indexOf(",")+1));this.audioContext.decodeAudioData(h,function(t,i){this.soundFx[t]=i}.bind(this,s))}}},setSpeed:function(t){var s=t||this.currentSpeed;if(this.dimensions.WIDTH<i){var e=s*this.dimensions.WIDTH/i*this.config.MOBILE_SPEED_COEFFICIENT;this.currentSpeed=e>s?s:e}else t&&(this.currentSpeed=t)},init:function(){var i,s,e,n,o;document.querySelector("."+t.classes.ICON).style.visibility="hidden",this.adjustDimensions(),this.setSpeed(),this.containerEl=document.createElement("div"),this.containerEl.className=t.classes.CONTAINER,this.canvas=(i=this.containerEl,s=this.dimensions.WIDTH,e=this.dimensions.HEIGHT,n=t.classes.PLAYER,(o=document.createElement("canvas")).className=n?t.classes.CANVAS+" "+n:t.classes.CANVAS,o.width=s,o.height=e,i.appendChild(o),o),this.canvasCtx=this.canvas.getContext("2d"),this.canvasCtx.fillStyle="#f7f7f7",this.canvasCtx.fill(),t.updateCanvasScaling(this.canvas),this.horizon=new C(this.canvas,this.spriteDef,this.dimensions,this.config.GAP_COEFFICIENT,this.obstacleLength),this.distanceMeter=new I(this.canvas,this.spriteDef.TEXT_SPRITE,this.dimensions.WIDTH),this.tRex=new f(this.canvas,this.spriteDef.TREX),this.outerContainerEl.appendChild(this.containerEl),h&&this.createTouchController(),this.startListening(),this.update(),window.addEventListener(t.events.RESIZE,this.debounceResize.bind(this))},createTouchController:function(){this.touchController=document.createElement("div"),this.touchController.className=t.classes.TOUCH_CONTROLLER},debounceResize:function(){this.resizeTimerId_||(this.resizeTimerId_=setInterval(this.adjustDimensions.bind(this),250))},adjustDimensions:function(){clearInterval(this.resizeTimerId_),this.resizeTimerId_=null;var s=window.getComputedStyle(this.outerContainerEl),e=Number(s.paddingLeft.substr(0,s.paddingLeft.length-2));this.dimensions.WIDTH=this.outerContainerEl.offsetWidth-2*e,this.isArcadeMode()&&(this.dimensions.WIDTH=Math.min(i,this.dimensions.WIDTH),this.activated&&this.setArcadeModeContainerScale()),this.canvas&&(this.canvas.width=this.dimensions.WIDTH,this.canvas.height=this.dimensions.HEIGHT,t.updateCanvasScaling(this.canvas),this.distanceMeter.calcXPos(this.dimensions.WIDTH),this.clearCanvas(),this.horizon.update(0,0,!0),this.tRex.update(0),this.playing||this.crashed||this.paused?(this.containerEl.style.width=this.dimensions.WIDTH+"px",this.containerEl.style.height=this.dimensions.HEIGHT+"px",this.distanceMeter.update(0,Math.ceil(this.distanceRan)),this.stop()):this.tRex.draw(0,0),this.crashed&&this.gameOverPanel&&(this.gameOverPanel.updateDimensions(this.dimensions.WIDTH),this.gameOverPanel.draw()))},playIntro:function(){if(this.activated||this.crashed)this.crashed&&this.restart();else{this.playingIntro=!0,this.tRex.playingIntro=!0;var i="@-webkit-keyframes intro { from { width:"+f.config.WIDTH+"px }to { width: "+this.dimensions.WIDTH+"px }}";document.styleSheets[0].insertRule(i,0),this.containerEl.addEventListener(t.events.ANIM_END,this.startGame.bind(this)),this.containerEl.style.webkitAnimation="intro .4s ease-out 1 both",this.containerEl.style.width=this.dimensions.WIDTH+"px",this.touchController&&this.outerContainerEl.appendChild(this.touchController),this.playing=!0,this.activated=!0}},startGame:function(){this.isArcadeMode()&&this.setArcadeMode(),this.runningTime=0,this.playingIntro=!1,this.tRex.playingIntro=!1,this.containerEl.style.webkitAnimation="",this.playCount++,document.addEventListener(t.events.VISIBILITY,this.onVisibilityChange.bind(this)),window.addEventListener(t.events.BLUR,this.onVisibilityChange.bind(this)),window.addEventListener(t.events.FOCUS,this.onVisibilityChange.bind(this))},clearCanvas:function(){this.canvasCtx.clearRect(0,0,this.dimensions.WIDTH,this.dimensions.HEIGHT)},update:function(){this.updatePending=!1;var i=c(),s=i-(this.time||i);if(this.time=i,this.playing){this.clearCanvas(),this.tRex.jumping&&this.tRex.updateJump(s),this.runningTime+=s;var e=this.runningTime>this.config.CLEAR_TIME;1!=this.tRex.jumpCount||this.playingIntro||this.playIntro(),this.playingIntro?this.horizon.update(0,this.currentSpeed,e):(s=this.activated?s:0,this.horizon.update(s,this.currentSpeed,e,this.inverted));var n=e&&function(i,s,e){t.defaultDimensions.WIDTH,i.xPos;var n=new T(s.xPos+1,s.yPos+1,s.config.WIDTH-2,s.config.HEIGHT-2),h=new T(i.xPos+1,i.yPos+1,i.typeConfig.width*i.size-2,i.typeConfig.height-2);e&&l(e,n,h);if(m(n,h))for(var o=i.collisionBoxes,a=s.ducking?f.collisionBoxes.DUCKING:f.collisionBoxes.RUNNING,r=0;r<a.length;r++)for(var c=0;c<o.length;c++){var d=u(a[r],n),p=u(o[c],h),I=m(d,p);if(e&&l(e,d,p),I)return[d,p]}return!1}(this.horizon.obstacles[0],this.tRex);!n&&this.immortal&&(this.immortal=!1),!n||this.immortal?(this.distanceRan+=this.currentSpeed*s/this.msPerFrame,this.currentSpeed<this.config.MAX_SPEED&&(this.currentSpeed+=this.config.ACCELERATION)):this.horizon.obstacles[0].typeConfig.isBad?this.lives>1?(this.lives--,this.immortal=!0,this.looseLife()):(this.lives=0,this.gameOver()):(this.score++,this.immortal=!0,this.playSound(this.soundFx.SCORE),this.horizon.obstacles[0].remove=!0),this.canvasCtx.fillStyle="tomato",this.canvasCtx.font="30px Arial",this.canvasCtx.fillText(this.lives,this.dimensions.WIDTH-70,40),this.canvasCtx.font="15px Arial",this.canvasCtx.fillText("Score:"+this.score,this.dimensions.WIDTH-160,35),function(t,i,s,e,n){t.save(),t.beginPath();var h=.3*n;t.moveTo(i,s+h),t.bezierCurveTo(i,s,i-e/2,s,i-e/2,s+h),t.bezierCurveTo(i-e/2,s+(n+h)/2,i,s+(n+h)/2,i,s+n),t.bezierCurveTo(i,s+(n+h)/2,i+e/2,s+(n+h)/2,i+e/2,s+h),t.bezierCurveTo(i+e/2,s,i,s,i,s+h),t.closePath(),t.fillStyle="red",t.fill(),t.restore()}(this.canvasCtx,this.dimensions.WIDTH-85,20,20,20)}(this.playing||!this.activated&&this.tRex.blinkCount<t.config.MAX_BLINK_COUNT)&&(this.tRex.update(s),this.scheduleNextUpdate())},handleEvent:function(i){return function(t,s){switch(t){case s.KEYDOWN:case s.TOUCHSTART:case s.POINTERDOWN:this.onKeyDown(i);break;case s.KEYUP:case s.TOUCHEND:case s.POINTERUP:this.onKeyUp(i)}}.bind(this)(i.type,t.events)},startListening:function(){document.addEventListener(t.events.KEYDOWN,this),document.addEventListener(t.events.KEYUP,this),this.touchController&&(this.touchController.addEventListener(t.events.TOUCHSTART,this),this.touchController.addEventListener(t.events.TOUCHEND,this),this.containerEl.addEventListener(t.events.TOUCHSTART,this)),document.addEventListener(t.events.POINTERDOWN,this),document.addEventListener(t.events.POINTERUP,this)},stopListening:function(){document.removeEventListener(t.events.KEYDOWN,this),document.removeEventListener(t.events.KEYUP,this),this.touchController&&(this.touchController.removeEventListener(t.events.TOUCHSTART,this),this.touchController.removeEventListener(t.events.TOUCHEND,this),this.containerEl.removeEventListener(t.events.TOUCHSTART,this)),document.removeEventListener(t.events.POINTERDOWN,this),document.removeEventListener(t.events.POINTERUP,this)},onKeyDown:function(i){h&&this.playing&&i.preventDefault(),this.crashed||this.paused?this.crashed&&i.type==t.events.TOUCHSTART&&i.currentTarget==this.containerEl&&this.restart():t.keycodes.JUMP[i.keyCode]||i.type==t.events.TOUCHSTART?(i.preventDefault(),this.playing||(this.loadSounds(),this.playing=!0,this.update(),window.errorPageController&&errorPageController.trackEasterEgg()),this.tRex.jumping||this.tRex.ducking||(this.playSound(this.soundFx.BUTTON_PRESS),this.tRex.startJump(this.currentSpeed))):this.playing&&t.keycodes.DUCK[i.keyCode]&&(i.preventDefault(),this.tRex.jumping?this.tRex.setSpeedDrop():this.tRex.jumping||this.tRex.ducking||this.tRex.setDuck(!0))},onKeyUp:function(i){var s=String(i.keyCode),e=t.keycodes.JUMP[s]||i.type==t.events.TOUCHEND||i.type==t.events.POINTERUP;if(this.isRunning()&&e)this.tRex.endJump();else if(t.keycodes.DUCK[s])this.tRex.speedDrop=!1,this.tRex.setDuck(!1);else if(this.crashed){var n=c()-this.time;(t.keycodes.RESTART[s]||this.isLeftClickOnCanvas(i)||n>=this.config.GAMEOVER_CLEAR_TIME&&t.keycodes.JUMP[s])&&this.restart()}else this.paused&&e&&(this.tRex.reset(),this.play())},isLeftClickOnCanvas:function(i){return null!=i.button&&i.button<2&&i.type==t.events.POINTERUP&&i.target==this.canvas},scheduleNextUpdate:function(){this.updatePending||(this.updatePending=!0,this.raqId=requestAnimationFrame(this.update.bind(this)))},isRunning:function(){return!!this.raqId},youWin:function(){this.isRunning()?document.getElementById("gta_music").play():this.restart(),this.stop(),this.distanceMeter.acheivement=!1,this.canvasCtx.fillStyle="green",this.canvasCtx.font="40px Arial",this.canvasCtx.fillText("Your score:"+this.score,this.dimensions.WIDTH/2,this.dimensions.HEIGHT/2),this.time=c()},looseLife:function(){this.playSound(this.soundFx.HIT),a(200)},gameOver:function(){this.playSound(this.soundFx.HIT),a(200),this.stop(),this.crashed=!0,this.distanceMeter.achievement=!1,this.tRex.update(100,f.status.CRASHED),this.gameOverPanel?this.gameOverPanel.draw():this.gameOverPanel=new d(this.canvas,this.spriteDef.TEXT_SPRITE,this.spriteDef.RESTART,this.dimensions),this.distanceRan>this.highestScore&&(this.highestScore=Math.ceil(this.distanceRan),this.distanceMeter.setHighScore(this.highestScore)),this.time=c()},stop:function(){this.playing=!1,this.paused=!0,cancelAnimationFrame(this.raqId),this.raqId=0},play:function(){this.crashed||(this.playing=!0,this.paused=!1,this.tRex.update(0,f.status.RUNNING),this.time=c(),this.update())},restart:function(){this.raqId||(this.playCount++,this.runningTime=0,this.playing=!0,this.paused=!1,this.crashed=!1,this.distanceRan=0,this.initialLive=3,this.lives=this.initialLive,this.setSpeed(this.config.SPEED),this.time=c(),this.containerEl.classList.remove(t.classes.CRASHED),this.clearCanvas(),this.distanceMeter.reset(this.highestScore),this.horizon.reset(),this.tRex.reset(),this.playSound(this.soundFx.BUTTON_PRESS),this.invert(!0),this.update())},isArcadeMode:function(){return"chrome://dino/"==document.title},setArcadeMode:function(){document.body.classList.add(t.classes.ARCADE_MODE),this.setArcadeModeContainerScale()},setArcadeModeContainerScale:function(){var i=window.innerHeight,s=i/this.dimensions.HEIGHT,e=window.innerWidth/this.dimensions.WIDTH,n=Math.max(1,Math.min(s,e)),h=this.dimensions.HEIGHT*n,o=Math.ceil(Math.max(0,(i-h-t.config.ARCADE_MODE_INITIAL_TOP_POSITION)*t.config.ARCADE_MODE_TOP_POSITION_PERCENT))*window.devicePixelRatio;this.containerEl.style.transform="scale("+n+") translateY("+o+"px)"},onVisibilityChange:function(t){document.hidden||document.webkitHidden||"blur"==t.type||"visible"!=document.visibilityState?this.stop():this.crashed||(this.tRex.reset(),this.play())},playSound:function(t){if(t){var i=this.audioContext.createBufferSource();i.buffer=t,i.connect(this.audioContext.destination),i.start(0)}},invert:function(i){i?(document.body.classList.toggle(t.classes.INVERTED,!1),this.invertTimer=0,this.inverted=!1):this.inverted=document.body.classList.toggle(t.classes.INVERTED,this.invertTrigger)}},t.updateCanvasScaling=function(t,i,s){var e=t.getContext("2d"),n=Math.floor(window.devicePixelRatio)||1,h=Math.floor(e.webkitBackingStorePixelRatio)||1,o=n/h;if(n!==h){var a=i||t.width,r=s||t.height;return t.width=a*o,t.height=r*o,t.style.width=a+"px",t.style.height=r+"px",e.scale(o,o),!0}return 1==n&&(t.style.width=t.width+"px",t.style.height=t.height+"px"),!1},d.dimensions={TEXT_X:0,TEXT_Y:13,TEXT_WIDTH:191,TEXT_HEIGHT:11,RESTART_WIDTH:36,RESTART_HEIGHT:32},d.prototype={updateDimensions:function(t,i){this.canvasDimensions.WIDTH=t,i&&(this.canvasDimensions.HEIGHT=i)},draw:function(){var i=d.dimensions,s=this.canvasDimensions.WIDTH/2,n=i.TEXT_X,h=i.TEXT_Y,o=i.TEXT_WIDTH,a=i.TEXT_HEIGHT,r=Math.round(s-i.TEXT_WIDTH/2),c=Math.round((this.canvasDimensions.HEIGHT-25)/3),u=i.TEXT_WIDTH,l=i.TEXT_HEIGHT,m=i.RESTART_WIDTH,T=i.RESTART_HEIGHT,p=s-i.RESTART_WIDTH/2,f=this.canvasDimensions.HEIGHT/2;e&&(h*=2,n*=2,o*=2,a*=2,m*=2,T*=2),n+=this.textImgPos.x,h+=this.textImgPos.y,this.canvasCtx.drawImage(t.imageSprite,n,h,o,a,r,c,u,l),this.canvasCtx.drawImage(t.imageSprite,this.restartImgPos.x,this.restartImgPos.y,m,T,p,f,i.RESTART_WIDTH,i.RESTART_HEIGHT)}},p.MAX_GAP_COEFFICIENT=1.5,p.MAX_OBSTACLE_LENGTH=1,p.prototype={init:function(t){if(this.cloneCollisionBoxes(),this.size>1&&this.typeConfig.multipleSpeed>t&&(this.size=1),this.width=this.typeConfig.width*this.size,Array.isArray(this.typeConfig.yPos)){var i=h?this.typeConfig.yPosMobile:this.typeConfig.yPos;this.yPos=i[o(0,i.length-1)]}else this.yPos=this.typeConfig.yPos;this.draw(),this.size>1&&(this.collisionBoxes[1].width=this.width-this.collisionBoxes[0].width-this.collisionBoxes[2].width,this.collisionBoxes[2].x=this.width-this.collisionBoxes[2].width),this.typeConfig.speedOffset&&(this.speedOffset=Math.random()>.5?this.typeConfig.speedOffset:-this.typeConfig.speedOffset),this.gap=this.getGap(this.gapCoefficient,t)},draw:function(){var i=this.typeConfig.width,s=this.typeConfig.height;e&&(i*=2,s*=2);var n=i*this.size*(.5*(this.size-1))+this.spritePos.x;this.currentFrame>0&&(n+=i*this.currentFrame),this.canvasCtx.drawImage(t.imageSprite,n,this.spritePos.y,i*this.size,s,this.xPos,this.yPos,this.typeConfig.width*this.size,this.typeConfig.height)},update:function(t,i){this.remove||(this.typeConfig.speedOffset&&(i+=this.speedOffset),this.xPos-=Math.floor(i*s/1e3*t),this.typeConfig.numFrames&&(this.timer+=t,this.timer>=this.typeConfig.frameRate&&(this.currentFrame=this.currentFrame==this.typeConfig.numFrames-1?0:this.currentFrame+1,this.timer=0)),this.draw(),this.isVisible()||(this.remove=!0))},getGap:function(t,i){var s=Math.round(this.width*i+this.typeConfig.minGap*t);return o(s,Math.round(s*p.MAX_GAP_COEFFICIENT))},isVisible:function(){return this.xPos+this.width>0},cloneCollisionBoxes:function(){for(var t=this.typeConfig.collisionBoxes,i=t.length-1;i>=0;i--)this.collisionBoxes[i]=new T(t[i].x,t[i].y,t[i].width,t[i].height)}},p.types=[{type:"CACTUS_LARGE",isBad:!0,width:25,height:50,yPos:[90,60],multipleSpeed:7,minGap:120,minSpeed:0,collisionBoxes:[new T(0,12,7,38),new T(8,0,7,49),new T(13,10,10,38)]},{type:"PTERODACTYL",isBad:!1,width:46,height:40,yPos:[100,75,50],yPosMobile:[100,50],multipleSpeed:7,minSpeed:0,minGap:150,collisionBoxes:[new T(15,15,16,5),new T(18,21,24,6),new T(2,14,4,3),new T(6,10,4,7),new T(10,8,6,9)]}],f.config={DROP_VELOCITY:-5,GRAVITY:.6,HEIGHT:47,HEIGHT_DUCK:25,INIITAL_JUMP_VELOCITY:-10,INTRO_DURATION:1500,MAX_JUMP_HEIGHT:30,MIN_JUMP_HEIGHT:30,SPEED_DROP_COEFFICIENT:3,SPRITE_WIDTH:262,START_X_POS:50,WIDTH:44,WIDTH_DUCK:59},f.collisionBoxes={DUCKING:[new T(1,18,55,25)],RUNNING:[new T(22,0,17,16),new T(1,18,30,9),new T(10,35,14,8),new T(1,24,29,5),new T(5,30,21,4),new T(9,34,15,4)]},f.status={CRASHED:"CRASHED",DUCKING:"DUCKING",JUMPING:"JUMPING",RUNNING:"RUNNING",WAITING:"WAITING"},f.BLINK_TIMING=7e3,f.animFrames={WAITING:{frames:[44,0],msPerFrame:1e3/3},RUNNING:{frames:[88,132],msPerFrame:1e3/12},CRASHED:{frames:[220],msPerFrame:1e3/60},JUMPING:{frames:[0],msPerFrame:1e3/60},DUCKING:{frames:[262,321],msPerFrame:125}},f.prototype={init:function(){this.groundYPos=t.defaultDimensions.HEIGHT-this.config.HEIGHT-t.config.BOTTOM_PAD,this.yPos=this.groundYPos,this.minJumpHeight=this.groundYPos-this.config.MIN_JUMP_HEIGHT,this.draw(0,0),this.update(0,f.status.WAITING)},setJumpVelocity:function(t){this.config.INIITAL_JUMP_VELOCITY=-t,this.config.DROP_VELOCITY=-t/2},update:function(t,i){this.timer+=t,i&&(this.status=i,this.currentFrame=0,this.msPerFrame=f.animFrames[i].msPerFrame,this.currentAnimFrames=f.animFrames[i].frames,i==f.status.WAITING&&(this.animStartTime=c(),this.setBlinkDelay())),this.playingIntro&&this.xPos<this.config.START_X_POS&&(this.xPos+=Math.round(this.config.START_X_POS/this.config.INTRO_DURATION*t)),this.status==f.status.WAITING?this.blink(c()):this.draw(this.currentAnimFrames[this.currentFrame],0),this.timer>=this.msPerFrame&&(this.currentFrame=this.currentFrame==this.currentAnimFrames.length-1?0:this.currentFrame+1,this.timer=0),this.speedDrop&&this.yPos==this.groundYPos&&(this.speedDrop=!1,this.setDuck(!0))},draw:function(i,s){var n=i,h=s,o=this.ducking&&this.status!=f.status.CRASHED?this.config.WIDTH_DUCK:this.config.WIDTH,a=this.config.HEIGHT;e&&(n*=2,h*=2,o*=2,a*=2),n+=this.spritePos.x,h+=this.spritePos.y,this.ducking&&this.status!=f.status.CRASHED?this.canvasCtx.drawImage(t.imageSprite,n,h,o,a,this.xPos,this.yPos,this.config.WIDTH_DUCK,this.config.HEIGHT):(this.ducking&&this.status==f.status.CRASHED&&this.xPos++,this.canvasCtx.drawImage(t.imageSprite,n,h,o,a,this.xPos,this.yPos,this.config.WIDTH,this.config.HEIGHT))},setBlinkDelay:function(){this.blinkDelay=Math.ceil(Math.random()*f.BLINK_TIMING)},blink:function(t){t-this.animStartTime>=this.blinkDelay&&(this.draw(this.currentAnimFrames[this.currentFrame],0),1==this.currentFrame&&(this.setBlinkDelay(),this.animStartTime=t,this.blinkCount++))},startJump:function(t){this.jumping||(this.update(0,f.status.JUMPING),this.jumpVelocity=this.config.INIITAL_JUMP_VELOCITY-t/10,this.jumping=!0,this.reachedMinHeight=!1,this.speedDrop=!1)},endJump:function(){this.reachedMinHeight&&this.jumpVelocity<this.config.DROP_VELOCITY&&(this.jumpVelocity=this.config.DROP_VELOCITY)},updateJump:function(t,i){var s=t/f.animFrames[this.status].msPerFrame;this.speedDrop?this.yPos+=Math.round(this.jumpVelocity*this.config.SPEED_DROP_COEFFICIENT*s):this.yPos+=Math.round(this.jumpVelocity*s),this.jumpVelocity+=this.config.GRAVITY*s,(this.yPos<this.minJumpHeight||this.speedDrop)&&(this.reachedMinHeight=!0),(this.yPos<this.config.MAX_JUMP_HEIGHT||this.speedDrop)&&this.endJump(),this.yPos>this.groundYPos&&(this.reset(),this.jumpCount++),this.update(t)},setSpeedDrop:function(){this.speedDrop=!0,this.jumpVelocity=1},setDuck:function(t){t&&this.status!=f.status.DUCKING?(this.update(0,f.status.DUCKING),this.ducking=!0):this.status==f.status.DUCKING&&(this.update(0,f.status.RUNNING),this.ducking=!1)},reset:function(){this.yPos=this.groundYPos,this.jumpVelocity=0,this.jumping=!1,this.ducking=!1,this.update(0,f.status.RUNNING),this.midair=!1,this.speedDrop=!1,this.jumpCount=0}},I.dimensions={WIDTH:10,HEIGHT:13,DEST_WIDTH:11},I.yPos=[0,13,27,40,53,67,80,93,107,120],I.config={MAX_DISTANCE_UNITS:5,ACHIEVEMENT_DISTANCE:100,COEFFICIENT:.025,FLASH_DURATION:250,FLASH_ITERATIONS:3},I.prototype={init:function(t){var i="200";this.calcXPos(t),this.maxScore=this.maxScoreUnits;for(var s=0;s<this.maxScoreUnits;s++)this.draw(s,0),this.defaultString+="0",i+="9";this.maxScore=parseInt(i)},calcXPos:function(t){this.x=t-I.dimensions.DEST_WIDTH*(this.maxScoreUnits+1)},draw:function(t,i,s){var n=I.dimensions.WIDTH,h=I.dimensions.HEIGHT,o=I.dimensions.WIDTH*i,a=0,r=t*I.dimensions.DEST_WIDTH,c=this.y,d=I.dimensions.WIDTH,u=I.dimensions.HEIGHT;if(e&&(n*=2,h*=2,o*=2),o+=this.spritePos.x,a+=this.spritePos.y,this.canvasCtx.save(),s){var l=this.x-2*this.maxScoreUnits*I.dimensions.WIDTH;this.canvasCtx.translate(l,this.y)}else this.canvasCtx.translate(this.x,this.y);this.canvasCtx.drawImage(this.image,o,a,n,h,r,c,d,u),this.canvasCtx.restore()},getActualDistance:function(t){return t?Math.round(t*this.config.COEFFICIENT):0},update:function(t,i){var s=!0,e=!1;if(this.achievement)this.flashIterations<=this.config.FLASH_ITERATIONS?(this.flashTimer+=t,this.flashTimer<this.config.FLASH_DURATION?s=!1:this.flashTimer>2*this.config.FLASH_DURATION&&(this.flashTimer=0,this.flashIterations++)):(this.achievement=!1,this.flashIterations=0,this.flashTimer=0);else if((i=this.getActualDistance(i))>this.maxScore&&this.maxScoreUnits==this.config.MAX_DISTANCE_UNITS?(this.maxScoreUnits++,this.maxScore=parseInt(this.maxScore+"9")):this.distance=0,i>0){i%this.config.ACHIEVEMENT_DISTANCE==0&&(this.achievement=!0,this.flashTimer=0,e=!0);var n=(this.defaultString+i).substr(-this.maxScoreUnits);this.digits=n.split("")}else this.digits=this.defaultString.split("");if(s)for(var h=this.digits.length-1;h>=0;h--)this.draw(h,parseInt(this.digits[h]));return this.drawHighScore(),e},drawHighScore:function(){this.canvasCtx.save(),this.canvasCtx.globalAlpha=.8;for(var t=this.highScore.length-1;t>=0;t--)this.draw(t,parseInt(this.highScore[t],10),!0);this.canvasCtx.restore()},setHighScore:function(t){t=this.getActualDistance(t);var i=(this.defaultString+t).substr(-this.maxScoreUnits);this.highScore=["10","11",""].concat(i.split(""))},reset:function(){this.update(0),this.achievement=!1}},E.config={HEIGHT:14,MAX_CLOUD_GAP:400,MAX_SKY_LEVEL:30,MIN_CLOUD_GAP:100,MIN_SKY_LEVEL:71,WIDTH:46},E.prototype={init:function(){this.yPos=o(E.config.MAX_SKY_LEVEL,E.config.MIN_SKY_LEVEL),this.draw()},draw:function(){this.canvasCtx.save();var i=E.config.WIDTH,s=E.config.HEIGHT;e&&(i*=2,s*=2),this.canvasCtx.drawImage(t.imageSprite,this.spritePos.x,this.spritePos.y,i,s,this.xPos,this.yPos,E.config.WIDTH,E.config.HEIGHT),this.canvasCtx.restore()},update:function(t){this.remove||(this.xPos-=Math.ceil(t),this.draw(),this.isVisible()||(this.remove=!0))},isVisible:function(){return this.xPos+E.config.WIDTH>0}},g.dimensions={WIDTH:600,HEIGHT:12,YPOS:127},g.prototype={setSourceDimensions:function(){for(var t in g.dimensions)e?"YPOS"!=t&&(this.sourceDimensions[t]=2*g.dimensions[t]):this.sourceDimensions[t]=g.dimensions[t],this.dimensions[t]=g.dimensions[t];this.xPos=[0,g.dimensions.WIDTH],this.yPos=g.dimensions.YPOS},getRandomType:function(){return Math.random()>this.bumpThreshold?this.dimensions.WIDTH:0},draw:function(){this.canvasCtx.drawImage(t.imageSprite,this.sourceXPos[0],this.spritePos.y,this.sourceDimensions.WIDTH,this.sourceDimensions.HEIGHT,this.xPos[0],this.yPos,this.dimensions.WIDTH,this.dimensions.HEIGHT),this.canvasCtx.drawImage(t.imageSprite,this.sourceXPos[1],this.spritePos.y,this.sourceDimensions.WIDTH,this.sourceDimensions.HEIGHT,this.xPos[1],this.yPos,this.dimensions.WIDTH,this.dimensions.HEIGHT)},updateXPos:function(t,i){var s=t,e=0==t?1:0;this.xPos[s]-=i,this.xPos[e]=this.xPos[s]+this.dimensions.WIDTH,this.xPos[s]<=-this.dimensions.WIDTH&&(this.xPos[s]+=2*this.dimensions.WIDTH,this.xPos[e]=this.xPos[s]-this.dimensions.WIDTH,this.sourceXPos[s]=this.getRandomType()+this.spritePos.x)},update:function(t,i){var e=Math.floor(i*(s/1e3)*t);this.xPos[0]<=0?this.updateXPos(0,e):this.updateXPos(1,e),this.draw()},reset:function(){this.xPos[0]=0,this.xPos[1]=g.dimensions.WIDTH}},C.config={BG_CLOUD_SPEED:.2,BUMPY_THRESHOLD:.3,CLOUD_FREQUENCY:.5,HORIZON_HEIGHT:16,MAX_CLOUDS:6},C.prototype={init:function(){this.addCloud(),this.horizonLine=new g(this.canvas,this.spritePos.HORIZON)},update:function(t,i,s){this.runningTime+=t,this.horizonLine.update(t,i),this.updateClouds(t,i),s&&this.updateObstacles(t,i)},updateClouds:function(t,i){var s=this.cloudSpeed/1e3*t*i,e=this.clouds.length;if(e){for(var n=e-1;n>=0;n--)this.clouds[n].update(s);var h=this.clouds[e-1];e<this.config.MAX_CLOUDS&&this.dimensions.WIDTH-h.xPos>h.cloudGap&&this.cloudFrequency>Math.random()&&this.addCloud(),this.clouds=this.clouds.filter(function(t){return!t.remove})}else this.addCloud()},updateObstacles:function(t,i){this.obstacleCount>this.obstacleLength&&window.Runner().youWin();for(var s=this.obstacles.slice(0),e=0;e<this.obstacles.length;e++){var n=this.obstacles[e];n.update(t,i),n.remove&&s.shift()}if(this.obstacles=s,this.obstacles.length>0){var h=this.obstacles[this.obstacles.length-1];h&&!h.followingObstacleCreated&&h.isVisible()&&h.xPos+h.width+h.gap<this.dimensions.WIDTH&&(this.addNewObstacle(i),h.followingObstacleCreated=!0)}else this.addNewObstacle(i)},removeFirstObstacle:function(){this.obstacles.shift(),this.jokes.shift()},addNewObstacle:function(i){var s=o(0,p.types.length-1),e=p.types[s];if(this.duplicateObstacleCheck(e.type)||i<e.minSpeed)this.addNewObstacle(i);else{var n=this.spritePos[e.type];this.obstacles.push(new p(this.canvasCtx,e,n,this.dimensions,this.gapCoefficient,i,e.width)),this.obstacleHistory.unshift(e.type),this.obstacleHistory.length>1&&this.obstacleHistory.splice(t.config.MAX_OBSTACLE_DUPLICATION),this.obstacleCount++}},duplicateObstacleCheck:function(i){for(var s=0,e=0;e<this.obstacleHistory.length;e++)s=this.obstacleHistory[e]==i?s+1:0;return s>=t.config.MAX_OBSTACLE_DUPLICATION},reset:function(){this.obstacles=[],this.horizonLine.reset(),this.obstacleCount=0},resize:function(t,i){this.canvas.width=t,this.canvas.height=i},addCloud:function(){this.clouds.push(new E(this.canvas,this.spritePos.CLOUD,this.dimensions.WIDTH))}}}();
