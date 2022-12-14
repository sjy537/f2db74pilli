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
exports.dorm_delete = async function(req, res) {
    console.log("delete "  + req.params.id) 
    try { 
        result = await Dorm.findByIdAndDelete( req.params.id) 
        console.log("Removed " + result) 
        res.send(result) 
    } catch (err) { 
        res.status(500) 
        res.send(`{"error": Error deleting ${err}}`); 
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


// Handle Dorm update form on PUT.
exports.dorm_update_put = async function(req, res) {
    console.log(`update on id ${req.params.id} with body 
    ${JSON.stringify(req.body)}`) 
        try { 
            let toUpdate = await Dorm.findById( req.params.id) 
            // Do updates of properties 
            if(req.body.dorm_Name) toUpdate.dorm_Name = req.body.dorm_Name; 
            if(req.body.dorm_Type) toUpdate.dorm_Type = req.body.dorm_Type; 
            if(req.body.dorm_Size) toUpdate.dorm_Size = req.body.dorm_Size; 
            let result = await toUpdate.save(); 
            console.log("Sucess " + result) 
            res.send(result) 
        } catch (err) { 
            res.status(500) 
            res.send(`{"error": ${err}: Update for id ${req.params.id} 
    failed`); 
        } 
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


// Handle building the view for creating a dorm.
// No body, no in path parameter, no query.
// Does not need to be async
exports.dorm_create_Page = function(req, res) {
    console.log("create view")
    try{
    res.render('dormcreate', { title: 'Dorm Create'});
    }
    catch(err){
    res.status(500)
    res.send(`{'error': '${err}'}`);
    }
};


// Handle building the view for updating a dorm.
// query provides the id
exports.dorm_update_Page = async function(req, res) {
    console.log("update view for item "+req.query.id)
    try{
    let result = await Dorm.findById(req.query.id)
    res.render('dormupdate', { title: 'Dorm Update', toShow: result });
    }
    catch(err){
    res.status(500)
    res.send(`{'error': '${err}'}`);
    }
   };

   // Handle a delete one view with id from query
exports.dorm_delete_Page = async function(req, res) {
    console.log("Delete view for id " + req.query.id)
    try{
    result = await Dorm.findById(req.query.id)
    res.render('dormdelete', { title: 'Dorm Delete', toShow:result });
    }
    catch(err){
    res.status(500)
    res.send(`{'error': '${err}'}`);
    }
   };

