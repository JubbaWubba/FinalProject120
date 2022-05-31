class Lvl8 extends Phaser.Scene {
    constructor() {
      super("lvl8Scene");
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
      this.load.image('box2', './assets/Platform42x84c.png');
      this.load.spritesheet('player', './assets/Robotcopy.png', {frameWidth: 32, frameHeight: 32, startFrame: 0, endFrame: 3});    }
  
    create() {
      // variables and settings
      this.VELOCITY = 300;
      this.GROUND_HEIGHT = 35;
      this.AVATAR_SCALE = 1;
      this.physics.world.gravity.y = 2700;
      this.jumpvelocity =725
      this.playerspawnx =game.config.width-600;
      this.playerspawny = game.config.height/2+115;
      keyF =this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.F);
      keyR=this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.R);

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
        this.groundSprite = this.physics.add.sprite(140, game.config.height - 270, 'platform4');
        this.groundSprite.body.immovable = true;
        this.groundSprite.body.allowGravity = false;
        this.ground.add(this.groundSprite);
        this.groundSprite = this.physics.add.sprite(50, game.config.height - 395, 'platform4');
        this.groundSprite.body.immovable = true;
        this.groundSprite.body.allowGravity = false;
        this.ground.add(this.groundSprite);
        this.groundSprite = this.physics.add.sprite(600, game.config.height - 395, 'platform4');
        this.groundSprite.body.immovable = true;
        this.groundSprite.body.allowGravity = false;
        this.ground.add(this.groundSprite);
        this.groundSprite = this.physics.add.sprite(320, game.config.height - 210, 'platform4');
        this.groundSprite.body.immovable = true;
        this.groundSprite.body.allowGravity = false;
        this.ground.add(this.groundSprite);
        this.groundSprite = this.physics.add.sprite(620, game.config.height - 260, 'platform4');
        this.groundSprite.body.immovable = true;
        this.groundSprite.body.allowGravity = false;
        this.ground.add(this.groundSprite);
        this.groundSprite = this.physics.add.sprite(620, game.config.height - 308, 'platform4');
        this.groundSprite.body.immovable = true;
        this.groundSprite.body.allowGravity = false;
        this.ground.add(this.groundSprite);
        this.groundSprite = this.physics.add.sprite(530, game.config.height - 340, 'platform4');
        this.groundSprite.body.immovable = true;
        this.groundSprite.body.allowGravity = false;
        this.ground.add(this.groundSprite);
  
        // Player 
        this.player = this.physics.add.sprite(this.playerspawnx+50, game.config.height/2+185, 'player').setScale(this.AVATAR_SCALE);
        this.player.setCollideWorldBounds(true);
        this.player.onWorldBounds = true;
        this.player.setDepth(10000)
  
        this.gear = this.physics.add.sprite(game.config.width-30 , game.config.height-400, 'player').setScale(this.AVATAR_SCALE);
        this.physics.add.collider(this.gear, this.ground);
        this.physics.add.overlap(this.player, this.gear, this.gearcollect, null, this);
    
  
  
        // Moveable Obj 
        this.moveableobj = this.add.group();
  
  
  
        //Ladder
        this.ladder = this.add.group();
        this.ladder1 =  this.physics.add.sprite(this.playerspawnx+5, this.playerspawny-5, 'teleporter').setScale(this.AVATAR_SCALE);
        this.ladder1.body.immovable = true;
        this.ladder1.setCollideWorldBounds(true);
        this.ladder1.onWorldBounds = true;
        this.ladder1.body.allowGravity = false;
        this.ladder.add(this.ladder1);
  
        this.ladder2 =  this.physics.add.sprite(this.playerspawnx+5, this.playerspawny-50, 'teleporter').setScale(this.AVATAR_SCALE);
        this.ladder2.body.immovable = true;
        this.ladder2.setCollideWorldBounds(true);
        this.ladder2.onWorldBounds = true;
        this.ladder2.body.allowGravity = false;
        this.ladder.add(this.ladder2);
  
        this.ladder2 =  this.physics.add.sprite(this.playerspawnx+5, this.playerspawny-90, 'teleporter').setScale(this.AVATAR_SCALE);
        this.ladder2.body.immovable = true;
        this.ladder2.setCollideWorldBounds(true);
        this.ladder2.onWorldBounds = true;
        this.ladder2.body.allowGravity = false;
        this.ladder.add(this.ladder2);
  
        this.ladder2 =  this.physics.add.sprite(this.playerspawnx+5, this.playerspawny-130, 'teleporter').setScale(this.AVATAR_SCALE);
        this.ladder2.body.immovable = true;
        this.ladder2.setCollideWorldBounds(true);
        this.ladder2.onWorldBounds = true;
        this.ladder2.body.allowGravity = false;
        this.ladder.add(this.ladder2);
  
        this.ladder2 =  this.physics.add.sprite(this.playerspawnx+5, this.playerspawny-170, 'teleporter').setScale(this.AVATAR_SCALE);
        this.ladder2.body.immovable = true;
        this.ladder2.setCollideWorldBounds(true);
        this.ladder2.onWorldBounds = true;
        this.ladder2.body.allowGravity = false;
        this.ladder.add(this.ladder2);
  
        this.ladder2 =  this.physics.add.sprite(this.playerspawnx+5, this.playerspawny-210, 'teleporter').setScale(this.AVATAR_SCALE);
        this.ladder2.body.immovable = true;
        this.ladder2.setCollideWorldBounds(true);
        this.ladder2.onWorldBounds = true;
        this.ladder2.body.allowGravity = false;
        this.ladder.add(this.ladder2);
  
        this.ladder2 =  this.physics.add.sprite(this.playerspawnx+5, this.playerspawny-250, 'teleporter').setScale(this.AVATAR_SCALE);
        this.ladder2.body.immovable = true;
        this.ladder2.setCollideWorldBounds(true);
        this.ladder2.onWorldBounds = true;
        this.ladder2.body.allowGravity = false;
        this.ladder.add(this.ladder2);
  
        this.ladder1 =  this.physics.add.sprite(this.playerspawnx+5, this.playerspawny+65, 'teleporter').setScale(this.AVATAR_SCALE);
        this.ladder1.body.immovable = true;
        this.ladder1.setCollideWorldBounds(true);
        this.ladder1.onWorldBounds = true;
        this.ladder1.body.allowGravity = false;
        this.ladder.add(this.ladder1);
  
        this.ladder1 =  this.physics.add.sprite(this.playerspawnx+5, this.playerspawny+40, 'teleporter').setScale(this.AVATAR_SCALE);
        this.ladder1.body.immovable = true;
        this.ladder1.setCollideWorldBounds(true);
        this.ladder1.onWorldBounds = true;
        this.ladder1.body.allowGravity = false;
        this.ladder.add(this.ladder1);
  
        this.ladder1 =  this.physics.add.sprite(this.playerspawnx+570, this.playerspawny-160, 'teleporter').setScale(this.AVATAR_SCALE);
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
            if(cursors.right.isDown  && player.body.touching.right) {
              pushorpull = true;
              player.x+=1
              obj.x+=1};
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
      this.exit = this.physics.add.sprite(game.config.width-20, game.config.height-420, 'teleporter').setScale(this.AVATAR_SCALE);
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
        this.tutorialtext = this.add.text(borderUISize*-0.5 + borderPadding*2.8, borderUISize + borderPadding*1.5, "Hold F and the Up Arrow to climb ladders", textConfig);
    
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
    this.scene.start('lvl9Scene');    
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
      gearscore +=1;
      //this.geartween.onComplete.add(killgear);
      }
  
    }
  
  }
  