const express = require('express');
const router = express.Router();
const Apod = require('../clients/apod');
const log = require('../config/logger');

router.post('/', async (req, res) => {

  let date = req.body.date ? req.body.date : '';

  try {
    const apod = new Apod();
    const result = await apod.getAPOD(date);

    log.info('successful apod request');
    res.json({
      success: 1,
      data: {
        result: result.data,
        title: result.data.title,
        url: result.data.url,
        hdurl: result.data.hdurl,
        time: new Date().toJSON()
      }
    });
  } catch (err) {
    log.error('unsuccessful apod request');
    res.json({
      success: 0,
      error: err
    });
  }

});

module.exports = router;