import Phaser from 'phaser';
 
export default class OptionsScene extends Phaser.Scene {
  constructor () {
    super('Options');
  }
 
  preload () {
  }
 
  create () {
    this.musicOn = true;
    this.soundOn = true;
    
    this.text = this.add.text(300, 100, 'Options', { fontSize: 40 });
    this.musicButton = this.add.image(200, 200, 'checkedBox');
    this.musicText = this.add.text(250, 190, 'Music Enabled', { fontSize: 24 });
    
    this.soundButton = this.add.image(200, 300, 'checkedBox');
    this.soundText = this.add.text(250, 290, 'Sound Enabled', { fontSize: 24 });
    
    this.musicButton.setInteractive();
    this.soundButton.setInteractive();
    
    this.musicButton.on('pointerdown', function () {
    this.musicOn = !this.musicOn;
    this.updateAudio();
    }.bind(this));
    
    this.soundButton.on('pointerdown', function () {
    this.soundOn = !this.soundOn;
    this.updateAudio();
    }.bind(this));
    
    this.updateAudio();
  }

  updateAudio() {
    if (this.musicOn === false) {
      this.musicButton.setTexture('box');
    } else {
      this.musicButton.setTexture('checkedBox');
    }
    
    if (this.soundOn === false) {
      this.soundButton.setTexture('box');
    } else {
      this.soundButton.setTexture('checkedBox');
    }
  }
};