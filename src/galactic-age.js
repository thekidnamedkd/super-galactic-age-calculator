import { Planets } from './../src/planets.js'

export class User {
  constructor (age, lifeEx) {
    this.age = age;
    this.lifeEx = lifeEx;
    this.planetConst = [.24, .62, 1.88, 11.86, 29.45, 84.45, 164.8]
    this.planetAge = []
  }
  
// 'should calculate age divided by the constant of mercury'
  calcMercAge() {
    return Math.floor(this.age/this.planetConst[0]);
    }
}





