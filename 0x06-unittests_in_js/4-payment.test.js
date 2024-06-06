const sinon = require('sinon');
const { expect } = require('chai');
const Utils = require('./utils');
const sendPaymentRequestToApi = require('./4-payment');

describe('sendPaymentRequestToApi', () => {
  it('Test sendPaymentRequestToApi', () => {
    const spy = sinon.spy(console);
    const target = sinon.stub(Utils, 'calculateNumber');

    target.returns(10);
    sendPaymentRequestToApi(100, 20);
    expect(target.calledWith('SUM', 100, 20)).to.be.true;
    expect(target.callCount).to.be.equal(1);
    expect(spy.log.calledWith('The total is: 10')).to.be.true;
    expect(spy.log.callCount).to.be.equal(1);
    target.restore();
    spy.log.restore();
  });
});
