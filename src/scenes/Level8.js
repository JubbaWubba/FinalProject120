class Lvl8 extends Phaser.Scene {
    constructor() {
      super("lvl8Scene");
    }
  
    preload() {
   }
  
    create() {
      this.backgroundImg = this.add.tileSprite(0, 0, 640, 480, 'background6').setOrigin(0, 0);

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
  
        this.gear = this.physics.add.sprite(game.config.width-30 , game.config.height-330, 'gear').setScale(.25);
        this.physics.add.collider(this.gear, this.ground);
        this.physics.add.overlap(this.player, this.gear, this.gearcollect, null, this);
    
  
  
        // Moveable Obj 
        this.moveableobj = this.add.group();
  
  
  
        //Ladder
        this.ladder = this.add.group();
        this.ladder1 =  this.physics.add.sprite(this.playerspawnx+5, this.playerspawny-5, 'ladder').setScale(this.AVATAR_SCALE);
        this.ladder1.body.immovable = true;
        this.ladder1.setCollideWorldBounds(true);
        this.ladder1.onWorldBounds = true;
        this.ladder1.body.allowGravity = false;
        this.ladder.add(this.ladder1);

        this.ladder = this.add.group();
        this.ladder1 =  this.physics.add.sprite(this.playerspawnx+5, this.playerspawny-10, 'ladder').setScale(this.AVATAR_SCALE);
        this.ladder1.body.immovable = true;
        this.ladder1.setCollideWorldBounds(true);
        this.ladder1.onWorldBounds = true;
        this.ladder1.body.allowGravity = false;
        this.ladder.add(this.ladder1);
  
        this.ladder2 =  this.physics.add.sprite(this.playerspawnx+5, this.playerspawny-50, 'ladder').setScale(this.AVATAR_SCALE);
        this.ladder2.body.immovable = true;
        this.ladder2.setCollideWorldBounds(true);
        this.ladder2.onWorldBounds = true;
        this.ladder2.body.allowGravity = false;
        this.ladder.add(this.ladder2);

        this.ladder2 =  this.physics.add.sprite(this.playerspawnx+5, this.playerspawny-2, 'ladder').setScale(this.AVATAR_SCALE);
        this.ladder2.body.immovable = true;
        this.ladder2.setCollideWorldBounds(true);
        this.ladder2.onWorldBounds = true;
        this.ladder2.body.allowGravity = false;
        this.ladder.add(this.ladder2);

        this.ladder2 =  this.physics.add.sprite(this.playerspawnx+5, this.playerspawny-220, 'ladder').setScale(this.AVATAR_SCALE);
        this.ladder2.body.immovable = true;
        this.ladder2.setCollideWorldBounds(true);
        this.ladder2.onWorldBounds = true;
        this.ladder2.body.allowGravity = false;
        this.ladder.add(this.ladder2);

        this.ladder2 =  this.physics.add.sprite(this.playerspawnx+5, this.playerspawny-200, 'ladder').setScale(this.AVATAR_SCALE);
        this.ladder2.body.immovable = true;
        this.ladder2.setCollideWorldBounds(true);
        this.ladder2.onWorldBounds = true;
        this.ladder2.body.allowGravity = false;
        this.ladder.add(this.ladder2);

        this.ladder2 =  this.physics.add.sprite(this.playerspawnx+5, this.playerspawny-30, 'ladder').setScale(this.AVATAR_SCALE);
        this.ladder2.body.immovable = true;
        this.ladder2.setCollideWorldBounds(true);
        this.ladder2.onWorldBounds = true;
        this.ladder2.body.allowGravity = false;
        this.ladder.add(this.ladder2);

        this.ladder2 =  this.physics.add.sprite(this.playerspawnx+5, this.playerspawny+9, 'ladder').setScale(this.AVATAR_SCALE);
        this.ladder2.body.immovable = true;
        this.ladder2.setCollideWorldBounds(true);
        this.ladder2.onWorldBounds = true;
        this.ladder2.body.allowGravity = false;
        this.ladder.add(this.ladder2);

        this.ladder2 =  this.physics.add.sprite(this.playerspawnx+5, this.playerspawny-70, 'ladder').setScale(this.AVATAR_SCALE);
        this.ladder2.body.immovable = true;
        this.ladder2.setCollideWorldBounds(true);
        this.ladder2.onWorldBounds = true;
        this.ladder2.body.allowGravity = false;
        this.ladder.add(this.ladder2);
  
        this.ladder2 =  this.physics.add.sprite(this.playerspawnx+5, this.playerspawny-90, 'ladder').setScale(this.AVATAR_SCALE);
        this.ladder2.body.immovable = true;
        this.ladder2.setCollideWorldBounds(true);
        this.ladder2.onWorldBounds = true;
        this.ladder2.body.allowGravity = false;
        this.ladder.add(this.ladder2);

        this.ladder2 =  this.physics.add.sprite(this.playerspawnx+5, this.playerspawny-100, 'ladder').setScale(this.AVATAR_SCALE);
        this.ladder2.body.immovable = true;
        this.ladder2.setCollideWorldBounds(true);
        this.ladder2.onWorldBounds = true;
        this.ladder2.body.allowGravity = false;
        this.ladder.add(this.ladder2);
  
        this.ladder2 =  this.physics.add.sprite(this.playerspawnx+5, this.playerspawny-130, 'ladder').setScale(this.AVATAR_SCALE);
        this.ladder2.body.immovable = true;
        this.ladder2.setCollideWorldBounds(true);
        this.ladder2.onWorldBounds = true;
        this.ladder2.body.allowGravity = false;
        this.ladder.add(this.ladder2);

        this.ladder2 =  this.physics.add.sprite(this.playerspawnx+5, this.playerspawny-140, 'ladder').setScale(this.AVATAR_SCALE);
        this.ladder2.body.immovable = true;
        this.ladder2.setCollideWorldBounds(true);
        this.ladder2.onWorldBounds = true;
        this.ladder2.body.allowGravity = false;
        this.ladder.add(this.ladder2);
  
        this.ladder2 =  this.physics.add.sprite(this.playerspawnx+5, this.playerspawny-170, 'ladder').setScale(this.AVATAR_SCALE);
        this.ladder2.body.immovable = true;
        this.ladder2.setCollideWorldBounds(true);
        this.ladder2.onWorldBounds = true;
        this.ladder2.body.allowGravity = false;
        this.ladder.add(this.ladder2);
  
        this.ladder2 =  this.physics.add.sprite(this.playerspawnx+5, this.playerspawny-210, 'ladder').setScale(this.AVATAR_SCALE);
        this.ladder2.body.immovable = true;
        this.ladder2.setCollideWorldBounds(true);
        this.ladder2.onWorldBounds = true;
        this.ladder2.body.allowGravity = false;
        this.ladder.add(this.ladder2);
  
        this.ladder2 =  this.physics.add.sprite(this.playerspawnx+5, this.playerspawny-253, 'ladder').setScale(this.AVATAR_SCALE);
        this.ladder2.body.immovable = true;
        this.ladder2.setCollideWorldBounds(true);
        this.ladder2.onWorldBounds = true;
        this.ladder2.body.allowGravity = false;
        this.ladder.add(this.ladder2);
  
        this.ladder1 =  this.physics.add.sprite(this.playerspawnx+5, this.playerspawny+65, 'ladder').setScale(this.AVATAR_SCALE);
        this.ladder1.body.immovable = true;
        this.ladder1.setCollideWorldBounds(true);
        this.ladder1.onWorldBounds = true;
        this.ladder1.body.allowGravity = false;
        this.ladder.add(this.ladder1);
  
        this.ladder1 =  this.physics.add.sprite(this.playerspawnx+5, this.playerspawny+40, 'ladder').setScale(this.AVATAR_SCALE);
        this.ladder1.body.immovable = true;
        this.ladder1.setCollideWorldBounds(true);
        this.ladder1.onWorldBounds = true;
        this.ladder1.body.allowGravity = false;
        this.ladder.add(this.ladder1);
  
        this.ladder1 =  this.physics.add.sprite(this.playerspawnx+570, this.playerspawny-166, 'ladder').setScale(this.AVATAR_SCALE);
        this.ladder1.body.immovable = true;
        this.ladder1.setCollideWorldBounds(true);
        this.ladder1.onWorldBounds = true;
        this.ladder1.body.allowGravity = false;
        this.ladder.add(this.ladder1);
        this.ladder1 =  this.physics.add.sprite(this.playerspawnx+570, this.playerspawny-160, 'ladder').setScale(this.AVATAR_SCALE);
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
        this.player.anims.play('arms_idle_right', true);

    }
    update() {
      if(keyR.isDown){
        this.scene.restart()
      };
    // Move Left
    if(cursors.left.isDown) {
      this.player.setVelocityX(-this.VELOCITY);
      if (pushorpull) {
        this.player.anims.play('arms_push_left', true);
      }
      else {  this.player.anims.play('arms_walk_left', true);
    };
      //jump while moving
      if (Phaser.Input.Keyboard.JustDown(cursors.up)  && this.jump_counter < 1) {  
          this.jump_counter +=1;
          this.player.setVelocityY(-this.jumpvelocity);
          this.player.anims.play('arms_jump_left', true);
          this.jumpaudio.play()

      }
  } 
      // Move Right
      else if(cursors.right.isDown) {
        this.player.setVelocityX(this.VELOCITY)
        if (pushorpull) {
          this.player.anims.play('arms_push_right', true);
        }
        else {  this.player.anims.play('arms_walk_right', true);
      };        
      //Jump while moving
        if (Phaser.Input.Keyboard.JustDown(cursors.up)&& this.jump_counter < 1) {
          this.jump_counter +=1;
          this.player.anims.play('arms_jump_right', true);
          this.player.setVelocityY(-this.jumpvelocity );
          this.jumpaudio.play();

      };
  } 
      //Jump
      else if (Phaser.Input.Keyboard.JustDown(cursors.up) && this.jump_counter < 1) 
      {
        this.jump_counter +=1;
        this.player.anims.play('arms_jump_right', true);
        this.player.setVelocityY(-this.jumpvelocity  );
        this.jumpaudio.play();

    }
      // Neutral
      else if (!cursors.right.isDown && !cursors.left.isDown) {
        this.player.body.setVelocityX(0);
                if (this.player.anims.isPlaying && this.player.anims.currentAnim.key === 'arms_walk_left') {
                      this.player.anims.play('arms_idle_left');
                }
                if (this.player.anims.isPlaying && this.player.anims.currentAnim.key === 'arms_walk_right') {
                  this.player.anims.play('arms_idle_right');
            }
    }
    if (this.player.body.touching.down) {
    this.jump_counter =0;
    }
  if (onladder && cursors.up.isDown) {
    this.player.anims.play('climb', true);
  }
  if (onladder && cursors.down.isDown) {
    this.player.anims.play('climb', true);
  }
  
  
   //Reset
   //if (this.player.y == 464) // bottom of screen
   //this.playerreset();
  
   //this.physics.world.wrap(this.player, 0);
  
  
   //If at exit Start next Scene
   if (inZone) {
    this.teleportaudio.play()
    this.scene.start('lvl9Scene');
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
      this.gearaudio.play()

      this.geargot = true;
      //this.geartween.onComplete.add(killgear);
      }
  
    }
  
  }
  