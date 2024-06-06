const expect = require('chai').expect;
const calculateNumber = require('./2-calcul_chai');

describe('calculateNumber', () => {
  it('Testing the SUM type', () => {
    expect(calculateNumber('SUM', 1, 2)).to.equal(3);
  });
  it('Testing the SUBSTRACT type', () => {
    expect(calculateNumber('SUBTRACT', 9, 2.0)).to.equal(7);
  });
  it('Testing the DIVIDE type', () => {
    expect(calculateNumber('DIVIDE', 6, 2)).to.equal(3);
  });
  it('Testing the DIVIDE type, testing the error', () => {
    expect(calculateNumber('DIVIDE', 6, 0.2)).to.equal('Error');
  });
})
