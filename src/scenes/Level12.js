class Lvl12 extends Phaser.Scene {
    constructor() {
      super("lvl12Scene");
    }
  
    preload() {
    }
  
    create() {
      this.backgroundImg = this.add.tileSprite(0, 0, 640, 480, 'background8').setOrigin(0, 0);

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
        this.gearaudio = this.sound.add("gearaudio", {volume: .05 });

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
        this.groundSprite = this.physics.add.sprite(55, game.config.height - 150, 'platform4');
        this.groundSprite.body.immovable = true;
        this.groundSprite.body.allowGravity = false;
        this.ground.add(this.groundSprite);
        this.groundSprite = this.physics.add.sprite(280, game.config.height - 320, 'platform2');
        this.groundSprite.body.immovable = true;
        this.groundSprite.body.allowGravity = false;
        this.ground.add(this.groundSprite);
        this.groundSprite = this.physics.add.sprite(510, game.config.height - 350, 'platform4');
        this.groundSprite.body.immovable = true;
        this.groundSprite.body.allowGravity = false;
        this.ground.add(this.groundSprite);
        this.groundSprite = this.physics.add.sprite(600, game.config.height - 350, 'platform4');
        this.groundSprite.body.immovable = true;
        this.groundSprite.body.allowGravity = false;
        this.ground.add(this.groundSprite);
        this.groundSprite = this.physics.add.sprite(450, game.config.height - 300, 'platform4');
        this.groundSprite.body.immovable = true;
        this.groundSprite.body.allowGravity = false;
        this.ground.add(this.groundSprite);
        this.groundSprite = this.physics.add.sprite(540, game.config.height - 300, 'platform4');
        this.groundSprite.body.immovable = true;
        this.groundSprite.body.allowGravity = false;
        this.ground.add(this.groundSprite);
        this.groundSprite = this.physics.add.sprite(510, game.config.height - 250, 'platform4');
        this.groundSprite.body.immovable = true;
        this.groundSprite.body.allowGravity = false;
        this.ground.add(this.groundSprite);
        this.groundSprite = this.physics.add.sprite(600, game.config.height - 250, 'platform4');
        this.groundSprite.body.immovable = true;
        this.groundSprite.body.allowGravity = false;
        this.ground.add(this.groundSprite);
        this.groundSprite = this.physics.add.sprite(420, game.config.height - 200, 'platform4');
        this.groundSprite.body.immovable = true;
        this.groundSprite.body.allowGravity = false;
        this.ground.add(this.groundSprite);
        this.groundSprite = this.physics.add.sprite(510, game.config.height - 200, 'platform4');
        this.groundSprite.body.immovable = true;
        this.groundSprite.body.allowGravity = false;
        this.ground.add(this.groundSprite);
        this.groundSprite = this.physics.add.sprite(200, game.config.height - 170, 'platform5');
        this.groundSprite.body.immovable = true;
        this.groundSprite.body.allowGravity = false;
        this.ground.add(this.groundSprite);
        this.groundSprite = this.physics.add.sprite(330, game.config.height - 150, 'platform4');
        this.groundSprite.body.immovable = true;
        this.groundSprite.body.allowGravity = false;
        this.ground.add(this.groundSprite);
        this.groundSprite = this.physics.add.sprite(420, game.config.height - 150, 'platform4');
        this.groundSprite.body.immovable = true;
        this.groundSprite.body.allowGravity = false;
        this.ground.add(this.groundSprite);
        this.groundSprite = this.physics.add.sprite(510, game.config.height - 150, 'platform4');
        this.groundSprite.body.immovable = true;
        this.groundSprite.body.allowGravity = false;
        this.ground.add(this.groundSprite);
        this.groundSprite = this.physics.add.sprite(600, game.config.height - 150, 'platform4');
        this.groundSprite.body.immovable = true;
        this.groundSprite.body.allowGravity = false;
        this.ground.add(this.groundSprite);
        this.groundSprite = this.physics.add.sprite(400, game.config.height - 250, 'box2');
        this.groundSprite.body.immovable = true;
        this.groundSprite.body.allowGravity = false;
        this.ground.add(this.groundSprite);
   
        // Player 
        this.player = this.physics.add.sprite(this.playerspawnx+50, game.config.height/2+185, 'player').setScale(this.AVATAR_SCALE);
        this.player.setCollideWorldBounds(true);
        this.player.onWorldBounds = true;
        this.player.setDepth(10000)
  
  
  
        // Moveable Obj 
        this.moveableobj = this.add.group();
        this.moveableobj1 = this.physics.add.sprite(this.playerspawnx+490, this.playerspawny-50, 'box1').setScale(this.AVATAR_SCALE);
        this.moveableobj1.body.immovable = true;
        this.moveableobj1.setCollideWorldBounds(true);
        this.moveableobj1.body.allowGravity = false;
        this.moveableobj1.onWorldBounds = true;
        this.moveableobj.add(this.moveableobj1);
  
  
        //Ladder
        this.ladder = this.add.group();
        this.ladder1 =  this.physics.add.sprite(this.playerspawnx+15, this.playerspawny-50, 'ladder').setScale(this.AVATAR_SCALE);
        this.ladder1.body.immovable = true;
        this.ladder1.setCollideWorldBounds(true);
        this.ladder1.onWorldBounds = true;
        this.ladder1.body.allowGravity = false;
        this.ladder.add(this.ladder1);
        this.ladder1 =  this.physics.add.sprite(this.playerspawnx+15, this.playerspawny-100, 'ladder').setScale(this.AVATAR_SCALE);
        this.ladder1.body.immovable = true;
        this.ladder1.setCollideWorldBounds(true);
        this.ladder1.onWorldBounds = true;
        this.ladder1.body.allowGravity = false;
        this.ladder.add(this.ladder1);
        this.ladder1 =  this.physics.add.sprite(this.playerspawnx+15, this.playerspawny-150, 'ladder').setScale(this.AVATAR_SCALE);
        this.ladder1.body.immovable = true;
        this.ladder1.setCollideWorldBounds(true);
        this.ladder1.onWorldBounds = true;
        this.ladder1.body.allowGravity = false;
        this.ladder.add(this.ladder1);
        this.ladder1 =  this.physics.add.sprite(this.playerspawnx+15, this.playerspawny-75, 'ladder').setScale(this.AVATAR_SCALE);
        this.ladder1.body.immovable = true;
        this.ladder1.setCollideWorldBounds(true);
        this.ladder1.onWorldBounds = true;
        this.ladder1.body.allowGravity = false;
        this.ladder.add(this.ladder1);
        this.ladder1 =  this.physics.add.sprite(this.playerspawnx+15, this.playerspawny-130, 'ladder').setScale(this.AVATAR_SCALE);
        this.ladder1.body.immovable = true;
        this.ladder1.setCollideWorldBounds(true);
        this.ladder1.onWorldBounds = true;
        this.ladder1.body.allowGravity = false;
        this.ladder.add(this.ladder1);
        
        this.gear = this.physics.add.sprite(game.config.width-30 , game.config.height-370, 'gear').setScale(.25);
        this.physics.add.collider(this.gear, this.ground);
        this.physics.add.overlap(this.player, this.gear, this.gearcollect, null, this);
    
  
        // Cursor 
        cursors = this.input.keyboard.createCursorKeys();
  
        // Add physics collider
        this.physics.add.collider(this.player, this.ground,null,this.checkUp.bind(this));
        this.physics.add.collider(this.moveableobj, this.moveableobj);
        // Physics object and Push and Pull
        this.physics.add.collider(this.player, this.moveableobj, function (player, obj) {
  
          if(keyF.isDown) {
            if(cursors.left.isDown && player.body.touching.left && obj.x >=307) { 
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
      this.exit = this.physics.add.sprite(game.config.width-20, game.config.height-60, 'player').setScale(this.AVATAR_SCALE);
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
    this.scene.start('lvl12Scene');
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
      this.scene.restart()
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
      this.gearaudio.play()

      this.geargot = true;
      //this.geartween.onComplete.add(killgear);
      }
  
    }
  
  }