class Lvl6 extends Phaser.Scene {
    constructor() {
      super("lvl6Scene");
    }
  
    preload() {
      this.load.audio('jump', './assets/jump.wav');
      this.load.audio('teleport', './assets/teleport.wav');

      this.load.image('teleporter', './assets/TeleportalAnimation.png');
      this.load.image('ground', './assets/monster.png');
      this.load.image('platform1', './assets/Platform84x252c.png');
      this.load.image('ground1', './assets/Platform640x200c.png');
      this.load.image('platform2', './assets/Platform252x42c.png');
      this.load.image('platform3', './assets/Platform42x252c.png');
      this.load.image('platform4', './assets/Platform88x12c.png');
      this.load.image('box1', './assets/Platform42x42c.png');
      this.load.spritesheet('player', './assets/Robotcopy.png', {frameWidth: 32, frameHeight: 32, startFrame: 0, endFrame: 3});   }
  
    create() {
      // variables and settings
      this.VELOCITY = 300;
      this.GROUND_HEIGHT = 35;
      this.AVATAR_SCALE = 1;
      this.physics.world.gravity.y = 3000;
      this.jumpvelocity =720
      this.playerspawnx =game.config.width-600;
      this.playerspawny = game.config.height/2+120;
      
        // Sound 
        this.jumpaudio = this.sound.add("jump", {volume: .05 });
        this.teleportaudio = this.sound.add("teleport", {volume: .5 });

        // Ground 
        this.ground = this.add.group();
        this.groundSprite = this.physics.add.sprite(-250, game.config.height - this.GROUND_HEIGHT+35, 'ground1');
        this.groundSprite.body.immovable = true;
        this.groundSprite.body.allowGravity = false;
        this.ground.add(this.groundSprite);
        this.groundSprite = this.physics.add.sprite(320, 540 - 600, 'platform1');
        this.groundSprite.body.immovable = true;
        this.groundSprite.body.allowGravity = false;
        this.ground.add(this.groundSprite);
        this.groundSprite2 = this.physics.add.sprite(320, 540 - 300, 'platform1');
        this.groundSprite2.setDepth(10000)
        this.groundSprite2.body.immovable = true;
        this.groundSprite2.body.allowGravity = false;
        this.ground.add(this.groundSprite2);
        this.groundSprite = this.physics.add.sprite(380, game.config.height - 195, 'platform4');
        this.groundSprite.body.immovable = true;
        this.groundSprite.body.allowGravity = false;
        this.ground.add(this.groundSprite);
        this.groundSprite2 = this.physics.add.sprite(480, game.config.height - 40, 'box1');
        this.groundSprite2.body.immovable = true;
        this.groundSprite2.body.allowGravity = false;
        this.ground.add(this.groundSprite);
        this.groundSprite = this.physics.add.sprite(190, game.config.height - 40, 'box1');
        this.groundSprite.body.immovable = true;
        this.groundSprite.body.allowGravity = false;
        this.ground.add(this.groundSprite);
        this.groundSprite = this.physics.add.sprite(370, game.config.height - 10, 'platform4');
        this.groundSprite.body.immovable = true;
        this.groundSprite.body.allowGravity = false;
        this.ground.add(this.groundSprite);
        this.groundSprite = this.physics.add.sprite(625, game.config.height - 110, 'platform4');
        this.groundSprite.body.immovable = true;
        this.groundSprite.body.allowGravity = false;
        this.ground.add(this.groundSprite);
        this.groundSprite = this.physics.add.sprite(250, game.config.height - 120, 'platform4');
        this.groundSprite.body.immovable = true;
        this.groundSprite.body.allowGravity = false;
        this.ground.add(this.groundSprite);
        this.groundSprite = this.physics.add.sprite(20, game.config.height - 280, 'platform4');
        this.groundSprite.body.immovable = true;
        this.groundSprite.body.allowGravity = false;
        this.ground.add(this.groundSprite);
        this.groundSprite = this.physics.add.sprite(0+910, game.config.height - 295+35, 'ground1');
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

      //Door, Exit
      this.exit = this.physics.add.sprite(game.config.width-10, game.config.height-375, 'player').setScale(this.AVATAR_SCALE);
      this.physics.add.collider(this.exit, this.ground);

      // Exit Check
      this.physics.add.overlap(this.player, this.exit, function () {
          inZone =true;
        })
    }
    update() {
    // Move Left
    if(cursors.left.isDown) {
      this.player.setVelocityX(-this.VELOCITY);
      //jump while moving
      if (Phaser.Input.Keyboard.JustDown(cursors.up)  && this.jump_counter < 1) {  
          this.jump_counter +=1;
          this.player.setVelocityY(-this.jumpvelocity);
          this.jumpaudio.play()

      }
  } 
  // Move Right
  else if(cursors.right.isDown) {
    this.player.setVelocityX(this.VELOCITY)
    //Jump while moving
    if (Phaser.Input.Keyboard.JustDown(cursors.up)&& this.jump_counter < 1) {
        this.jump_counter +=1;
        this.player.setVelocityY(-this.jumpvelocity );
        this.jumpaudio.play()

    };
  } 
  //Jump
  else if (Phaser.Input.Keyboard.JustDown(cursors.up) && this.jump_counter < 1) 
  {
    this.jump_counter +=1;
    this.player.setVelocityY(-this.jumpvelocity  );
    this.jumpaudio.play()

 }
  // Neutral
  else if (!cursors.right.isDown && !cursors.left.isDown &&(!Phaser.Input.Keyboard.JustDown(cursors.up))) 
  {
      this.player.setVelocityX(0);
 }
 if (this.player.body.touching.down) {
   this.jump_counter =0;
 }
  
   //Reset
   if (this.player.y == 464) // bottom of screen
   this.playerreset();

   //this.physics.world.wrap(this.player, 0);


   //If at exit Start next Scene
   if (inZone) {
    this.teleportaudio.play()
    this.scene.start('lvl7Scene');    
  }
  inZone = false;
    }

    playerreset() {
       this.player.y= this.playerspawny
      this.player.x =this.playerspawnx
     
    };
 
  
  }