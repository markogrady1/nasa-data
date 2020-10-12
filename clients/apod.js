/* eslint-disable max-len */
const request = require('../request');

class Apod {
  constructor() {

  }

  async getAPOD(date = undefined) {

    const apiKey = process.env.API_KEY;
    const dateStr = date ? date : '';
    const requestData = {
      method: 'get',
      url: `https://api.nasa.gov/planetary/apod?api_key=${apiKey}&date=${dateStr}`,
    };

    return await request.httpRequest(requestData);
  }
}

module.exports = Apod;