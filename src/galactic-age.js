export class User {
  constructor (age, lifeEx) {
    this.age = age;
    this.lifeEx = lifeEx;
    this.planetConst = 
    this.planetAge = {}
    this.planetExpectancy = []
  }
  
// 'should calculate age divided by the constant of mercury' 
calcMercuryAge() {
  let mercuryAge  = (Math.floor(this.age / .24));
  return mercuryAge.toFixed(2)
  }

calcVenusAge() {
  let venusAge  = (Math.floor(this.age / .62));
  return venusAge.toFixed(2)
  }
calcEarthAge() {
  
  }
calcMarsAge() {

  }

calcJupiterAge() {
  
  }
calcSaturnAge() {
  
  }
calcUranusAge() {

  }
calcNeptuneAge () {

  }
}
