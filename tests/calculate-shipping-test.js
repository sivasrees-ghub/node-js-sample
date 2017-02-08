var baseUrl = 'https://localhost:14000/ccstorex/custom/v1/calculateShipping';
var request = require('request');
var fs      = require('fs-extra');
var path    = require('path');
var caFile  = fs.readFileSync(path.join(__dirname, '../ssl/certificate.pem'));

describe('Calculate Shipping', function() {
  'use strict';

  describe('GET /v1/calculateShipping', function() {
    it('returns status code 200', function(done) {
      request.post({url: baseUrl, ca: caFile}, function(error, response) {
        expect(response.statusCode).toBe(200);
        done();
      });
    });

    it('returns shippingMethods Array', function(done) {
      request.post({url: baseUrl, ca: caFile}, function(error, response, body) {
        var jsonBody = JSON.parse(body);
        expect(jsonBody.shippingMethods.length).toBe(3);
        done();
      });
    });

    it('returns shippingMethods Array', function(done) {
      request.post({url: baseUrl, ca: caFile}, function(error, response, body) {
        var jsonBody = JSON.parse(body);
        var shippingMethods = jsonBody.shippingMethods;
        expect(shippingMethods[0].displayName).toBe('canadapost-overnight');
        expect(shippingMethods[0].shippingCost).toBe(12.95);
        done();
      });
    });
  });
});