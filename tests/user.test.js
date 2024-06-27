const chai = require('chai');
const chaiHttp = require('chai-http');
const app = require('../src/index'); // Make sure to export the express app in your index.js

chai.use(chaiHttp);
chai.should();

describe("Users", () => {
  describe("GET /worko/user", () => {
    it("should get all users", (done) => {
      chai.request(app)
          .get('/worko/user')
          .end((err, res) => {
            res.should.have.status(200);
            res.body.should.be.a('array');
            done();
          });
    });
  });
});
