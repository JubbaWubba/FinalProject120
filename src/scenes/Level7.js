class Lvl7 extends Phaser.Scene {
    constructor() {
      super("lvl7Scene");
    }
  
    preload() {
   }
  
    create() {
      this.backgroundImg = this.add.tileSprite(0, 0, 640, 480, 'background5').setOrigin(0, 0);

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
     //walk right
     this.anims.create({
      key: 'arms_walk_right',
      frames: this.anims.generateFrameNames('player', {
          prefix: 'arms_walk_right_',
          start: 1,
          end: 2,
          suffix: '',
          zeroPad: 1
      }),
      frameRate: 15,
      repeat: -1,
      repeatDelay: 20,
      yoyo: true
    });

    //walk left
    this.anims.create({
      key: 'arms_walk_left',
      frames: this.anims.generateFrameNames('player', {
          prefix: 'arms_walk_left_',
          start: 1,
          end: 2,
          suffix: '',
          zeroPad: 1
      }),
      frameRate: 15,
      repeat: -1,
      repeatDelay: 20,
      yoyo: true
    });
  

    //Idle Right
    this.anims.create({
      key: 'arms_idle_right',
      frames: this.anims.generateFrameNames('player', {
          prefix: 'arms_idle_right_',
          start: 1,
          end: 3,
          suffix: '',
          zeroPad: 1
      }),
      frameRate: 15,
      repeat: -1,
      repeatDelay: 1000,
      yoyo: true
    });

    //Idle left
    this.anims.create({
      key: 'arms_idle_left',
      frames: this.anims.generateFrameNames('player', {
          prefix: 'arms_idle_left_',
          start: 1,
          end: 3,
          suffix: '',
          zeroPad: 1
      }),
      frameRate: 15,
      repeat: -1,
      repeatDelay: 1000,
      yoyo: true
    });

  
    //Jump Right
    this.anims.create({
      key: 'arms_jump_right',
      frames: this.anims.generateFrameNames('player', {
          prefix: 'arms_jump_right_',
          start: 1,
          end: 3,
          suffix: '',
          zeroPad: 1
      }),
      frameRate: 15,
    });

    //Jump Right
    this.anims.create({
      key: 'arms_jump_left',
      frames: this.anims.generateFrameNames('player', {
          prefix: 'arms_jump_left_',
          start: 1,
          end: 3,
          suffix: '',
          zeroPad: 1
      }),
      frameRate: 15,
    });

    //Wakeup
    this.anims.create({
      key: 'arms_wakeup_right',
      frames: this.anims.generateFrameNames('player', {
          prefix: 'arms_wakeup_right_',
          start: 1,
          end: 3,
          suffix: '',
          zeroPad: 1
      }),
      frameRate: 15,
    });

    //Push Right
    this.anims.create({
      key: 'arms_push_right',
      frames: this.anims.generateFrameNames('player', {
          prefix: 'arms_push_right_',
          start: 1,
          end: 2,
          suffix: '',
          zeroPad: 1
      }),
      frameRate: 15,
    });

    //Push Left
    this.anims.create({
      key: 'arms_push_left',
      frames: this.anims.generateFrameNames('player', {
          prefix: 'arms_push_left_',
          start: 1,
          end: 2,
          suffix: '',
          zeroPad: 1
      }),
      frameRate: 15,
    });

        // Ground 
        this.ground = this.add.group();
        this.groundSprite = this.physics.add.sprite(320, game.config.height - 10, 'ground1');
        this.groundSprite.body.immovable = true;
        this.groundSprite.body.allowGravity = false;
        this.ground.add(this.groundSprite);

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

        // Player 
        this.player = this.physics.add.sprite(this.playerspawnx+50, this.playerspawny, 'player').setScale(this.AVATAR_SCALE);
        this.player.setCollideWorldBounds(true);
        this.player.onWorldBounds = true;
        this.player.setDepth(10000)



        // Moveable Obj 
        this.moveableobj = this.add.group();
        //this.moveableobj1 = this.physics.add.sprite(this.playerspawnx+200, this.playerspawny-3, 'box1').setScale(this.AVATAR_SCALE);
        //this.moveableobj1.body.immovable = true;
        //this.moveableobj1.setCollideWorldBounds(true);
        //this.moveableobj1.body.allowGravity = false;
        //this.moveableobj1.onWorldBounds = true;
        //this.moveableobj.add(this.moveableobj1);


        this.moveableobj2 = this.physics.add.sprite(this.playerspawnx+200, this.playerspawny-3, 'box1').setScale(this.AVATAR_SCALE);
        this.moveableobj2.body.immovable = true;
        this.moveableobj2.setCollideWorldBounds(true);
        this.moveableobj2.body.allowGravity = false;
        this.moveableobj2.onWorldBounds = true;
        this.moveableobj2.setDepth(900)
        this.moveableobj.add(this.moveableobj2);

        this.moveableobj3 = this.physics.add.sprite(this.playerspawnx+200, this.playerspawny-105, 'box1').setScale(this.AVATAR_SCALE);
        this.moveableobj3.body.immovable = true;
        this.moveableobj3.setCollideWorldBounds(true);
        this.moveableobj3.body.allowGravity = false;
        this.moveableobj3.onWorldBounds = true;
        this.moveableobj3.setDepth(900)
        this.moveableobj.add(this.moveableobj3);

        this.gear = this.physics.add.sprite(game.config.width-550 , game.config.height-229, 'gear').setScale(.25);
        this.physics.add.collider(this.gear, this.ground);
        this.physics.add.overlap(this.player, this.gear, this.gearcollect, null, this);
    

        //Ladder
        //this.ladder = this.add.group();
        //this.ladder1 =  this.physics.add.sprite(this.playerspawnx+100, this.playerspawny-5, 'teleporter').setScale(this.AVATAR_SCALE);
        //this.ladder1.body.immovable = true;
        //this.ladder1.setCollideWorldBounds(true);
        //this.ladder1.onWorldBounds = true;
        //this.ladder1.body.allowGravity = false;
        //this.ladder.add(this.ladder1);


        // Cursor 
        cursors = this.input.keyboard.createCursorKeys();
  
        // Add physics collider
        this.physics.add.collider(this.player, this.ground,null,this.checkUp.bind(this));
        this.physics.add.collider(this.moveableobj, this.moveableobj);
        this.physics.add.collider(this.moveableobj, this.ground);
        // Physics object and Push and Pull
        this.physics.add.collider(this.player, this.moveableobj, function (player, obj) {

          if(keyF.isDown) {
            if(cursors.left.isDown && player.body.touching.left && !obj.body.touching.left) { 
              pushorpull = true;
              player.x -=1
              obj.x -=1
            }
            if(cursors.right.isDown  && player.body.touching.right && obj.x <=496) {
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
      this.exit = this.physics.add.sprite(game.config.width-30, game.config.height/1.5+35, 'teleporter').setScale(this.AVATAR_SCALE);
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
    this.tutorialtext = this.add.text(borderUISize*-0.5 + borderPadding*2.8, borderUISize + borderPadding*1.5, "Hold F while moving to push certain items", textConfig);
    this.player.anims.play('arms_wakeup_right', true);

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
    
  
   //Reset
   //if (this.player.y == 464) // bottom of screen
   //this.playerreset();

   //this.physics.world.wrap(this.player, 0);


   //If at exit Start next Scene
   if (inZone) {
    this.teleportaudio.play()
    this.scene.start('lvl8Scene');
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