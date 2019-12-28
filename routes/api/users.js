const express = require('express');
const router = express.Router();

// @route    POST api/profile
// @desc     Register user
// @access   Public
router.post('/', (req, res) => {
  res.send('Users route');
});

module.exports = router;
