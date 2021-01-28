const express = require('express');
const router = express.Router();
const libraryController = require('../../controllers/library-controller');

router.get('/api/v1/book', libraryController.getAll);

module.exports = router;