var express = require('express');
var router = express.Router();

const index_controller = require('../controllers/index_controllers.js');

router.get('/principal', function(req, res, next) {
    res.send('Cesar Dionicio Sazo Mayen 201503440');
})

router.get('/principal2', index_controller.funcionPrueba)

module.exports = router;