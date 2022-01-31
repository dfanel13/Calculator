import chai, { expect } from "chai";
import chaiHttp from "chai-http";

let should = chai.should();
import server from "../server.js";

chai.use(chaiHttp);

const queryString = "arr=[1,2,3,4,5]";

describe("Calculator:", function () {
  describe("/GET sum", function () {
    it("it should return the sum of all items in the array", function (done) {
      chai
        .request(server)
        .get(`/calculate/add?${queryString}`)
        .end((err, res) => {
          try {
            res.should.have.status(200);
            done();
          } catch (err) {
            done(err);
          }
        });
    });
  });

  describe("/GET subtract", function () {
    it("it should return the subtract result of all items in the array", function (done) {
      chai
        .request(server)
        .get(`/calculate/subtract?${queryString}`)
        .end((err, res) => {
          try {
            res.should.have.status(200);
            done();
          } catch (err) {
            done(err);
          }
        });
    });
  });

  describe("/GET multiply", function () {
    it("it should return the multiply result of all items in the array", function (done) {
      chai
        .request(server)
        .get(`/calculate/multiply?${queryString}`)
        .end((err, res) => {
          try {
            res.should.have.status(200);
            done();
          } catch (err) {
            done(err);
          }
        });
    });
  });

  describe("/GET devide", function () {
    it("it should return the devide result of all items in the array", function (done) {
      chai
        .request(server)
        .get(`/calculate/devide?${queryString}`)
        .end((err, res) => {
          try {
            res.should.have.status(200);
            done();
          } catch (err) {
            done(err);
          }
        });
    });
  });
});
