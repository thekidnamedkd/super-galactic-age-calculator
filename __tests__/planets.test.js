import { Planets } from './../src/planets.js'

describe('planet', () => {

  let reusablePlanets;
  
  beforeEach(() => {
    reusablePlanets = new Planets (.24, .62, 1.88, 11.86, 29.45, 84.45, 164.8) 
  });

  test('should show beforeEach working for Planets class', () => {
  });

  test('should show Planet class with mercury property', () => {
    expect(reusablePlanets.mercury).toBe(.24)
  });

  test('should show Planet class with venus property', () => {
    expect(reusablePlanets.venus).toBe(.62)
  });

  test('should show Planet class with mars property', () => {
    expect(reusablePlanets.mars).toBe(1.88)
  });

  test('should show Planet class with jupiter property', () => {
    expect(reusablePlanets.jupiter).toBe(11.86)
  });

  test('should show Planet class with saturn property', () => {
    expect(reusablePlanets.saturn).toBe(29.45)
  });

  test('should show Planet class with uranus property', () => {
    expect(reusablePlanets.uranus).toBe(84.45)
  });

  test('should show Planet class with neptune property', () => {
    expect(reusablePlanets.neptune).toBe(164.8)
  });
});