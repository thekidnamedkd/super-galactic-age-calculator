export class User {
  constructor (age, lifeEx) {
    this.age = age;
    this.lifeEx = lifeEx;
  }
  
// 'should calculate age divided by the constant of mercury' 
calcMercuryAge() {
  let mercuryAge = parseFloat(this.age / .24).toFixed(2);
  return mercuryAge;
  }

calcVenusAge() {
  let venusAge = parseFloat(this.age / .62).toFixed(2);
  return venusAge;
  }
calcEarthAge() {
  let earthAge =parseFloat(this.age / 1).toFixed(2)
  return earthAge;
  }
calcMarsAge() {
  let marsAge = parseFloat(this.age / 1.88).toFixed(2)
  return marsAge;
  }

calcJupiterAge() {
  let jupiterAge = parseFloat(this.age / 11.86).toFixed(2)
  return jupiterAge;
  }
calcSaturnAge() {
  let saturnAge = parseFloat(this.age / 29.45).toFixed(2)
  return saturnAge;
  }
calcUranusAge() {
  let uranusAge = parseFloat(this.age / 84.45).toFixed(2)
  return uranusAge;
  }
calcNeptuneAge () {
  let neptuneAge = parseFloat(this.age / 164.8).toFixed(2)
  return neptuneAge;
  }
}
