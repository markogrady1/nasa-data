/* eslint-disable max-len */
const config = require('config');
const request = require('../request');

class Earth {
  constructor() {
    this.baseUrl = config.get('apiUrls.nasaApi');

  }

  async getEarthImage(lat, lon, cloudScore = undefined, date = undefined) {

    const apiKey = process.env.API_KEY;
    const dateStr = date ? `&date=${date}` : '';
    const cloudScoreStr = cloudScore ? `&cloud_score=${cloudScore}` : '';
    const requestData = {
      method: 'get',
      url: this.baseUrl + `/planetary/earth/imagery?lat=${lat}&lon=${lon}&api_key=${apiKey}${dateStr}${cloudScoreStr}`,
    };

    return await request.httpRequest(requestData);
  }

  async getEarthAsset(lat, lon, dim, date = undefined) {

    const apiKey = process.env.API_KEY;
    const dateStr = date ? `&date=${date}` : '';
    const dimStr = dim ? `&dim=${dim}` : '';
    const requestData = {
      method: 'get',
      url: this.baseUrl + `/planetary/earth/assets?lat=${lat}&lon=${lon}&api_key=${apiKey}${dateStr}${dimStr}`,
    };

    return await request.httpRequest(requestData);
  }
}

module.exports = Earth;