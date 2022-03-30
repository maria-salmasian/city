const citiesRepository = require('../cities/cities.repository');
const chai = require("chai");
const expect = chai.expect;
const sinon = require("sinon");


describe("city by zipcode [GET]", function() {
    it("get city by id", async function() {
      const stub = sinon.stub(citiesRepository, "getCityDataByZipCode").resolves({ zipCode: 19807 });
      await citiesRepository.getCityDataByZipCode(19807);
      expect(stub.calledOnce).to.be.true; 

    });
  });