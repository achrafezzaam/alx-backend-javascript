const assert = require('assert');
const calculateNumber = require('./1-calcul');

describe('calculateNumber', () => {
  it('Testing the SUM type', () => {
    assert.equal(calculateNumber('SUM', 1, 2), 3);
  });
  it('Testing the SUBSTRACT type', () => {
    assert.equal(calculateNumber('SUBTRACT', 9, 2.0), 7);
  });
  it('Testing the DIVIDE type', () => {
    assert.equal(calculateNumber('DIVIDE', 6, 2), 3);
  });
  it('Testing the DIVIDE type, testing the error', () => {
    assert.equal(calculateNumber('DIVIDE', 6, 0.2), 'Error');
  });
})
