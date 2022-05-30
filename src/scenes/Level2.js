class Lvl2 extends Phaser.Scene {
    constructor() {
      super("lvl2Scene");
    }
  
    preload() {
      this.load.audio('jump', './assets/jump.wav');
      this.load.audio('teleport', './assets/teleport.wav');

      this.load.spritesheet('teleporter', './assets/TeleportalAnimation.png', {frameWidth: 32, frameHeight: 32, startFrame: 0, endFrame: 7});    
      this.load.image('ground', './assets/monster.png');
      this.load.image('platform1', './assets/Platform84x252c.png');
      this.load.image('ground1', './assets/Platform640x200c.png');
      this.load.image('platform2', './assets/Platform252x42c.png');
      this.load.image('platform3', './assets/Platform42x252c.png');
      this.load.image('platform4', './assets/Platform88x12c.png');
      this.load.image('box1', './assets/Platform42x42c.png');
      this.load.spritesheet('player', './assets/Robotcopy.png', {frameWidth: 32, frameHeight: 32, startFrame: 0, endFrame: 3});
    }
  
    create() {
      // variables and settings
      this.VELOCITY = 300;
      this.GROUND_HEIGHT = 35;
      this.AVATAR_SCALE = 1;
      this.physics.world.gravity.y = 2700;
      this.jumpvelocity =695;
      this.playerspawnx = game.config.width-600;
      this.playerspawny =game.config.height/1.5;

      // Sound 
      this.jumpaudio = this.sound.add("jump", {volume: .05 });
      this.teleportaudio = this.sound.add("teleport", {volume: .1 });

        //animations 
        this.anims.create({
          key: 'working',
          frames: this.anims.generateFrameNumbers('teleporter', { start: 0, end: 7, first: 0}),
          frameRate: 30
      }); 

        // Ground 
        this.ground = this.add.group();
        this.groundSprite = this.physics.add.sprite(320, game.config.height - 10, 'ground1');
        this.groundSprite.body.immovable = true;
        this.groundSprite.body.allowGravity = false;
        this.ground.add(this.groundSprite);
        this.groundSprite = this.physics.add.sprite(300, game.config.height - 190, 'platform2');
        this.groundSprite.body.immovable = true;
        this.groundSprite.body.allowGravity = false;
        this.ground.add(this.groundSprite);
        this.groundSprite = this.physics.add.sprite(125, game.config.height - 190, 'platform2');
        this.groundSprite.body.immovable = true;
        this.groundSprite.body.allowGravity = false;
        this.ground.add(this.groundSprite);
        this.groundSprite = this.physics.add.sprite(300, game.config.height - 270, 'platform2');
        this.groundSprite.body.immovable = true;
        this.groundSprite.body.allowGravity = false;
        this.ground.add(this.groundSprite);
        this.groundSprite = this.physics.add.sprite(540, game.config.height - 235, 'platform3');
        this.groundSprite.body.immovable = true;
        this.groundSprite.body.allowGravity = false;
        this.ground.add(this.groundSprite);
        this.groundSprite = this.physics.add.sprite(500, game.config.height - 130, 'box1');
        this.groundSprite.body.immovable = true;
        this.groundSprite.body.allowGravity = false;
        this.ground.add(this.groundSprite);
        this.groundSprite = this.physics.add.sprite(50, game.config.height - 230, 'box1');
        this.groundSprite.body.immovable = true;
        this.groundSprite.body.allowGravity = false;
        this.ground.add(this.groundSprite);
        // Player 
        this.player = this.physics.add.sprite(this.playerspawnx, this.playerspawny, 'player').setScale(this.AVATAR_SCALE);
        this.player.setCollideWorldBounds(true);
        this.player.onWorldBounds = true;
        // Cursor 
        cursors = this.input.keyboard.createCursorKeys();
  
        // Add physics collider
        this.physics.add.collider(this.player, this.ground);
      //Door
      this.exit = this.physics.add.sprite(game.config.width-30, game.config.height/1.5+35, 'teleporter').setScale(this.AVATAR_SCALE);
      this.physics.add.collider(this.exit, this.ground);
      this.exit.play({ key: 'working', repeat: 40000000000 });


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
          this.jumpaudio.play()

      }

    } else if(cursors.right.isDown) {
        this.player.body.setVelocityX(this.VELOCITY);
        if (Phaser.Input.Keyboard.JustDown(cursors.up)  && this.player.body.touching.down) {  
          this.player.setVelocityY(-this.jumpvelocity);
          this.jumpaudio.play()

      }
    }else if(this.player.body.touching.down && Phaser.Input.Keyboard.JustDown(cursors.up)) {
      // set jump velocity here
      this.player.setVelocityY(-this.jumpvelocity);
      this.jumpaudio.play()


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
      this.teleportaudio.play()
      this.scene.start('lvl3Scene');    
    }
    inZone = false;
      }
  
      playerreset() {
        this.player.y= this.playerspawny
        this.player.x =this.playerspawnx
       
    }
  
  
  
  
  
  }