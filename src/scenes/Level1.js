class Lvl1 extends Phaser.Scene {
    constructor() {
      super("lvl1Scene");
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
      this.physics.world.gravity.y = 3000;
      this.jumpvelocity =690
      
      // Sound 
      this.jumpaudio = this.sound.add("jump", {volume: .05 });
      this.teleportaudio = this.sound.add("teleport", {volume: .5 });

        //animations 
        this.anims.create({
          key: 'working',
          frames: this.anims.generateFrameNumbers('teleporter', { start: 0, end: 7, first: 0}),
          frameRate: 30
      }); 

        // Ground 
        this.ground = this.add.group();
        this.groundSprite = this.physics.add.sprite(-250, game.config.height - this.GROUND_HEIGHT+35, 'ground1');
        this.groundSprite.body.immovable = true;
        this.groundSprite.body.allowGravity = false;
        this.ground.add(this.groundSprite);
        this.groundSprite = this.physics.add.sprite(0+180, 540 - this.GROUND_HEIGHT, 'platform1');
        this.groundSprite.body.immovable = true;
        this.groundSprite.body.allowGravity = false;
        this.ground.add(this.groundSprite);
        this.groundSprite = this.physics.add.sprite(0+330, 540 - this.GROUND_HEIGHT, 'platform1');
        this.groundSprite.body.immovable = true;
        this.groundSprite.body.allowGravity = false;
        this.ground.add(this.groundSprite);
        this.groundSprite = this.physics.add.sprite(0+480, 540 - this.GROUND_HEIGHT, 'platform1');
        this.groundSprite.body.immovable = true;
        this.groundSprite.body.allowGravity = false;
        this.ground.add(this.groundSprite);
        this.groundSprite = this.physics.add.sprite(0+890, game.config.height - this.GROUND_HEIGHT+35, 'ground1');
        this.groundSprite.body.immovable = true;
        this.groundSprite.body.allowGravity = false;
        this.ground.add(this.groundSprite);

        // Player 
        this.player = this.physics.add.sprite(game.config.width-600, game.config.height/2 +125, 'player').setScale(this.AVATAR_SCALE);
        this.player.setCollideWorldBounds(true);
        this.player.onWorldBounds = true;




        // Cursor 
        cursors = this.input.keyboard.createCursorKeys();

        // Add physics collider
        this.physics.add.collider(this.player, this.ground);

      //Door
      this.exit = this.physics.add.sprite(game.config.width-30, game.config.height/2 +120, 'teleporter').setScale(this.AVATAR_SCALE);
      this.physics.add.collider(this.exit, this.ground);
      this.exit.play({ key: 'working', repeat: 40000000000 });


      this.physics.add.overlap(this.player, this.exit, function () {
        inZone =true;
      });


      
    }
    update() {
      if(cursors.left.isDown) {
        this.player.body.setVelocityX(-this.VELOCITY);
        if (Phaser.Input.Keyboard.JustDown(cursors.up)  && this.player.body.touching.down) {  
          this.jumpaudio.play()
          this.player.setVelocityY(-this.jumpvelocity);
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
   //Reset
   if (this.player.y == 464) // bottom of screen
   this.playerreset();

   //this.physics.world.wrap(this.player, 0);


   //If at exit Start next
   if (inZone) {
    this.teleportaudio.play()
    this.scene.start('lvl2Scene');    
  }
  inZone = false;
    }

    playerreset() {
       this.player.y= (game.config.height/2 +125)
      this.player.x =game.config.width-600
     
    };



  
  }