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


/* GET detail dorm page */
router.get('/detail', dorm_controlers.dorm_view_one_Page);


/* GET create dorm page */
router.get('/create', dorm_controlers.dorm_create_Page);

/* GET create update page */
router.get('/update', dorm_controlers.dorm_update_Page);

/* GET delete dorm page */
router.get('/delete', dorm_controlers.dorm_delete_Page);

module.exports = router;