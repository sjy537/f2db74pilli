var Dorm = require('../models/dorm');

// List of all Dorms
exports.dorm_list = async function(req, res) {
    try{
    theDorms = await Dorm.find();
    res.send(theDorms);
    }
    catch(err){
    res.status(500);
    res.send(`{"error": ${err}}`);
    }
   };


// // List of all Dorms
// exports.dorm_list = function(req, res) {
//  res.send('NOT IMPLEMENTED: Dorm list');
// };

// for a specific Dorm.
exports.dorm_detail = function(req, res) {
 res.send('NOT IMPLEMENTED: Dorm detail: ' + req.params.id);
};
// // Handle Dorm create on POST.
// exports.dorm_create_post = function(req, res) {
//  res.send('NOT IMPLEMENTED: Dorm create POST');
// };

// Handle Dorm create on POST.
exports.dorm_create_post = async function(req, res) {
    console.log(req.body)
    let document = new Dorm();
    // We are looking for a body, since POST does not have query parameters.
    // Even though bodies can be in many different formats, we will be picky
    // and require that it be a json object
    // {"dorm_type":"goat", "cost":12, "size":"large"}


    // document.dorm_type = req.body.dorm_type;
    // document.cost = req.body.cost;
    // document.size = req.body.size;

    document.dorm_Name = req.body.dorm_Name;
    document.dorm_Type = req.body.dorm_Type;
    document.dorm_Cost = req.body.dorm_Cost;
    // document.cost = req.body.cost;
    // document.size = req.body.size;


    try{
    let result = await document.save();
    res.send(result);
    }
    catch(err){
    res.status(500);
    res.send(`{"error": ${err}}`);
    }
   };



// Handle Dorm delete form on DELETE.
exports.dorm_delete = function(req, res) {
 res.send('NOT IMPLEMENTED: Dorm delete DELETE ' + req.params.id);
};
// Handle Dorm update form on PUT.
exports.dorm_update_put = function(req, res) {
 res.send('NOT IMPLEMENTED: Dorm update PUT' + req.params.id);
};


// VIEWS
// Handle a show all view
exports.dorm_view_all_Page = async function(req, res) {
    try{
    theDorms = await Dorm.find();
    res.render('dorms', { title: 'Dorm Search Results', results: theDorms });
    }
    catch(err){
    res.status(500);
    res.send(`{"error": ${err}}`);
    }
   };


   // for a specific Dorm.
exports.dorm_detail = async function(req, res) {
    console.log("detail" + req.params.id)
    try {
    result = await Dorm.findById( req.params.id)
    res.send(result)
    } catch (error) {
    res.status(500)
    res.send(`{"error": document for id ${req.params.id} not found`);
    }
   };


   // Handle a show one view with id specified by query
exports.dorm_view_one_Page = async function(req, res) {
    console.log("single view for id " + req.query.id)
    try{
    result = await Dorm.findById( req.query.id)
    res.render('dormdetail',
   { title: 'Dorm Detail', toShow: result });
    }
    catch(err){
    res.status(500)
    res.send(`{'error': '${err}'}`);
    }
   };

   