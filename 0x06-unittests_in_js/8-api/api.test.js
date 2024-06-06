const request = require('request');
const { expect } = require('chai');

describe('Testing the index page call', () => {
  const URL = 'http://localhost:7865';

  it('Index page', (done) => {
    request.get(`${URL}/`, (err, res, body) => {
      expect(res.statusCode).to.be.equal(200);
      expect(body).to.be.equal('Welcome to the payment system');
      done();
    });
  });
});
