// var express = require('express');
// var router = express.Router();

// /* GET home page. */
// router.get('/', function(req, res, next)
//  {
//   res.render('dorm', { title: 'Search Results' });
// });

// module.exports = router;


var express = require('express');
const dorm_controlers= require('../controllers/dorms');
var router = express.Router();

/* GET dorms */
router.get('/', dorm_controlers.dorm_view_all_Page );
module.exports = router;