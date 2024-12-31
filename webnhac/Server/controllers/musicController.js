const db = require('../config/db');

// Lấy danh sách nhạc
exports.getSongs = (req, res) => {
  const query = 'SELECT * FROM songs';
  db.query(query, (err, results) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json(results);
  });
};

// Thêm bài hát mới
exports.addSong = (req, res) => {
  const { title, artist, url } = req.body;
  const query = 'INSERT INTO songs (title, artist, url) VALUES (?, ?, ?)';
  db.query(query, [title, artist, url], (err, results) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json({ message: 'Song added successfully!', songId: results.insertId });
  });
};
