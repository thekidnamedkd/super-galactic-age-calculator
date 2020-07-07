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

describe('calculation', () => {

  let reusableCalc;

  beforeEach(() => {
    reusableCalc = new User (30, 75);
  });
    test('should calculate age divided by the constant of mercury', () => {
      expect(reusableCalc.calcMercuryAge(30)).toEqual(125);
  });
  test('should calculate age divided by the constant of venus', () => {
    expect(reusableCalc.calcVenusAge(30)).toEqual(48);
  });
});