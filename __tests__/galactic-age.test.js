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

// describe('calculation', () => {

//   let reusableCalc;

//   beforeEach(() => {
//     reusableCalc = new User;
//   });
//   test('should pull this merc', () => {
//     expect(reusableCalc.thisMercury).toBe(125)
//   });
// });