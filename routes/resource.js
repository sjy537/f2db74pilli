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

//assgnmt 12 part 2
// Handle Dorm update form on PUT.
exports.dorm_update_put = async function (req, res) {
    console.log(`update on id ${req.params.id} with body
${JSON.stringify(req.body)}`)
    try {
        let toUpdate = await Dorm.findById(req.params.id)
        // Do updates of properties
        if (req.body.dorm_Name) toUpdate.dorm_Name = req.body.dorm_Name;
        if (req.body.dorm_Type) toUpdate.dorm_Type = req.body.dorm_Type;
        if (req.body.dorm_Cost) toUpdate.dorm_Cost = req.body.dorm_Cost;

        let result = await toUpdate.save();
        console.log("Sucess " + result)
        res.send(result)
    } catch (err) {
        res.status(500)
        res.send(`{"error": ${err}: Update for id ${req.params.id}
failed`);
    }
};


// Handle Dorm delete on DELETE.
exports.dorm_delete = async function(req, res) {
    console.log("delete " + req.params.id)
    try {
    result = await Dorm.findByIdAndDelete( req.params.id)
    console.log("Removed " + result)
    res.send(result)
    } catch (err) {
    res.status(500)
    res.send(`{"error": Error deleting ${err}}`);
    }
   };