import { User } from './../src/galactic-age.js'

describe('user', () => {

  let reusableUser;

  beforeEach(() => {
    reusableUser = new User (30, "female");
  });
    test('should show beforeEach working for User class', () => {
  });
    test('should show User contain property for age', () => {
      expect(reusableUser.age).toBe(30)
  });
    test('should show User contain property for life expectancy', () => {
      expect(reusableUser.gender).toBe("female")
  });
});

describe('loop for refactor of planet ages', () => {

  let reusableAge2;

  beforeEach(() => {
    reusableAge2 = new User (30, "female");
  });
    test('should calculate life expectancy from earth against age on mercury' , () => {
    expect(reusableAge2.agesReturned[0]).toBe(125.00);
  });
    test('should calculate life expectancy from earth against age on venus' , () => {
    expect(reusableAge2.agesReturned[1]).toBe(48.39);
  });
    test('should calculate life expectancy from earth against age on earth' , () => {
    expect(reusableAge2.agesReturned[2]).toBe(30.00);
  });
    test('should calculate life expectancy from earth against age on mars' , () => {
    expect(reusableAge2.agesReturned[3]).toBe(15.96);
  });
    test('should calculate life expectancy from earth against age on jupiter' , () => {
    expect(reusableAge2.agesReturned[4]).toBe(2.53);
  });
    test('should calculate life expectancy from earth against age on saturn' , () => {
    expect(reusableAge2.agesReturned[5]).toBe(1.02);
  });
    test('should calculate life expectancy from earth against age on uranus' , () => {
    expect(reusableAge2.agesReturned[6]).toBe(0.36);
  });
    test('should calculate life expectancy from earth against age on neptune' , () => {
    expect(reusableAge2.agesReturned[7]).toBe(0.18);
  });
});

describe('loop for refactor of planet life expectancies', () => {

  let reusableLife2;

beforeEach(() => {
  reusableLife2 = new User (30, "female");
  });
    test('should calculate life expectancy from earth against age on mercury' , () => {
    expect(reusableLife2.exesReturned[0]).toBe(-50);
  });
    test('should calculate life expectancy from earth against age on venus' , () => {
    expect(reusableLife2.exesReturned[1]).toBe(26.61);
  });
    test('should calculate life expectancy from earth against age on earth' , () => {
    expect(reusableLife2.exesReturned[2]).toBe(45);
  });
    test('should calculate life expectancy from earth against age on mars' , () => {
    expect(reusableLife2.exesReturned[3]).toBe(59.04);
  });
    test('should calculate life expectancy from earth against age on jupiter' , () => {
    expect(reusableLife2.exesReturned[4]).toBe(72.47);
  });
    test('should calculate life expectancy from earth against age on saturn' , () => {
    expect(reusableLife2.exesReturned[5]).toBe(73.98);
  });
    test('should calculate life expectancy from earth against age on uranus' , () => {
    expect(reusableLife2.exesReturned[6]).toBe(74.64);
  });
    test('should calculate life expectancy from earth against age on neptune' , () => {
    expect(reusableLife2.exesReturned[7]).toBe(74.82);
  });
});

describe('lifeEx calc via gender input', () => {

  let reusableFemale;
  let reusableMale;
  let reusableOther;

beforeEach(() => {
  reusableFemale = new User (30, "female");
  reusableMale = new User (30, "male");
  reusableOther = new User (30, "other");
  });
    test('should calculate life expectancy from earth against age on mercury w/ global gender' , () => {
    expect(reusableFemale.exesReturned[0]).toBe(-50);
  });
    test('should calculate life expectancy from earth against age on mercury w/ global gender' , () => {
    expect(reusableMale.exesReturned[0]).toBe(-55);
  });
    test('should calculate life expectancy from earth against age on mercury w/ global gender' , () => {
    expect(reusableOther.exesReturned[0]).toBe(-52.5);
  });
})