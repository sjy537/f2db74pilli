var express = require('express');
var router = express.Router();
// Require controller modules.
var api_controller = require('../controllers/api');
var dorm_controller = require('../controllers/dorms');
/// API ROUTE ///
// GET resources base.
router.get('/', api_controller.api);
/// COSTUME ROUTES ///
// POST request for creating a Dorm.
router.post('/dorms', dorm_controller.dorm_create_post);
// DELETE request to delete Dorm.
router.delete('/dorms/:id', dorm_controller.dorm_delete);
// PUT request to update Dorm.
router.put('/dorms/:id', dorm_controller.dorm_update_put);
// GET request for one Dorm.
router.get('/dorms/:id', dorm_controller.dorm_detail);
// GET request for list of all Dorm items.
router.get('/dorms', dorm_controller.dorm_list);
module.exports = router;