const express = require('express');
const router = express.Router();
const entriesCtrl = require('../../controllers/entries');
const helpers = require('../../config/helpers');


/*---------- Protected Routes ----------*/
// Process the token for only the routes below
router.get('/:id', helpers.checkAuth, entriesCtrl.show);
router.post('/', helpers.checkAuth, entriesCtrl.create);
router.delete('/:id', helpers.checkAuth, entriesCtrl.delete);
router.put('/:id', helpers.checkAuth, entriesCtrl.update);

module.exports = router;