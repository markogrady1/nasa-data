/* eslint-disable max-len */
const config = require('config');
const request = require('../request');

class Apod {
  constructor() {
    this.baseUrl = config.get('apiUrls.nasaApi');
  }

  async getAPOD(date = undefined) {

    const apiKey = process.env.API_KEY;
    const dateStr = date ? date : '';
    const requestData = {
      method: 'get',
      url: this.baseUrl + `/planetary/apod?api_key=${apiKey}&date=${dateStr}`,
    };

    return await request.httpRequest(requestData);
  }
}

module.exports = Apod;