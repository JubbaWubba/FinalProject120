class Lvl2 extends Phaser.Scene {
    constructor() {
      super("lvl2Scene");
    }
  
    preload() {
    
    }
  
    create() {
      this.backgroundImg = this.add.tileSprite(0, 0, 640, 480, 'background1').setOrigin(0, 0);

      // variables and settings
      this.VELOCITY = 300;
      this.GROUND_HEIGHT = 35;
      this.AVATAR_SCALE = 1;
      this.physics.world.gravity.y = 2700;
      this.jumpvelocity =695;
      this.playerspawnx = game.config.width-600;
      this.playerspawny =game.config.height/1.5+33;
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
      
        // Idle Right
        this.anims.create({
          key: 'idle_right',
          frames: this.anims.generateFrameNames('player', {
              prefix: 'head_idle_right_',
              start: 1,
              end: 3,
              suffix: '',
              zeroPad: 1
          }),
          frameRate: 15,
          repeat: -1,
          repeatDelay: 5000,
          yoyo: true
        });

        // Idle left
        this.anims.create({
          key: 'idle_left',
          frames: this.anims.generateFrameNames('player', {
              prefix: 'head_idle_left_',
              start: 1,
              end: 3,
              suffix: '',
              zeroPad: 1
          }),
          frameRate: 15,
          repeat: -1,
          repeatDelay: 5000,
          yoyo: true
        });

        // Walk Right
        this.anims.create({
          key: 'walk_right',
          frames: this.anims.generateFrameNames('player', {
              prefix: 'head_walk_right_',
              start: 1,
              end: 2,
              suffix: '',
              zeroPad: 1
          }),
          frameRate: 15,
          repeat: -1,
        });
                // Walk left
                this.anims.create({
                  key: 'walk_left',
                  frames: this.anims.generateFrameNames('player', {
                      prefix: 'head_walk_left_',
                      start: 1,
                      end: 2,
                      suffix: '',
                      zeroPad: 1
                  }),
                  frameRate: 15,
                  repeat: -1,
                });

        // Jump Right
        this.anims.create({
          key: 'jump_right',
          frames: this.anims.generateFrameNames('player', {
              prefix: 'head_jump_right_',
              start: 1,
              end: 3,
              suffix: '',
              zeroPad: 1
          }),
          frameRate: 15,
          repeat: -1,
        });

        // Ground 
        this.ground = this.add.group();
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
        this.groundSprite = this.physics.add.sprite(500, game.config.height - 130, 'box1');
        this.groundSprite.body.immovable = true;
        this.groundSprite.body.allowGravity = false;
        this.ground.add(this.groundSprite);
        this.groundSprite = this.physics.add.sprite(50, game.config.height - 230, 'box1');
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
      //Door
      this.exit = this.physics.add.sprite(game.config.width-30, game.config.height/1.5+35, 'teleporter').setScale(this.AVATAR_SCALE);
      this.physics.add.collider(this.exit, this.ground);
      this.exit.play({ key: 'working', repeat: 40000000000 });

      this.gear = this.physics.add.sprite(game.config.width-590 , game.config.height-267, 'gear').setScale(.25);
      this.physics.add.collider(this.gear, this.ground);
      this.physics.add.overlap(this.player, this.gear, this.gearcollect, null, this);
      this.player.anims.play('idle_right', true);


        // Exit Check
        this.physics.add.overlap(this.player, this.exit, function () {
          inZone =true;
        })
    }
    update() {
      if(keyR.isDown){
        this.scene.restart()
      };
      if(cursors.left.isDown) {
        this.player.body.setVelocityX(-this.VELOCITY);
        this.player.anims.play('walk_left', true);

        if (Phaser.Input.Keyboard.JustDown(cursors.up)  && this.player.body.touching.down) {  
          this.jumpaudio.play()
          this.player.setVelocityY(-this.jumpvelocity);
      }

    } else if(cursors.right.isDown) {
        this.player.body.setVelocityX(this.VELOCITY);
        this.player.anims.play('walk_right', true);
        if (Phaser.Input.Keyboard.JustDown(cursors.up)  && this.player.body.touching.down) {  
          this.player.setVelocityY(-this.jumpvelocity);
          this.jumpaudio.play()


      }
    }else if(this.player.body.touching.down && Phaser.Input.Keyboard.JustDown(cursors.up)) {
      // set jump velocity here
      this.player.setVelocityY(-this.jumpvelocity);
      this.jumpaudio.play()


    } else if (!cursors.right.isDown && !cursors.left.isDown) {
        this.player.body.setVelocityX(0);
                if (this.player.anims.isPlaying && this.player.anims.currentAnim.key === 'walk_left') {
                      this.player.anims.play('idle_left');
                 }
                 if (this.player.anims.isPlaying && this.player.anims.currentAnim.key === 'walk_right') {
                  this.player.anims.play('idle_right');
             }
   }
   //this.physics.world.wrap(this.player, 0);
     //Reset
     if (this.player.y == 464) // bottom of screen
     this.playerreset();
  
     //this.physics.world.wrap(this.player, 0);
  
  
     //If at exit Start next Scene
     if (inZone) {
      this.teleportaudio.play()
      this.scene.start('lvl3Scene');
      if(this.geargot)     {
        gearscore +=1;
      }
    }
    inZone = false;
      }
  
      playerreset() {
        this.player.y= this.playerspawny
        this.player.x =this.playerspawnx
       
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