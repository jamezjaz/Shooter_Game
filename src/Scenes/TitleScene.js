import Phaser from 'phaser';
import config from '../Config/config';
 
export default class TitleScene extends Phaser.Scene {
  constructor () {
    super('Title');
  }
 
//   preload () {
//   }
 
  create () {
    // Game
    this.gameButton = this.add.sprite(100, 200, 'blueButton1').setInteractive();
    this.centerButton(this.gameButton, 1);
    
    this.gameText = this.add.text(0, 0, 'PLAY', { fontSize: '32px', fill: '#fff' });
    this.centerButtonText(this.gameText, this.gameButton);
    
    this.gameButton.on('pointerdown', function (pointer) {
    this.scene.start('Game');
    }.bind(this));

    // Options
    this.optionsButton = this.add.sprite(300, 200, 'blueButton1').setInteractive();
    this.centerButton(this.optionsButton);
    
    this.optionsText = this.add.text(0, 0, 'OPTIONS', { fontSize: '32px', fill: '#fff' });
    this.centerButtonText(this.optionsText, this.optionsButton);
    
    this.optionsButton.on('pointerdown', function (pointer) {
    this.scene.start('Options');
    }.bind(this));

    // Credits
    this.creditsButton = this.add.sprite(300, 200, 'blueButton1').setInteractive();
    this.centerButton(this.creditsButton, -1);
    
    this.creditsText = this.add.text(0, 0, 'CREDITS', { fontSize: '32px', fill: '#fff' });
    this.centerButtonText(this.creditsText, this.creditsButton);
    
    this.creditsButton.on('pointerdown', function (pointer) {
    this.scene.start('Credits');
    }.bind(this));
    
    this.input.on('pointerover', function (event, gameObjects) {
    gameObjects[0].setTexture('blueButton2');
    });
    
    this.input.on('pointerout', function (event, gameObjects) {
    gameObjects[0].setTexture('blueButton1');
    });

    this.model = this.sys.game.globals.model;
    if (this.model.musicOn === true && this.model.bgMusicPlaying === false) {
      this.bgMusic = this.sound.add('bgMusic', { volume: 0.5, loop: true });
      this.bgMusic.play();
      this.model.bgMusicPlaying = true;
    }
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