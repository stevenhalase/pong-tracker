var express = require('express');
var router = express.Router();
var PlayersController = require('../controllers/PlayersController.js');

/*
 * GET
 */
router.get('/', PlayersController.list);

/*
 * GET
 */
router.get('/:id', PlayersController.show);

/*
 * POST
 */
router.post('/', PlayersController.create);

/*
 * PUT
 */
router.put('/:id', PlayersController.update);

/*
 * DELETE
 */
router.delete('/:id', PlayersController.remove);

module.exports = router;