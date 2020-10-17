/* eslint-disable max-len */
const request = require('../request');

class MarsRover {
  constructor() {

  }

  async solImages(args) {

    const apiKey = process.env.API_KEY;
    const requestData = {
      method: 'get',
      url: `https://api.nasa.gov/mars-photos/api/v1/rovers/${args.rover}/photos?api_key=${apiKey}`
        + `?sol=${args.sol}&page=${args.page}`
    };

    return await request.httpRequest(requestData);
  }
}

module.exports = MarsRover;