import Phaser from 'phaser';
import config from '../Config/config';
 
export default class TitleScene extends Phaser.Scene {
  constructor () {
    super('Title');
  }
 
  preload () {
  }
 
  create () {
    // Game
    this.gameButton = this.add.sprite(100, 200, 'blueButton1').setInteractive();
    this.centerButton(this.gameButton, 1);
    
    this.gameText = this.add.text(0, 0, 'PLAY', { fontSize: '32px', fill: '#fff' });
    this.centerButtonText(this.gameText, this.gameButton);
    
    this.gameButton.on('pointerdown', function (pointer) {
    this.scene.start('Game');
    }.bind(this));
    
    this.input.on('pointerover', function (event, gameObjects) {
    gameObjects[0].setTexture('blueButton2');
    });
    
    this.input.on('pointerout', function (event, gameObjects) {
    gameObjects[0].setTexture('blueButton1');
    });
  }

  centerButton (gameObject, offset = 0) {
    Phaser.Display.Align.In.Center(
      gameObject,
      this.add.zone(config.width/2, config.height/2 - offset * 100, config.width, config.height)
    );
  }
   
  centerButtonText (gameText, gameButton) {
    Phaser.Display.Align.In.Center(
      gameText,
      gameButton
    );
  }
};