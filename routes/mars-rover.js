const express = require('express');
const router = express.Router();
const MarsRover = require('../clients/mars-rover');
const log = require('../config/logger');

router.get('/data/:rover/:sol/:page', async (req, res) => {
  const { rover, sol, page } = req.params;

  try {
    const result = await getRoverData({ rover, sol, page });
    log.info('successful mars rover data request');
    res.json({
      success: 1,
      data: {
        data: result.data,
        time: new Date().toJSON()
      }
    });
  } catch (err) {
    log.error('unsuccessful mars rover data request' + err);
    res.json({
      success: 0,
      error: err
    });
  }

});

router.get('/photos/:rover/:sol/:page', async (req, res) => {
  const { rover, sol, page } = req.params;

  try {
    const result = await getRoverData({ rover, sol, page });
    log.info('successful mars rover image request');
    res.json({
      success: 1,
      data: {
        photos: result.data.photos,
        time: new Date().toJSON()
      }
    });
  } catch (err) {
    log.error('unsuccessful mars rover image request' + err);
    res.json({
      success: 0,
      error: err
    });
  }

});

async function getRoverData(args) {
  const marsRover = new MarsRover();
  return await marsRover.solImages(args);
}

module.exports = router;