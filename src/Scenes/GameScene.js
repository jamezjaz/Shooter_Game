import Phaser from 'phaser';
 
export default class GameScene extends Phaser.Scene {
  constructor () {
    super('Game');
  }

  init() {
    this.width = this.game.config.width;
    this.height = this.game.config.height;
  }
 
  preload () {
    // load images
    this.load.image('logo', './src/assets/logo.png');
    this.load.spritesheet('playerShip', './src/assets/jet.png', {
      frameWidth: 16,
      frameHeight: 24,
    });
  }

  addPlayerShip() {
    this.playerShip = this.physics.add.sprite(
      (this.width / 2) - 8,
      this.height - 64,
      'playerShip',
    );

    this.playerShip.setScale(2);
    this.playerShip.setCollideWorldBounds(true);
  }

  movePlayerShip() {
    this.playerShip.setVelocity(0);
    if (this.cusorKeys.left.isDown) {
      this.playerShip.setVelocityX(-200);
    } else if (this.cusorKeys.right.isDown) {
      this.playerShip.setVelocityX(200);
    }
    if (this.cusorKeys.up.isDown) {
      this.playerShip.setVelocityY(-200);
    } else if (this.cusorKeys.down.isDown) {
      this.playerShip.setVelocityY(200);
    }
  }
 
  create () {
    this.add.image(400, 300, 'logo');
    this.addPlayerShip();

    this.cusorKeys = this.input.keyboard.createCursorKeys();
  }

  update() {
    this.movePlayerShip();
  }
};