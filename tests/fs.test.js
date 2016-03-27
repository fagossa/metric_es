var expect = require('chai').expect,
    fs = require('fs');

describe('Test FS lib', function() {

  it('Should 1 + 1 = 2', function() {
    var i = 1;
    i++;
    expect(i).to.be.equal(2);
  })

  it('Should test read', function(done) {
    fs.readFile(__dirname + '/files/test.json','UTF-8',function(err, data) {
      if (err) {
        done(err);
        return;
      }
      expect(data).to.equal('{}\n');
      done();
    })
  })
});
