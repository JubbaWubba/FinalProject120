class Lvl3 extends Phaser.Scene {
    constructor() {
      super("lvl3Scene");
    }

    preload() {
      this.load.image('ground', './assets/monster.png');
      this.load.image('platform1', './assets/platform1.png');
      this.load.image('ground1', './assets/ground1.png');
      this.load.image('platform2', './assets/platform2.png');
      this.load.image('platform3', './assets/platform3.png');
      this.load.image('platform4', './assets/platform4.png');
      this.load.image('box1', './assets/box1.png');
      this.load.spritesheet('player', './assets/Bug01.png', {frameWidth: 32, frameHeight: 32, startFrame: 0, endFrame: 3});
    }

    create() {
      // variables and settings
      this.VELOCITY = 500;
      this.GROUND_HEIGHT = 35;
      this.AVATAR_SCALE = 1;
      this.physics.world.gravity.y = 3000;
      this.jumpvelocity =690
      this.playerspawnx =game.config.width-600;
      this.playerspawny = game.config.height/2;



        // Ground 
        this.ground = this.add.group();
        this.groundSprite = this.physics.add.sprite(320, game.config.height - 10, 'ground1');
        this.groundSprite.body.immovable = true;
        this.groundSprite.body.allowGravity = false;
        this.ground.add(this.groundSprite);
        this.groundSprite = this.physics.add.sprite(300, game.config.height - 135, 'platform4');
        this.groundSprite.body.immovable = true;
        this.groundSprite.body.allowGravity = false;
        this.ground.add(this.groundSprite);
        this.groundSprite = this.physics.add.sprite(540, game.config.height - 390, 'platform4');
        this.groundSprite.body.immovable = true;
        this.groundSprite.body.allowGravity = false;
        this.ground.add(this.groundSprite);
        this.groundSprite = this.physics.add.sprite(100, game.config.height - 300, 'platform4');
        this.groundSprite.body.immovable = true;
        this.groundSprite.body.allowGravity = false;
        this.ground.add(this.groundSprite);
        this.groundSprite = this.physics.add.sprite(150, game.config.height - 200, 'platform4');
        this.groundSprite.body.immovable = true;
        this.groundSprite.body.allowGravity = false;
        this.ground.add(this.groundSprite);
        this.groundSprite = this.physics.add.sprite(350, game.config.height - 240, 'platform4');
        this.groundSprite.body.immovable = true;
        this.groundSprite.body.allowGravity = false;
        this.ground.add(this.groundSprite);
        this.groundSprite = this.physics.add.sprite(500, game.config.height - 185, 'platform4');
        this.groundSprite.body.immovable = true;
        this.groundSprite.body.allowGravity = false;
        this.ground.add(this.groundSprite);
        this.groundSprite = this.physics.add.sprite(550, game.config.height - 290, 'platform4');
        this.groundSprite.body.immovable = true;
        this.groundSprite.body.allowGravity = false;
        this.ground.add(this.groundSprite);
        this.groundSprite = this.physics.add.sprite(310, game.config.height - 315, 'platform4');
        this.groundSprite.body.immovable = true;
        this.groundSprite.body.allowGravity = false;
        this.ground.add(this.groundSprite);
        this.groundSprite = this.physics.add.sprite(150, game.config.height - 350, 'platform4');
        this.groundSprite.body.immovable = true;
        this.groundSprite.body.allowGravity = false;
        this.ground.add(this.groundSprite);
        this.groundSprite = this.physics.add.sprite(340, game.config.height - 380, 'platform4');
        this.groundSprite.body.immovable = true;
        this.groundSprite.body.allowGravity = false;
        this.ground.add(this.groundSprite);

        this.player = this.physics.add.sprite(game.config.width-600, game.config.height/2, 'player').setScale(this.AVATAR_SCALE);
        this.player.setCollideWorldBounds(true);
        this.player.onWorldBounds = true;
        // Cursor 
        cursors = this.input.keyboard.createCursorKeys();

        // Add physics collider
        this.physics.add.collider(this.player, this.ground);

      //Door
      this.exit = this.physics.add.sprite(game.config.width-80, game.config.height-410, 'player').setScale(this.AVATAR_SCALE);
      this.physics.add.collider(this.exit, this.ground);

      // Exit Check
      this.physics.add.overlap(this.player, this.exit, function () {
          inZone =true;
        })
    }
    update() {
      if(cursors.left.isDown) {
        this.player.body.setVelocityX(-this.VELOCITY);
        if (Phaser.Input.Keyboard.JustDown(cursors.up)  && this.player.body.touching.down) {  
          this.player.setVelocityY(-this.jumpvelocity);
      }

    } else if(cursors.right.isDown) {
        this.player.body.setVelocityX(this.VELOCITY);
        if (Phaser.Input.Keyboard.JustDown(cursors.up)  && this.player.body.touching.down) {  
          this.player.setVelocityY(-this.jumpvelocity);
      }
    }else if(this.player.body.touching.down && Phaser.Input.Keyboard.JustDown(cursors.up)) {
      // set jump velocity here
      this.player.setVelocityY(-this.jumpvelocity);

    } else if (!cursors.right.isDown && !cursors.left.isDown) {
        this.player.body.setVelocityX(0);
   }
   //this.physics.world.wrap(this.player, 0);
     //Reset
     if (this.player.y == 464) // bottom of screen
     this.playerreset();
  
     //this.physics.world.wrap(this.player, 0);
  
  
     //If at exit Start next Scene
     if (inZone) {
      this.scene.start('lvl4Scene');    
    }
    inZone = false;
      }
  
      playerreset() {
        this.player.y= this.playerspawny
        this.player.x =this.playerspawnx
       
    }




  
  }