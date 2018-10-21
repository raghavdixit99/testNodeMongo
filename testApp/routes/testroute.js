const express = require('express');
const router = express.Router();

const test_controller = require('../controllers/testcontroller');
router.get('/test',test_controller.test);
module.exports = router;
