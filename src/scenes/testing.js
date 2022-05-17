class tester extends Phaser.Scene {
    constructor() {
      super("test");
    }
  
    preload() {
      this.load.audio('jump', './assets/jump.wav');
      this.load.audio('teleport', './assets/teleport.wav');

      this.load.image('ground', './assets/monster.png');
      this.load.image('platform1', './assets/Platform84x252c.png');
      this.load.image('ground1', './assets/Platform640x200c.png');
      this.load.image('platform2', './assets/Platform252x42c.png');
      this.load.image('platform3', './assets/Platform42x252c.png');
      this.load.image('platform4', './assets/Platform88x12c.png');
      this.load.image('box1', './assets/Platform42x42c.png');
      this.load.spritesheet('player', './assets/Robotcopy.png', {frameWidth: 32, frameHeight: 32, startFrame: 0, endFrame: 3});    }
  
    create() {
      // variables and settings
      this.VELOCITY = 500;
      this.GROUND_HEIGHT = 35;
      this.AVATAR_SCALE = 1;
      this.physics.world.gravity.y = 3000;
      this.jumpvelocity =720
      this.playerspawnx =game.config.width-600;
      this.playerspawny = game.config.height/2+115;
      keyF =this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.F);
        // Sound 
        this.jumpaudio = this.sound.add("jump", {volume: .05 });
        this.teleportaudio = this.sound.add("teleport", {volume: .5 });
  
        // Ground 

  
        // Player 
        this.player = this.physics.add.sprite(this.playerspawnx+400, this.playerspawny, 'player').setScale(this.AVATAR_SCALE);
        this.player.setCollideWorldBounds(true);
        this.player.onWorldBounds = true;



        // Moveable Obj 
        this.moveableobj = this.physics.add.sprite(this.playerspawnx+200, this.playerspawny, 'player').setScale(this.AVATAR_SCALE);
        this.moveableobj.body.immovable = true;
        this.moveableobj.setCollideWorldBounds(true);
        this.moveableobj.onWorldBounds = true;

        // Cursor 
        cursors = this.input.keyboard.createCursorKeys();
  
        // Add physics collider
        this.physics.add.collider(this.player, this.ground);
        this.physics.add.collider(this.player, this.moveableobj, function (player, obj) {
        pushorpull = true;

          if(keyF.isDown) {
            if(cursors.left.isDown) { 
              player.x -=5
              obj.x -=3
              
            }
            else if(cursors.right.isDown) {
              obj.y+=6
              obj.x+=10};
          };
        });


      //Door, Exit
      this.exit = this.physics.add.sprite(game.config.width-15, game.config.height-430, 'player').setScale(this.AVATAR_SCALE);
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
  else if(cursors.right.isDown && !pushorpull) {
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
   //if (this.player.y == 464) // bottom of screen
   //this.playerreset();

   //this.physics.world.wrap(this.player, 0);


   //If at exit Start next Scene
   if (inZone) {
    this.teleportaudio.play()
    this.scene.start('lvl6Scene');    
  }
  inZone = false;
  pushorpull = false;

    }

    playerreset() {
      this.player.y= this.playerspawny
      this.player.x =this.playerspawnx
     
    };

  
  
  
  }