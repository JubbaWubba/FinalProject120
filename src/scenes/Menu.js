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
      this.load.spritesheet('teleporter', './assets/Teleportalanimation.png', {frameWidth: 32, frameHeight: 32, startFrame: 0, endFrame: 7});    


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

