class Lvl9 extends Phaser.Scene {
    constructor() {
      super("lvl9Scene");
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
      this.load.image('platform5', './assets/Platform84x252c.png');
      this.load.image('box1', './assets/Platform42x42c.png');
      this.load.image('box2', './assets/Platform42x84c.png');
      this.load.image('background7', './assets/RH640bg09.png');

      this.load.spritesheet('player', './assets/Robotcopy.png', {frameWidth: 32, frameHeight: 32, startFrame: 0, endFrame: 3});    }
  
    create() {
      this.backgroundImg = this.add.tileSprite(0, 0, 640, 480, 'background7').setOrigin(0, 0);

      // variables and settings
      this.VELOCITY = 300;
      this.GROUND_HEIGHT = 35;
      this.AVATAR_SCALE = 1;
      this.physics.world.gravity.y = 2700;
      this.jumpvelocity =720
      this.playerspawnx =game.config.width-600;
      this.playerspawny = game.config.height/2+115;
      keyF =this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.F);
      keyR=this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.R);
      this.geargot = false;


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
        this.groundSprite = this.physics.add.sprite(320, game.config.height +60, 'ground1');
        this.groundSprite.body.immovable = true;
        this.groundSprite.body.allowGravity = false;
        this.ground.add(this.groundSprite);
        this.groundSprite = this.physics.add.sprite(20, game.config.height - 150, 'platform4');
        this.groundSprite.body.immovable = true;
        this.groundSprite.body.allowGravity = false;
        this.ground.add(this.groundSprite);
        this.groundSprite = this.physics.add.sprite(370, game.config.height - 300, 'platform4');
        this.groundSprite.body.immovable = true;
        this.groundSprite.body.allowGravity = false;
        this.ground.add(this.groundSprite);
        this.groundSprite = this.physics.add.sprite(230, game.config.height - 265, 'platform4');
        this.groundSprite.body.immovable = true;
        this.groundSprite.body.allowGravity = false;
        this.ground.add(this.groundSprite);
        this.groundSprite = this.physics.add.sprite(265, game.config.height - 375, 'platform4');
        this.groundSprite.body.immovable = true;
        this.groundSprite.body.allowGravity = false;
        this.ground.add(this.groundSprite);
        this.groundSprite = this.physics.add.sprite(355, game.config.height - 375, 'platform4');
        this.groundSprite.body.immovable = true;
        this.groundSprite.body.allowGravity = false;
        this.ground.add(this.groundSprite);
        this.groundSprite = this.physics.add.sprite(200, game.config.height - 255, 'platform3');
        this.groundSprite.body.immovable = true;
        this.groundSprite.body.allowGravity = false;
        this.ground.add(this.groundSprite); 
        this.groundSprite = this.physics.add.sprite(420, game.config.height - 255, 'platform3');
        this.groundSprite.body.immovable = true;
        this.groundSprite.body.allowGravity = false;
        this.ground.add(this.groundSprite);
  
        // Player 
        this.player = this.physics.add.sprite(this.playerspawnx+50, game.config.height/2+185, 'player').setScale(this.AVATAR_SCALE);
        this.player.setCollideWorldBounds(true);
        this.player.onWorldBounds = true;
        this.player.setDepth(10000)
  
        this.gear = this.physics.add.sprite(game.config.width-400 , game.config.height-300, 'player').setScale(this.AVATAR_SCALE);
        this.physics.add.collider(this.gear, this.ground);
        this.physics.add.overlap(this.player, this.gear, this.gearcollect, null, this);
    
  
        // Moveable Obj 
        this.moveableobj = this.add.group();
  
        //this.moveableobj1 = this.physics.add.sprite(this.playerspawnx+210, this.playerspawny+65, 'box1').setScale(this.AVATAR_SCALE);
        //this.moveableobj1.body.immovable = true;
        //this.moveableobj1.setCollideWorldBounds(true);
        //this.moveableobj1.body.allowGravity = false;
        //this.moveableobj1.onWorldBounds = true;
        //this.moveableobj.add(this.moveableobj1);
  
        this.moveableobj2 = this.physics.add.sprite(this.playerspawnx+380, this.playerspawny+43, 'box2').setScale(this.AVATAR_SCALE);
        this.moveableobj2.body.immovable = true;
        this.moveableobj2.setCollideWorldBounds(true);
        this.moveableobj2.body.allowGravity = false;
        this.moveableobj2.onWorldBounds = true;
        this.moveableobj.add(this.moveableobj2);
  
  
        //Ladder
        this.ladder = this.add.group();
        this.ladder1 =  this.physics.add.sprite(this.playerspawnx+50, this.playerspawny-170, 'ladder').setScale(this.AVATAR_SCALE);
        this.ladder1.body.immovable = true;
        this.ladder1.setCollideWorldBounds(true);
        this.ladder1.onWorldBounds = true;
        this.ladder1.body.allowGravity = false;
        this.ladder.add(this.ladder1);
  
  
        // Cursor 
        cursors = this.input.keyboard.createCursorKeys();
  
        // Add physics collider
        this.physics.add.collider(this.player, this.ground,null,this.checkUp.bind(this));
        this.physics.add.collider(this.moveableobj, this.moveableobj);
        // Physics object and Push and Pull
        this.physics.add.collider(this.player, this.moveableobj, function (player, obj) {
  
          if(keyF.isDown) {
            if(cursors.left.isDown && player.body.touching.left) { 
              pushorpull = true;
              player.x -=1
              obj.x -=1
              
            }
          //   if(cursors.right.isDown  && player.body.touching.right) {
          //     pushorpull = true;
          //     player.x+=1
          //     obj.x+=1};
           };
        });
            /// Physics Object and Ladder
            this.physics.add.overlap(this.player, this.ladder, function (player, ladder) {
              if(keyF.isDown) {
                onladder = true;
                player.body.setAllowGravity(false);
                player.x = ladder.x
                if (cursors.up.isDown)
                {
                  player.y -=5
                }
                else if (cursors.down.isDown && (player.y <=ladder.y)) {
                  player.y+=5
                }
              }
              else {player.body.setAllowGravity(true);
              }
            })
  
      //Door, Exit
      this.exit = this.physics.add.sprite(game.config.width-260, game.config.height/1.5-160, 'teleporter').setScale(this.AVATAR_SCALE);
      this.physics.add.collider(this.exit, this.ground);
      this.exit.play({ key: 'working', repeat: 40000000000 });

  
      // Exit Check
      this.physics.add.overlap(this.player, this.exit, function () {
          inZone =true;
        })
    }
    update() {
      if(keyR.isDown){
        this.scene.restart()
      };
    // Move Left  
    if(cursors.left.isDown && !onladder) {
      this.player.setVelocityX(-this.VELOCITY);
      //jump while moving
      if (Phaser.Input.Keyboard.JustDown(cursors.up)  && this.jump_counter < 1) {  
          this.jump_counter +=1;
          this.player.setVelocityY(-this.jumpvelocity);
          this.jumpaudio.play()
  
      }
  } 
  // Move Right
  else if(cursors.right.isDown && !pushorpull && !onladder) {
    this.player.setVelocityX(this.VELOCITY)
    //Jump while moving
    if (Phaser.Input.Keyboard.JustDown(cursors.up)&& this.jump_counter < 1) {
        this.jump_counter +=1;
        this.player.setVelocityY(-this.jumpvelocity );
        this.jumpaudio.play()
  
    };
  } 
  //Jump
  else if (Phaser.Input.Keyboard.JustDown(cursors.up) && this.jump_counter < 1 && !onladder) 
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
    this.scene.start('lvl10Scene');
    if(this.geargot)     {
      gearscore +=1;
    }
  }
  inZone = false;
  pushorpull = false;
  if (!onladder) {
    this.player.body.setAllowGravity(true)
  
  }
  onladder = false;
  
    }
  
    playerreset() {
      this.player.y= this.playerspawny
      this.player.x =this.playerspawnx
     
    };
  
    checkUp() {
      if (onladder) {
        return false;
      }
      else { return true}
    }

    gearcollect(player, gear) {
      if(!gear.hit) {
        gear.hit = true;
        this.geartween=this.tweens.add({
          targets: gear,
          ease: Phaser.Math.Easing.Sine.Out,
          duration: 1000,
          delay: 0,
          repeat: 0,
          hold: 1000,
          alpha: 0,
          angle: 360,
      });
      this.geargot = true;
      //this.geartween.onComplete.add(killgear);
      }
  
    }
  
  }
  