class Lvl4 extends Phaser.Scene {
    constructor() {
      super("lvl4Scene");
    }
  
    preload() {
   }
  
    create() {
      this.backgroundImg = this.add.tileSprite(0, 0, 640, 480, 'background3').setOrigin(0, 0);

      // variables and settings
      this.VELOCITY = 300;
      this.GROUND_HEIGHT = 35;
      this.AVATAR_SCALE = 1;
      this.physics.world.gravity.y = 2700;
      this.jumpvelocity =725
      this.playerspawnx =game.config.width-600;
      this.playerspawny = game.config.height/2+125;
      keyR=this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.R);
      this.geargot = false;


        // Sound 
        this.jumpaudio = this.sound.add("jump", {volume: .05 });
        this.teleportaudio = this.sound.add("teleport", {volume: .1 });
        this.gearaudio = this.sound.add("gearaudio", {volume: .05 });
        this.fall = this.sound.add("fall", {volume: .05 });

        //animations 
        this.anims.create({
          key: 'working',
          frames: this.anims.generateFrameNumbers('teleporter', { start: 0, end: 7, first: 0}),
          frameRate: 30
      }); 

      //walk right
      this.anims.create({
        key: 'leg_walk_right',
        frames: this.anims.generateFrameNames('player', {
            prefix: 'legs_walk_right_',
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
        key: 'leg_walk_left',
        frames: this.anims.generateFrameNames('player', {
            prefix: 'legs_walk_left_',
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
        key: 'leg_idle_right',
        frames: this.anims.generateFrameNames('player', {
            prefix: 'legs_idle_right_',
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
        key: 'leg_idle_left',
        frames: this.anims.generateFrameNames('player', {
            prefix: 'legs_idle_left_',
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
        key: 'legs_jump_right',
        frames: this.anims.generateFrameNames('player', {
            prefix: 'legs_jump_right_',
            start: 1,
            end: 3,
            suffix: '',
            zeroPad: 1
        }),
        frameRate: 15,
      });

      //Jump Right
      this.anims.create({
        key: 'legs_jump_left',
        frames: this.anims.generateFrameNames('player', {
            prefix: 'legs_jump_left_',
            start: 1,
            end: 3,
            suffix: '',
            zeroPad: 1
        }),
        frameRate: 15,
      });

      //Wakeup
      this.anims.create({
        key: 'legs_wakeup_right',
        frames: this.anims.generateFrameNames('player', {
            prefix: 'legs_wakeup_right_',
            start: 1,
            end: 3,
            suffix: '',
            zeroPad: 1
        }),
        frameRate: 15,
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

        this.gear = this.physics.add.sprite(game.config.width-160 , game.config.height-115, 'gear').setScale(.25);
        this.physics.add.collider(this.gear, this.ground);
        this.physics.add.overlap(this.player, this.gear, this.gearcollect, null, this);
    
      //Door, Exit
      this.exit = this.physics.add.sprite(game.config.width-15, game.config.height-115, 'teleporter').setScale(this.AVATAR_SCALE);
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
    this.player.anims.play('legs_wakeup_right', true);

    }
    update() {
      if(keyR.isDown){
        this.scene.restart()
      };
    // Move Left
    if(cursors.left.isDown) {
      this.player.setVelocityX(-this.VELOCITY);
      this.player.anims.play('leg_walk_left', true);
      //jump while moving
      if (Phaser.Input.Keyboard.JustDown(cursors.up)  && this.jump_counter < 1) {  
          this.jump_counter +=1;
          this.player.setVelocityY(-this.jumpvelocity);
          this.player.anims.play('legs_jump_left', true);
          this.jumpaudio.play()

      }
  } 
  // Move Right
  else if(cursors.right.isDown) {
    this.player.setVelocityX(this.VELOCITY)
    this.player.anims.play('leg_walk_right', true);
    //Jump while moving
    if (Phaser.Input.Keyboard.JustDown(cursors.up)&& this.jump_counter < 1) {
        this.jump_counter +=1;
        this.player.anims.play('legs_jump_right', true);
        this.player.setVelocityY(-this.jumpvelocity );
        this.jumpaudio.play();

    };
  } 
  //Jump
  else if (Phaser.Input.Keyboard.JustDown(cursors.up) && this.jump_counter < 1) 
  {
    this.jump_counter +=1;
    this.player.anims.play('legs_jump_right', true);
    this.player.setVelocityY(-this.jumpvelocity  );
    this.jumpaudio.play();

 }
  // Neutral
  else if (!cursors.right.isDown && !cursors.left.isDown) {
    this.player.body.setVelocityX(0);
            if (this.player.anims.isPlaying && this.player.anims.currentAnim.key === 'leg_walk_left') {
                  this.player.anims.play('leg_idle_left');
             }
             if (this.player.anims.isPlaying && this.player.anims.currentAnim.key === 'leg_walk_right') {
              this.player.anims.play('leg_idle_right');
         }
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
    if(this.geargot)     {
      gearscore +=1;
    }
  };
  inZone = false;
    }

    playerreset() {
      this.scene.restart()
      this.fall.play()
     
    };




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