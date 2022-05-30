class Lvl4 extends Phaser.Scene {
    constructor() {
      super("lvl4Scene");
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
      this.load.spritesheet('player', './assets/Robotcopy.png', {frameWidth: 32, frameHeight: 32, startFrame: 0, endFrame: 3});    }
  
    create() {
      // variables and settings
      this.VELOCITY = 300;
      this.GROUND_HEIGHT = 35;
      this.AVATAR_SCALE = 1;
      this.physics.world.gravity.y = 2700;
      this.jumpvelocity =725
      this.playerspawnx =game.config.width-600;
      this.playerspawny = game.config.height/2+125;
  
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
        this.groundSprite = this.physics.add.sprite(-250, game.config.height - this.GROUND_HEIGHT+35, 'ground1');
        this.groundSprite.body.immovable = true;
        this.groundSprite.body.allowGravity = false;
        this.ground.add(this.groundSprite);
        this.groundSprite = this.physics.add.sprite(0+180, 540 - 150, 'platform1');
        this.groundSprite.body.immovable = true;
        this.groundSprite.body.allowGravity = false;
        this.ground.add(this.groundSprite);
        this.groundSprite = this.physics.add.sprite(0+330, 540 - 250, 'platform1');
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
        this.player = this.physics.add.sprite(this.playerspawnx, this.playerspawny, 'player').setScale(this.AVATAR_SCALE);
        this.player.setCollideWorldBounds(true);
        this.player.onWorldBounds = true;
        this.player.setDepth(10000)

        // Cursor 
        cursors = this.input.keyboard.createCursorKeys();
  
        // Add physics collider
        this.physics.add.collider(this.player, this.ground);

      //Door, Exit
      this.exit = this.physics.add.sprite(game.config.width-15, game.config.height-120, 'teleporter').setScale(this.AVATAR_SCALE);
      this.physics.add.collider(this.exit, this.ground);
      this.exit.play({ key: 'working', repeat: 40000000000 });


      // Exit Check
      this.physics.add.overlap(this.player, this.exit, function () {
          inZone =true;
        });

      //Text Tutorial
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
    this.tutorialtext = this.add.text(borderUISize*-0.5 + borderPadding*2.8, borderUISize + borderPadding*1.5, "Press the Up arrow twice to double jump", textConfig);

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
        this.jumpaudio.play();

    };
  } 
  //Jump
  else if (Phaser.Input.Keyboard.JustDown(cursors.up) && this.jump_counter < 1) 
  {
    this.jump_counter +=1;
    this.player.setVelocityY(-this.jumpvelocity  );
    this.jumpaudio.play();

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
    this.scene.start('lvl5Scene');    
  }
  inZone = false;
    }

    playerreset() {
       this.player.y= this.playerspawny
      this.player.x =this.playerspawnx
     
    };




  
  
  
  }