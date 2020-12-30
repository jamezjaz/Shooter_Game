import Entity from './Entity';

export default class MonsterLaser extends Entity {
  constructor(scene, x, y) {
    super(scene, x, y, 'monsterLaser');
    this.body.velocity.y = 200;
  }
}