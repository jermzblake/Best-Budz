const express = require('express');
const router = express.Router();
const diariesCtrl = require('../../controllers/diaries');
const helpers = require('../../config/helpers');

/*---------- Protected Routes ----------*/
// Process the token for only the routes below
router.get('/', helpers.checkAuth, diariesCtrl.index);
router.post('/', helpers.checkAuth, diariesCtrl.create);

module.exports = router;