var express = require('express');
var router = express.Router();

/* GET detail dorm page */
router.get('/detail', dorm_controlers.dorm_view_one_Page);

module.exports = router;