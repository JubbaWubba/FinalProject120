class Ending extends Phaser.Scene {
    constructor() {
      super("end");
    }
    
    preload() {
    }

    create() {
      let textConfig = {
        fontFamily: 'Haettenschweiler',
        fontSize: '50px',
         //backgroundColor: '#F3B141',
         color: '#2cd1c9',
        stroke: '#eeeee4',
        align: 'right',
        padding: {
        top: 5,
        bottom: 5,
        },
      };
    
      let textConfig2 = {
        fontFamily: 'Haettenschweiler',
        fontSize: '40px',
         //backgroundColor: '#F3B141',
         color: '#a9dbd9',
        stroke: '#eeeee4',
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
    this.logo=this.add.sprite(320,240,"end")
    this.tutorialtext = this.add.text(borderUISize*7-90 + borderPadding*2.8, borderUISize + borderPadding*1.5+180, gearscore+'/12 Gears collected', textConfig);
    this.tutorialtext.setShadow(-5, 5, 'rgba(0,0,0,0.5)', 0);
    this.tutorialtext2 = this.add.text(borderUISize*7-40 + borderPadding*2.8, borderUISize + borderPadding*1.5+250,'Press R to Replay', textConfig2);
    this.tutorialtext2.setShadow(-5, 5, 'rgba(0,0,0,0.5)', 0);


    }

    update() {
      //Start Game
      if (Phaser.Input.Keyboard.JustDown(keyR)) {
        this.scene.start('lvl1Scene');
        gearscore =0;    
      }
    }
  }

