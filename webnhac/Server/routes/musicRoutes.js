const express = require('express');
const router = express.Router();
const { getSongs, addSong } = require('../controllers/musicController.js');

// Route để lấy danh sách nhạc
router.get('/', getSongs);

// Route để thêm bài nhạc mới
router.post('/add', addSong);

module.exports = router;
