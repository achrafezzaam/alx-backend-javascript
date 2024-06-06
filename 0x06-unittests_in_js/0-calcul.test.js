const assert = require('assert');
const calculateNumber = require('./0-calcul');

describe('calculateNumber', () => {
  it('Adding two integers', () => {
    assert.equal(calculateNumber(1, 2), 3);
  });
  it('Adding two floats', () => {
    assert.equal(calculateNumber(1.0, 2.0), 3);
  });
  it('Rounding down two floats', () => {
    assert.equal(calculateNumber(1.499999, 2.499999), 3);
  });
  it('Rounding up two floats', () => {
    assert.equal(calculateNumber(1.999999, 2.999999), 5);
  });
})
