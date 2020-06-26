import { User } from './../src/galactic-age.js'

describe('user', () => {

  let reusableUser;

  beforeEach(() => {
    reusableUser = new User ();
});
  test('should show beforeEach working', () => {
});
  test('should show User contain property for age', () => {
    expect(reusableUser.age).toBe(30)
});
});