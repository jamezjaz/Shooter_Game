import Phaser from 'phaser';
import config from '../Config/config';
import Button from '../Objects/Button';
 
export default class TitleScene extends Phaser.Scene {
  constructor () {
    super('Title');
  }
 
//   preload () {
//   }
 
  create () {
    // Game
    this.gameButton = new Button(this, config.width/2, config.height/2 - 100, 'blueButton1', 'blueButton2', 'PLAY', 'Game');
  
    // Options
    this.optionsButton = new Button(this, config.width/2, config.height/2, 'blueButton1', 'blueButton2', 'OPTIONS', 'Options');
  
    // Credits
    this.creditsButton = new Button(this, config.width/2, config.height/2 + 100, 'blueButton1', 'blueButton2', 'CREDITS', 'Credits');

    //Instruction
    this.InstrutionButton = new Button(this, config.width/2, config.height/2 - 200, 'blueButton1', 'blueButton2', 'INSTRUCTION', 'Instruction');
  
    this.model = this.sys.game.globals.model;
    if (this.model.musicOn === true && this.model.bgMusicPlaying === false) {
      this.bgMusic = this.sound.add('bgMusic', { volume: 0.5, loop: true });
      this.bgMusic.play();
      this.model.bgMusicPlaying = true;
      this.sys.game.globals.bgMusic = this.bgMusic;
    }

    this.add.image(400, 300, 'titleBg').setDepth(-1);
  }
};