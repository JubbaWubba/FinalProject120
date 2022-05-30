class Menu extends Phaser.Scene {
    constructor() {
      super("menuScene");
    }
    
    preload() {
      this.load.audio('backmusic', './assets/backgroundMusic.wav'); 
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
    this.add.text(game.config.width/2, game.config.height/2, 'Press Left Arrow to Begin', menuConfig).setOrigin(0.5);

    }

    update() {
      //Start Game
      if (Phaser.Input.Keyboard.JustDown(keyLEFT)) {
        this.scene.start('lvl8Scene');    
      }
    }
  }

