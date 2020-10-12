const axios = require('axios');

const request = {};

request.httpRequest = async options => {
  return await axios(options);
};

module.exports = request;