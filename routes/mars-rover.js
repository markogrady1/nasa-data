const express = require('express');
const router = express.Router();
const MarsRover = require('../clients/mars-rover');
const log = require('../config/logger');

router.get('/:rover/:sol/:page', async (req, res) => {

  const { rover, sol, page } = req.params;

  try {
    const marsRover = new MarsRover();
    const result = await marsRover.solImages({ rover, sol, page });

    log.info('successful mars rover image request');
    res.json({
      success: 1,
      data: {
        data: result.data.photos,
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

module.exports = router;