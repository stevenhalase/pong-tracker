var express = require('express');
var router = express.Router();
var GamesController = require('../controllers/GamesController.js');

/*
 * GET
 */
router.get('/', GamesController.list);

/*
 * GET
 */
router.get('/:id', GamesController.show);

/*
 * POST
 */
router.post('/', GamesController.create);

/*
 * PUT
 */
router.put('/:id', GamesController.update);

/*
 * DELETE
 */
router.delete('/:id', GamesController.remove);

module.exports = router;