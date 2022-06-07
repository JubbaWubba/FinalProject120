class Lvl6 extends Phaser.Scene {
    constructor() {
      super("lvl6Scene");
    }
  
    preload() {
   }
  
    create() {
      this.backgroundImg = this.add.tileSprite(0, 0, 640, 480, 'background4').setOrigin(0, 0);

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
        this.groundSprite = this.physics.add.sprite(480, game.config.height - 40, 'box1');
        this.groundSprite.body.immovable = true;
        this.groundSprite.body.allowGravity = false;
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
      this.exit = this.physics.add.sprite(game.config.width-10, game.config.height-375, 'teleporter').setScale(this.AVATAR_SCALE);
      this.physics.add.collider(this.exit, this.ground);
      this.exit.play({ key: 'working', repeat: 40000000000 });

      this.gear = this.physics.add.sprite(game.config.width-25 , game.config.height-128, 'gear').setScale(.25);
      this.physics.add.collider(this.gear, this.ground);
      this.physics.add.overlap(this.player, this.gear, this.gearcollect, null, this);
  

      // Exit Check
      this.physics.add.overlap(this.player, this.exit, function () {
          inZone =true;
        })
        this.player.anims.play('leg_idle_right', true);
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
    this.scene.start('lvl7Scene');
    if(this.geargot)     {
      gearscore +=1;
    }
  }
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