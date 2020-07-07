export class User {
  constructor (age, lifeEx) {
    this.age = age;
    this.lifeEx = lifeEx;
    this.planetConst = 
    this.planetAge = {}
    this.planetExpectancy = []
  }
  
// 'should calculate age divided by the constant of every planet ratio' 
calcMercuryAge() {
    let mercuryAge  = (Math.floor(this.age / .24));
    return Math.round(mercuryAge);
    }

  calcVenusAge() {
    let venusAge  = (Math.floor(this.age / .62));
    return Math.round(venusAge);
  }
  }
