export class User {
  constructor (age, lifeEx) {
    this.age = age;
    this.lifeEx = lifeEx;
    this.mercuryAge = parseFloat(this.age / .24).toFixed(2);
  }
}
// calcLifeExpect () {
//   }
// }