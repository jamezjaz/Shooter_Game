import Phaser from 'phaser';
 
export default class BootScene extends Phaser.Scene {
  constructor () {
    super('Boot');
  }
 
  preload () {
    // load images
    this.load.image('bootImg', './src/assets/boot_logo.png');
  }
 
  create () {
    this.scene.start('Preloader');
  }
};