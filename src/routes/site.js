const express = require('express');
const router = express.Router();
const siteController = require('../app/controllers/SiteController');

// newController.index
//nos se choc vao cai phuong thuc shows
router.get('/search', siteController.search);

router.get('/', siteController.index);
module.exports = router;
