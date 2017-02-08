var baseUrl = 'https://localhost:14000/ccstorex/custom/v1';
var request = require('request');
var fs      = require('fs-extra');
var path    = require('path');
var caFile  = fs.readFileSync(path.join(__dirname, '../ssl/certificate.pem'));

describe('Hello World Server', function() {
  'use strict';

  describe('GET /v1', function() {
    it('returns status code 200', function(done) {
        request.get({url: baseUrl, ca: caFile}, function(error, response) {
          expect(response.statusCode).toBe(200);
          done();
        });
      });

      it('returns Hello World', function(done) {
        request.get({url: baseUrl, ca: caFile}, function(error, response, body) {
          expect(body).toBe('Hello World');
          done();
        });
      });
  });
});