/* eslint-disable prefer-const, no-unused-vars */

import Phaser from 'phaser';

import config from '../Config/config';
import Button from '../Objects/Button';

export default class InstructionScene extends Phaser.Scene {
  constructor() {
    super('Instruction');
  }

  create() {
    // Play
    this.playAgameButton = new Button(this, config.width / 2, config.height / 2 + 50, 'blueButton1', 'blueButton2', 'PLAY', 'Game');

    // Go Back
    this.backButton = new Button(this, config.width / 2, config.height / 2 + 150, 'blueButton1', 'blueButton2', 'GO BACK', 'Title');

    let howToPlayText;
    howToPlayText = this.add.text(400, 50, 'HOW TO PLAY', { fontSize: '64px', fill: '#006400' });
    howToPlayText.setOrigin(0.5);

    let instructionText;
    instructionText = this.add.text(150, 100, 'Move the ship up/down, left/right using arrow keys', { fontSize: '20px', fontStyle: 'bold', fill: '#000000' });
    instructionText = this.add.text(150, 160, 'Use the spacebar to shoot desert monsters.', { fontSize: '20px', fontStyle: 'bold', fill: '#000000' });

    this.add.image(400, 300, 'InstructionImage').setDepth(-1);
  }
}