import { User } from './../src/galactic-age.js'


describe('user', () => {

  let reusableUser;

  beforeEach(() => {
    reusableUser = new User (30, 75);
  });
    test('should show beforeEach working for User class', () => {
  });
    test('should show User contain property for age', () => {
      expect(reusableUser.age).toBe(30)
  });
    test('should show User contain property for life expectancy', () => {
      expect(reusableUser.lifeEx).toBe(75)
  });
});

describe('planet age calculation', () => {

  let reusableCalc;

  beforeEach(() => {
    reusableCalc = new User (30, 75);
  });
    test('should calculate age divided by the constant of mercury' , () => {
    expect(reusableCalc.mercuryAge).toEqual(125.00);
  });
  test('should calculate age divided by the constant of mercury', () => {
    expect(reusableCalc.calcVenusAge(30)).toContain(48.00);
  });
    test('should calculate age divided by the constant of earth', () => {
    expect(reusableCalc.calcEarthAge(30)).toContain(30.00);
  });
    test('should calculate age divided by the constant of mars', () => {
    expect(reusableCalc.calcMarsAge(30)).toContain(15.96);
  });
    test('should calculate age divided by the constant of jupiter', () => {
    expect(reusableCalc.calcJupiterAge(30)).toContain(2.53);
  });
    test('should calculate age divided by the constant of saturn', () => {
    expect(reusableCalc.calcSaturnAge(30)).toContain(1.02);
  });
    test('should calculate age divided by the constant of uranus', () => {
    expect(reusableCalc.calcUranusAge(30)).toContain(0.36);
  });
    test('should calculate age divided by the constant of neptune', () => {
    expect(reusableCalc.calcNeptuneAge(30)).toContain(0.18);
  });

describe('planet life expectancy', () => {

  let reusableLife;

  beforeEach(() => {
    reusableLife = new User (30, 75);
  });
    test('should calculate life expectancy from earth against age on mercury' , () => {
    expect(reusableLife.calcLifeExpect(75)).toContain(50.00);
  });
  });
})
