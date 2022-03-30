const citiesRepo = require('./cities.repository');

const NotFoundError = require('../common/errors/not-found.error');

module.exports = {
    async getCityByZipCode(zipCode) {
        try {
            const cities = await citiesRepo.getCityDataByZipCode(zipCode);
            
            const response = (cities).places[0]["place name"] + ", " + (cities).places[0]["state abbreviation"] + ", " + (cities).country;
            return response;
        }
        catch (err) {
            throw new NotFoundError(`No cities found!`);
        }
    }
}