class Play extends Phaser.Scene {
    constructor() {
      super("lvl1Scene");
    }

    preload() {
      this.load.image('ground', './assets/monster.png');
      this.load.image('platform1', './assets/platform1.png');
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
        this.groundSprite = this.physics.add.sprite(0+180, 540 - this.GROUND_HEIGHT, 'platform1');
        this.groundSprite.body.immovable = true;
        this.groundSprite.body.allowGravity = false;
        this.ground.add(this.groundSprite);
        this.groundSprite = this.physics.add.sprite(0+330, 540 - this.GROUND_HEIGHT, 'platform1');
        this.groundSprite.body.immovable = true;
        this.groundSprite.body.allowGravity = false;
        this.ground.add(this.groundSprite);
        this.groundSprite = this.physics.add.sprite(0+480, 540 - this.GROUND_HEIGHT, 'platform1');
        this.groundSprite.body.immovable = true;
        this.groundSprite.body.allowGravity = false;
        this.ground.add(this.groundSprite);
        this.groundSprite = this.physics.add.sprite(0+700, game.config.height - this.GROUND_HEIGHT, 'ground');
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
      this.player.setVelocityY(-690);

    } else if (!cursors.right.isDown && !cursors.left.isDown) {
        this.player.body.setVelocityX(0);
   }

   //this.physics.world.wrap(this.player, 0);

    }




  
  }