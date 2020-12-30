import Phaser from 'phaser';
 
export default class PreloaderScene extends Phaser.Scene {
  constructor () {
    super('Preloader');
  }
 
  preload () {
    // add logo image
    this.add.image(400, 200, 'bootImg');
   
    // display progress bar
    const progressBar = this.add.graphics();
    const progressBox = this.add.graphics();
    progressBox.fillStyle(0x222222, 0.8);
    progressBox.fillRect(240, 270, 320, 50);
   
    const width = this.cameras.main.width;
    const height = this.cameras.main.height;
    const loadingText = this.make.text({
      x: width / 2,
      y: height / 2 - 50,
      text: 'Loading Game...',
      style: {
        font: '20px monospace',
        fill: '#940000'
      }
    });
    loadingText.setOrigin(0.5, 0.5);
   
    const percentText = this.make.text({
      x: width / 2,
      y: height / 2 - 5,
      text: '0%',
      style: {
        font: '18px monospace',
        fill: '#01301f'
      }
    });
    percentText.setOrigin(0.5, 0.5);
   
    const assetText = this.make.text({
      x: width / 2,
      y: height / 2 + 50,
      text: '',
      style: {
        font: '18px monospace',
        fill: '#ffffff'
      }
    });
    assetText.setOrigin(0.5, 0.5);
   
    // update progress bar
    this.load.on('progress', function (value) {
      percentText.setText(parseInt(value * 100) + '%');
      progressBar.clear();
      progressBar.fillStyle(0xffffff, 1);
      progressBar.fillRect(250, 280, 300 * value, 30);
    });
   
    // update file progress text
    this.load.on('fileprogress', function (file) {
      assetText.setText('Loading Assets: ' + file.key);
    });
   
    // remove progress bar when complete
    this.load.on('complete', function () {
      progressBar.destroy();
      progressBox.destroy();
      loadingText.destroy();
      percentText.destroy();
      assetText.destroy();
      this.ready();
    }.bind(this));
       
    this.timedEvent = this.time.delayedCall(3000, this.ready, [], this);
   
    // load assets needed in our game
    this.load.image('blueButton1', './src/assets/ui/blue_button02.png');
    this.load.image('blueButton2', './src/assets/ui/blue_button03.png');
    this.load.image('logo', './src/assets/logo.png');

    this.load.image('box', './src/assets/ui/grey_box.png');
    this.load.image('checkedBox', './src/assets/ui/blue_boxCheckmark.png');
    this.load.audio('bgMusic', ['./src/assets/conflict_theme.mp3']);

    this.load.image('titleBg', './src/assets/title_bg.png');

    this.load.spritesheet('playerShip', './src/assets/jet.png', {
      frameWidth: 16,
      frameHeight: 24,
    });
    this.load.spritesheet('monster', './src/assets/monster.png', {
      frameWidth: 72,
      frameHeight: 64,
    });
    this.load.spritesheet('enemyShip', './src/assets/enemyShip.png', {
      frameWidth: 32,
      frameHeight: 16,
    });
    this.load.image('monsterLaser', './src/assets/monsterLaser.png');

    this.load.spritesheet('playerLaser', './src/assets/playerLaser.png', {
      frameWidth: 32,
      frameHeight: 32,
    });
    this.load.spritesheet('explosion', './src/assets/explosion.png', {
      frameWidth: 16,
      frameHeight: 16,
    });

    this.load.audio('explode0', ['./src/assets/explosionSound0.wav']);
    this.load.audio('explode1', ['./src/assets/explosionSound1.wav']);
    this.load.audio('laserSound', ['./src/assets/laserSound.wav']);
  }

  init () {
    this.readyCount = 0;
  }
   
  ready () {
    this.scene.start('Title');
    // this.scene.start('Options');
    // this.scene.start('Credits');
    // this.scene.start('Title');
    this.readyCount += 1;
    if (this.readyCount === 2) {
    //   this.scene.start('Title');
    }
  }
 
  create () {
  }
};