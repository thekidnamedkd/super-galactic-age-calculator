export class User {
  constructor (age, lifeEx) {
    this.age = age;
    this.lifeEx = lifeEx;
    this.planetConst = [.24, .62, 1, 1.88, 11.86, 29.45, 84.45, 164.8]
    this.planetName = ["Mercury", "Venus", "Earth", "Mars", "Jupiter", "Saturn", "Uranus", "Neptune"]
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
      planetExes.push(parseFloat((this.lifeEx - this.agesReturned[i]).toFixed(2)));
    }
    return planetExes;
  }
}