import Phaser from 'phaser';

import Entity from '../scripts/Entity';
import MonsterLaser from '../scripts/MonsterLaser';

export default class Monster extends Entity {
  constructor(scene, x, y) {
    super(scene, x, y, 'monster', 'Monster');
    this.play('monster');
    this.body.velocity.y = Phaser.Math.Between(50, 100);

    this.shootTimer = this.scene.time.addEvent({
      delay: 1000,
      callback() {
        const laser = new MonsterLaser(
          this.scene,
          this.x,
          this.y,
        );
        laser.setScale(this.scaleX);
        this.scene.enemyLasers.add(laser);
      },
      callbackScope: this,
      loop: true,
    });
  }

  onDestroy() {
    if (this.shootTimer !== undefined) {
      if (this.shootTimer) {
        this.shootTimer.remove(false);
      }
    }
  }
}