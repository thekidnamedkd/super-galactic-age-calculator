import { User } from './../src/galactic-age.js'

describe('user', () => {

  let reusableUser;

  beforeEach(() => {
    reusableUser = new User ();
  });
    test('should show beforeEach working for user class', () => {
  });
    test('should show User contain property for age', () => {
      expect(reusableUser.age).toBe(30)
  });
    test('should show User contain property for life expectancy', () => {
    expect(reusableUser.lifeEx).toBe(75)
  });
});
describe('planet', () => {

  beforeEach(() => {

  });
  test('should show beforeEach working for planet class', () => {
  });
});
