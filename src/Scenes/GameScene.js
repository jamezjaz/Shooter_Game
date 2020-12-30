import Phaser from 'phaser';

import Player from '../scripts/Player';
import Monster from '../scripts/Moster';
 
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
    // this.load.spritesheet('playerShip', './src/assets/jet.png', {
    //   frameWidth: 16,
    //   frameHeight: 24,
    // });
  }

  // addPlayerShip() {
  //   this.playerShip = this.physics.add.sprite(
  //     (this.width / 2) - 8,
  //     this.height - 64,
  //     'playerShip',
  //   );

  //   this.playerShip.setScale(2);
  //   this.playerShip.setCollideWorldBounds(true);
  // }

  movePlayerShip() {
    // this.playerShip.setVelocity(0);
    if (this.cusorKeys.left.isDown) {
      this.player.moveLeft();
    } else if (this.cusorKeys.right.isDown) {
      this.player.moveRight();
    }
    if (this.cusorKeys.up.isDown) {
      this.player.moveUp();
    } else if (this.cusorKeys.down.isDown) {
      this.player.moveDown();
    }
  }
 
  create () {
    this.add.image(400, 300, 'logo');
    // this.addPlayerShip();
    this.anims.create({
      key: 'playerShip',
      frames: this.anims.generateFrameNumbers('playerShip'),
      frameRate: 20,
      repeat: -1,
    });

    this.anims.create({
      key: 'monster',
      frames: this.anims.generateFrameNumbers('monster'),
      frameRate: 20,
      repeat: -1,
    });

    this.anims.create({
      key: 'enemyShip',
      frames: this.anims.generateFrameNumbers('enemyShip'),
      frameRate: 20,
      repeat: -1,
    });

    this.player = new Player(
      this,
      (this.width / 2) - 8,
      this.height - 64,
      'playerShip',
    );
    this.player.setScale(2);

    this.cusorKeys = this.input.keyboard.createCursorKeys();
    this.keySpace = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SPACE);

    this.enemies = this.add.group();
    this.enemyLasers = this.add.group();
    this.playerLasers = this.add.group();

    this.time.addEvent({
      delay: 100,
      callback() {
        let enemy = null;
        if (Phaser.Math.Between(0, 10) >= 3) {
          enemy = new Monster(this, Phaser.Math.Between(0, this.game.config.width), 0);
        }
        if (enemy !== null) {
          this.enemies.add(enemy);
        }
      },
      callbackScope: this,
      loop: true,
    });
  }

  update() {
    this.player.update();
    this.movePlayerShip();
  }
};