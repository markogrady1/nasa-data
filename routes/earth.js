const express = require('express');
const router = express.Router();
const Earth = require('../clients/earth');
const log = require('../config/logger');

router.get('TODO', async (req, res) => {

  const { TODO } = req.query;

  try {
    // TODO
  } catch (err) {
    log.error('TODO');
    res.json({
      success: 0,
      error: err
    });
  }

});

module.exports = router;