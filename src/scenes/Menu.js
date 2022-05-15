class Menu extends Phaser.Scene {
    constructor() {
      super("menuScene");
    }
    
    preload() {
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
    //text



    }

    update() {
      //Start Game
      if (Phaser.Input.Keyboard.JustDown(keyLEFT)) {
        this.scene.start('lvl1Scene');    
      }
    }
  }

