import Phaser from 'phaser';
import config from '../Config/config';
 
export default class CreditsScene extends Phaser.Scene {
  constructor () {
    super('Credits');
  }
 
  preload () {
  }
 
  create () {
    this.creditsText = this.add.text(0, 0, 'Credits', { fontSize: '32px', fill: '#fff' });
    this.madeByText = this.add.text(0, 0, 'Created By: Placeholder', { fontSize: '26px', fill: '#fff' });
    this.zone = this.add.zone(config.width/2, config.height/2, config.width, config.height);
    
    Phaser.Display.Align.In.Center(
    this.creditsText,
    this.zone
    );
    
    Phaser.Display.Align.In.Center(
    this.madeByText,
    this.zone
    );
    
    this.madeByText.setY(1000);
  }
};