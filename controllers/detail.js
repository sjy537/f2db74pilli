var Dorm = require('../models/dorm');

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