export class User {
  constructor (age, lifeEx) {
    this.age = age;
    this.lifeEx = lifeEx;
    //planet age calcs
    this.mercuryAge = parseFloat(this.age / .24).toFixed(2);
    this.venusAge = parseFloat(this.age / .62).toFixed(2);
    this.earthAge = parseFloat(this.age / 1).toFixed(2);
    this.marsAge = parseFloat(this.age / 1.88).toFixed(2);
    this.jupiterAge = parseFloat(this.age / 11.86).toFixed(2);
    this.saturnAge = parseFloat(this.age / 29.45).toFixed(2);
    this.uranusAge = parseFloat(this.age / 84.45).toFixed(2);
    this.neptuneAge = parseFloat(this.age / 164.8).toFixed(2);
    //planet years to live
    this.mercuryLifeEx = parseFloat(this.lifeEx - this.mercuryAge);
    // this.venusLifeEx = venusLifeEx
    // this.earthLifeEx = earthLifeEx
    // this.marsLifeEx = marsLifeEx
    // this.jupiterLifeEx = jupiterLifeEx
    // this.saturanLifeEx = saturanLifeEx
    // this.uranusLifeEx = uranusLifeEx
    // this.neptuneLifeEx = neptuneLifeEx
  }
}
