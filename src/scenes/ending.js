class Ending extends Phaser.Scene {
    constructor() {
      super("end");
    }
    
    preload() {
    }

    create() {
      let textConfig = {
        fontFamily: 'Haettenschweiler',
        fontSize: '20px',
         //backgroundColor: '#F3B141',
         color: '#e5e1e1',
        stroke: '#000000',
        align: 'right',
        padding: {
        top: 5,
        bottom: 5,
        },
      };
    //define key
    keyLEFT = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.LEFT);
    keyR = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.R);


    //text
    this.logo=this.add.sprite(320,240,"start")
    this.tutorialtext = this.add.text(borderUISize*-0.5 + borderPadding*2.8, borderUISize + borderPadding*1.5, gearscore+'/12 Gears collected', textConfig);

    }

    update() {
      //Start Game
      if (Phaser.Input.Keyboard.JustDown(keyR)) {
        this.scene.start('lvl1Scene');
        gearscore =0;    
      }
    }
  }

