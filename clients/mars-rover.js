/* eslint-disable max-len */
const config = require('config');
const request = require('../request');

class MarsRover {
  constructor() {
    this.baseUrl = config.get('apiUrls.nasaApi');;
  }

  async solImages(args) {

    const apiKey = process.env.API_KEY;
    const requestData = {
      method: 'get',
      url: this.baseUrl + `/mars-photos/api/v1/rovers/${args.rover}/photos?api_key=${apiKey}`
        + `?sol=${args.sol}&page=${args.page}`
    };

    return await request.httpRequest(requestData);
  }
}

module.exports = MarsRover;