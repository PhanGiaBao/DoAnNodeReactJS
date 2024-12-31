const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
require('dotenv').config();
const db = require('./config/db'); // Import kết nối database

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors()); // Cho phép giao tiếp giữa frontend và backend (CORS)
app.use(bodyParser.json()); // Để đọc dữ liệu JSON từ yêu cầu HTTP

// Kiểm tra kết nối Database
db.connect((err) => {
  if (err) {
    console.error('Database connection failed: ', err); // Lỗi khi kết nối Database
  } else {
    console.log('Connected to MySQL database!'); // Kết nối thành công
  }
});

// Routes
app.use('/api/music', require('./routes/musicRoutes')); // Route xử lý dữ liệu nhạc

// Route kiểm tra server hoạt động
app.get('/', (req, res) => {
  res.send('API is running...');
});

// Xử lý lỗi không tìm thấy route
app.use((req, res) => {
  res.status(404).json({ message: 'Route not found' });
});

// Server Listening
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`); // Log thông báo server chạy
});
