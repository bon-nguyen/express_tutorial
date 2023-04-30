const express = require('express');
const router = express.Router();

const bookController = require('../app/controllers/BookController');

router.delete('/book/:id', bookController.delete);
router.put('/book/:id', bookController.update);
router.post('/book', bookController.create);
router.get('/book/:id', bookController.search);
router.get('/book', bookController.index);

module.exports = router;
