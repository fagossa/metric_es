var chai = require('chai');
var chaiHttp = require('chai-http');
var server = require('../bin/www');
var should = chai.should();

chai.use(chaiHttp);

describe('A metric api', function() {

  it('should get an answer from /health GET', function(done) {
  chai.request(server)
    .get('/health')
    .end(function(err, res){
      res.should.have.status(200);
      done();
    });
  });

});
