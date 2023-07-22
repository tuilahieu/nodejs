// const dog = {
//   damage: 100,
//   hp: 1000,
//   df: 50,
//   attack: function (target) {
//     return (target.hp = target.hp - this.damage + target.df);
//   },
//   getHp: function () {
//     return this.hp > 0 ? this.hp : 0;
//   },
// };
// const bird = {
//   damage: 200,
//   hp: 600,
//   df: 50,
//   attack: function (target) {
//     return (target.hp = target.hp - this.damage + target.df);
//   },
//   getHp: function () {
//     return this.hp > 0 ? this.hp : 0;
//   },
// };

function Monster(name, damage, hp, df, counterAttack) {
  this.name = name;
  this.damage = damage;
  this.hp = hp;
  this.df = df;
  this.counterAttack = counterAttack;

  this.attack = function (target) {
    this.hp -= target.counterAttack;
    return (target.hp = target.hp - this.damage + target.df);
  };

  this.getHp = function () {
    return this.hp > 0 ? this.hp : 0;
  };
}

const dog = new Monster("Con Chó", 100, 1000, 50, 50);
const bird = new Monster("Con Chim", 200, 600, 50, 50);

var i = 0;

while (true) {
  i++;
  dog.attack(bird);
  if (bird.getHp() === 0) {
    console.log("Bird chết sau", i);
    break;
  }
  bird.attack(dog);
  if (dog.getHp() === 0) {
    console.log("Dog chết sau", i);
    console.log("bird còn hp", bird.getHp());
    break;
  }
  //   break;
}
