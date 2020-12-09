const express = require('express');
const router = express.Router();
const entriesCtrl = require('../../controllers/entries');
const helpers = require('../../config/helpers');

/*---------- Protected Routes ----------*/
// Process the token for only the routes below
router.post('/', helpers.checkAuth, entriesCtrl.create);
router.delete('/:id', helpers.checkAuth, entriesCtrl.delete);

module.exports = router;