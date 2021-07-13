const express = require('express');
const router = express.Router();
const newController =  require('../app/controllers/NewsController');

// newController.index
//nos se choc vao cai phuong thuc shows 
router.use('/:slug', newController.show);

router.use('/', newController.index);
module.exports = router;