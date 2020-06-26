import { Planet } from './../src/planets.js'

describe('planet', () => {

  let reusablePlanet = new Planet
  
  beforeEach(() => {

  });
  test('should show beforeEach working for Planet class', () => {
  });
  test('should show Planet class with mercury property', () => {
    expect(reusablePlanet.mercury).toEqual(.24)
  });
});