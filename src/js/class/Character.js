export class Character {
  constructor(name, type) {
    const types = ['Bowerman', 'Daemon', 'Magician', 'Swordsman', 'Undead', 'Zombie'];
    if (name.length >= 2 && name.length <= 10) {
      this.name = name;
    } else {
      throw new Error('Некорректная длина имени');
    }
    if (types.indexOf(type) >= 0) {
      this.type = type;
    } else {
      throw new Error('Некорректный тип');
    }
    this.health = 100;
    this.level = 1;
    this._attack = 1;
    this.defence = 1;
  }

  levelUp() {
    if (this.health > 0) {
      this.level += 1;
      this._attack *= 1.2;
      this.defence *= 1.2;
      this.health = 100;
    } else {
      throw new Error('нельзя повысить левел умершего');
    }
  }

  damage(points, stoned=false) {
    const types = ['Daemon', 'Magician'];
    if (this.health >= 0) {
      this.health -= points * (1 - this.defence / 100);
    }

    if (stoned === true && types.indexOf(this.type) >= 0) {
      this.stoned = true;
    }
  }

  get attack() {
    return this._attack;
  }

  set attack(distance) {
    const types = ['Daemon', 'Magician'];
    if (types.indexOf(this.type) >= 0) {
      let result = -0.1*distance + 1.1
      if (distance < 1) {
        throw new Error('Нельзя бить по себе');
      } else if (distance > 5) {
        throw new Error('Максимальная дистация атаки 5 клеток');
      } else {
        result *= this._attack;
      }
  
      if (this.stoned === true) {
        result -= Math.log2(distance) * 5;
      }
  
      this._attack = result;
    }
  }
}
