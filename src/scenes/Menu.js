class Menu extends Phaser.Scene {
    constructor() {
      super("menuScene");
    }
    
    preload() {
      this.load.audio('backmusic', './assets/backgroundMusic.wav'); 
      this.load.audio('gearaudio', './assets/gearcollect.wav');
      this.load.audio('fall', './assets/fall.wav');
      this.load.image('gear', './assets/gear.png');
      this.load.image('start', './assets/RoboKidTitleScreen.png');

      this.load.audio('jump', './assets/jump.wav');
      this.load.audio('teleport', './assets/teleport.wav');
  
      this.load.spritesheet('teleporter', './assets/Teleportalanimation.png', {frameWidth: 32, frameHeight: 32, startFrame: 0, endFrame: 7});    
      this.load.image('ground', './assets/monster.png');
      this.load.image('background8', './assets/RH640bg10.png');
      this.load.image('platform1', './assets/Platform84x252c.png');
      this.load.image('ground1', './assets/Platform640x200c.png');
      this.load.image('platform2', './assets/Platform252x42c.png');
      this.load.image('platform3', './assets/Platform42x252c.png');
      this.load.image('platform4', './assets/Platform88x12c.png');
      this.load.image('platform5', './assets/Platform84x252c.png');
      this.load.image('box1', './assets/Platform42x42c.png');
      this.load.image('ladder', './assets/Ladder32x32.png');
      this.load.image('box2', './assets/Platform42x84c.png');
      this.load.spritesheet('player', './assets/Robotcopy.png', {frameWidth: 32, frameHeight: 32, startFrame: 0, endFrame: 3}); 
      this.load.image('background8', './assets/RH640bg10.png');
      this.load.image('background7', './assets/RH640bg09.png');
      this.load.image('background6', './assets/RH640bg08.png');
      this.load.image('background5', './assets/RH640bg07.png');
      this.load.image('background4', './assets/RH640bg05.png');
      this.load.image('background3', './assets/RH640bg04.png');
      this.load.image('background2', './assets/RH640bg03.png');
      this.load.image('background1', './assets/RH640bg02.png');
      this.load.image('background', './assets/RH640bg01.png');


    }

    create() {
      let menuConfig = {
        fontFamily: 'Courier',
        fontSize: '28px',
        backgroundColor: '#F3B141',
        color: '#843605',
        align: 'right',
        padding: {
        top: 5,
        bottom: 5,
        },
        fixedWidth: 0
    }
    //define key
    keyLEFT = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.LEFT);
    keyR = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.R);
    this.backaudio = this.sound.add("backmusic", { loop: true, volume: .02 });
    this.backaudio.play()

    //text
    this.logo=this.add.sprite(320,240,"start")

    }

    update() {
      //Start Game
      if (Phaser.Input.Keyboard.JustDown(keyR)) {
        this.scene.start('lvl1Scene');    
      }
    }
  }

