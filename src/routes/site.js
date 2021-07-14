const express = require('express');
const router = express.Router();
const siteController = require('../app/controllers/SiteController');

// newController.index
//nos se choc vao cai phuong thuc shows
router.use('/search', siteController.search);

         router.use('/', siteController.index);
module.exports = router;
