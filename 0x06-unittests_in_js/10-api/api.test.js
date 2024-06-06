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

  it('Test GET /cart/:id correct response', (done) => {
    request.get(`${URL}/cart/123`, (err, res, body) => {
      expect(res.statusCode).to.be.equal(200);
      expect(body).to.be.equal('Payment methods for cart 123');
      done();
    });
  });

  it('Test GET /cart/:id returns 404 response, id: number', (done) => {
    request.get(`${URL}/cart/-123`, (err, res, body) => {
      expect(res.statusCode).to.be.equal(404);
      done();
    });
  });

  it('Test GET /cart/:id returns 404 response, id: string', (done) => {
    request.get(`${URL}/cart/HelloFromMars`, (err, res, body) => {
      expect(res.statusCode).to.be.equal(404);
      done();
    });
  });

  it('Test POST /login', (done) => {
    request.post(`${URL}/login`, {json: {userName: 'Achraf'}}, (err, res, body) => {
      expect(res.statusCode).to.be.equal(200);
      expect(body).to.be.equal('Welcome Achraf');
      done();
    });
  });

  it('Test GET /available_payments', (done) => {
    request.get(`${URL}/available_payments`, (err, res, body) => {
      expect(res.statusCode).to.be.equal(200);
      expect(JSON.parse(body))
        .to.be.deep.equal({payment_methods: {credit_cards: true, paypal: false}});
      done();
    });
  });
});
