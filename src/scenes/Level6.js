class Play extends Phaser.Scene {
    constructor() {
      super("playScene");
    }
  
    preload() {
      this.load.image('ground', './assets/monster.png');
      this.load.image('platform1', './assets/platform1.png');
      this.load.image('ground1', './assets/ground1.png');
      this.load.image('platform2', './assets/platform2.png');
      this.load.image('platform3', './assets/platform3.png');
      this.load.image('platform4', './assets/platform4.png');
      this.load.image('box1', './assets/box1.png');
      this.load.spritesheet('player', './assets/Bug01.png', {frameWidth: 32, frameHeight: 32, startFrame: 0, endFrame: 3});
    }
  
    create() {
      // variables and settings
      this.VELOCITY = 500;
      this.GROUND_HEIGHT = 35;
      this.AVATAR_SCALE = 1;
      this.physics.world.gravity.y = 3000;
    
  
  
  
        // Ground 
        this.ground = this.add.group();
        this.groundSprite = this.physics.add.sprite(-50, game.config.height - this.GROUND_HEIGHT, 'ground');
        this.groundSprite.body.immovable = true;
        this.groundSprite.body.allowGravity = false;
        this.ground.add(this.groundSprite);
        this.groundSprite = this.physics.add.sprite(320, 540 - 600, 'platform1');
        this.groundSprite.body.immovable = true;
        this.groundSprite.body.allowGravity = false;
        this.ground.add(this.groundSprite);
        this.groundSprite = this.physics.add.sprite(320, 540 - 300, 'platform1');
        this.groundSprite.body.immovable = true;
        this.groundSprite.body.allowGravity = false;
        this.ground.add(this.groundSprite);
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
        this.groundSprite = this.physics.add.sprite(725, game.config.height - 295, 'ground');
        this.groundSprite.body.immovable = true;
        this.groundSprite.body.allowGravity = false;
        this.ground.add(this.groundSprite);
  
        // Player 
        this.player = this.physics.add.sprite(game.config.width-600, game.config.height/2, 'player').setScale(this.AVATAR_SCALE);
        
        // Cursor 
        cursors = this.input.keyboard.createCursorKeys();
  
        // Add physics collider
        this.physics.add.collider(this.player, this.ground);
    }
    update() {
      if(cursors.left.isDown) {
        this.player.body.setVelocityX(-this.VELOCITY);
  
  
    } else if(cursors.right.isDown) {
        this.player.body.setVelocityX(this.VELOCITY);
    }else if(this.player.body.touching.down && Phaser.Input.Keyboard.JustDown(cursors.up)) {
      // set jump velocity here
      this.player.setVelocityY(-1000);
  
    } else if (!cursors.right.isDown && !cursors.left.isDown) {
        this.player.body.setVelocityX(0);
   }
  
   //this.physics.world.wrap(this.player, 0);
  
    }
  
  
  
  
  
  }