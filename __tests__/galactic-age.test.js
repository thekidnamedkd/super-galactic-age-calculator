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
    expect(reusableCalc.mercuryAge).toBe("125.00");
  });
  test('should calculate age divided by the constant of mercury', () => {
    expect(reusableCalc.venusAge).toBe("48.00");
  });
    test('should calculate age divided by the constant of earth', () => {
    expect(reusableCalc.earthAge).toBe("30.00");
  });
    test('should calculate age divided by the constant of mars', () => {
    expect(reusableCalc.marsAge).toBe("15.96");
  });
    test('should calculate age divided by the constant of jupiter', () => {
    expect(reusableCalc.jupiterAge).toBe("2.53");
  });
    test('should calculate age divided by the constant of saturn', () => {
    expect(reusableCalc.saturnAge).toBe("1.02");
  });
    test('should calculate age divided by the constant of uranus', () => {
    expect(reusableCalc.uranusAge).toBe("0.36");
  });
    test('should calculate age divided by the constant of neptune', () => {
    expect(reusableCalc.neptuneAge).toBe("0.18");
  });

// describe('planet life expectancy', () => {

//   let reusableLife;

//   beforeEach(() => {
//     reusableLife = new User (30, 75);
//   });
//     test('should calculate life expectancy from earth against age on mercury' , () => {
//     expect(reusableLife.calcLifeExpect(75)).toContain(50.00);
//   });
//   });
})