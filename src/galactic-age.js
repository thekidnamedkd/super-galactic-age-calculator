export class User {
  constructor (age, lifeEx) {
    this.age = age;
    this.lifeEx = lifeEx;
    this.planetConst = [.24, .62, 1, 1.88, 11.86, 29.45, 84.45, 164.8]
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
    this.venusLifeEx = parseFloat(this.lifeEx - this.venusAge);
    this.earthLifeEx = parseFloat(this.lifeEx - this.earthAge);
    this.marsLifeEx = parseFloat(this.lifeEx - this.marsAge);
    this.jupiterLifeEx = parseFloat(this.lifeEx - this.jupiterAge);
    this.saturnLifeEx = parseFloat(this.lifeEx - this.saturnAge);
    this.uranusLifeEx = parseFloat(this.lifeEx - this.uranusAge);
    this.neptuneLifeEx = parseFloat(this.lifeEx - this.neptuneAge);
    //save loop to property to target by index
    this.agesReturned = this.calcPlanetAges ();
    this.exesReturned = this.calcPlanetExes ();
  }

  calcPlanetAges () {
    let planetAges = [];
    for (let i=0; i<this.planetConst.length; i++) {
      planetAges.push(parseFloat((this.age / this.planetConst[i]).toFixed(2)));
    }
    return planetAges;
  }

  calcPlanetExes () {
    let planetExes = [];
    for (let i=0; i<this.agesReturned.length; i++) {
      planetExes.push(parseFloat((this.lifeEx - this.agesReturned[i])));
    }
    return planetExes;
  }
}