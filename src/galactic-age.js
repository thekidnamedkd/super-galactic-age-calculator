export class User {
  constructor (age, gender) {
    this.age = age;
    this.gender = gender;
    this.planetConst = [.24, .62, 1, 1.88, 11.86, 29.45, 84.45, 164.8]
    this.planetName = ["Mercury", "Venus", "Earth", "Mars", "Jupiter", "Saturn", "Uranus", "Neptune"]
    this.lifeEx = this.calcLifeEx ();
    this.agesReturned = this.calcPlanetAges ();
    this.exesReturned = this.calcPlanetExes ();
  }

  calcLifeEx () {
    if (this.gender === "male") {
      this.lifeEx = 75
    } 
    return this.lifeEx;
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