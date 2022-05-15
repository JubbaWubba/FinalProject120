class Play extends Phaser.Scene {
  constructor() {
    super("playScene");
  }

  preload() {
    this.load.image('ground', './assets/monster.png');
    this.load.spritesheet('player', './assets/Bug01.png', {frameWidth: 32, frameHeight: 32, startFrame: 0, endFrame: 3});
  }

  create() {
    // variables and settings
    this.VELOCITY = 500;
    this.GROUND_HEIGHT = 35;
    this.AVATAR_SCALE = 1;
    this.jump_counter =0;
  

      // Ground 
      this.ground = this.add.group();
      this.groundSprite = this.physics.add.sprite(0+400, game.config.height - this.GROUND_HEIGHT, 'ground');
      this.groundSprite.body.immovable = true;
      this.groundSprite.body.allowGravity = false;
      this.ground.add(this.groundSprite);


      // Player 
      this.player = this.physics.add.sprite(game.config.width/2, game.config.height/2, 'player').setScale(this.AVATAR_SCALE);
      
      // Cursor 
      cursors = this.input.keyboard.createCursorKeys();

      // Add physics collider
      this.physics.add.collider(this.player, this.ground);
  }
  update() {
    // Move Left
    if(cursors.left.isDown) {
      this.player.setVelocityX(-this.VELOCITY);
      //jump while moving
      if (Phaser.Input.Keyboard.JustDown(cursors.up)  && this.jump_counter < 1) {  
          this.jump_counter +=1;
          this.player.setVelocityY(-this.VELOCITY);
      }
  } 
  // Move Right
  else if(cursors.right.isDown) {
    this.player.setVelocityX(this.VELOCITY)
    //Jump while moving
    if (Phaser.Input.Keyboard.JustDown(cursors.up)&& this.jump_counter < 1) {
        this.jump_counter +=1;
        this.player.setVelocityY(-this.VELOCITY  );
    };
  } 
  //Jump
  else if (Phaser.Input.Keyboard.JustDown(cursors.up) && this.jump_counter < 1) 
  {
    this.jump_counter +=1;
    this.player.setVelocityY(-this.VELOCITY  );
 }
  // Neutral
  else if (!cursors.right.isDown && !cursors.left.isDown &&(!Phaser.Input.Keyboard.JustDown(cursors.up))) 
  {
      this.player.setVelocityX(0);
 }
 if (this.player.body.touching.down) {
   this.jump_counter =0;
 }
 this.physics.world.wrap(this.player, 0);

  }





}