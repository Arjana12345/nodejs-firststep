const express = require('express');
const multer = require('multer');
const path = require('path');
const fs = require('fs');

const app = express();
const port = 3000;

/**
 * File name to upload
 */
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    
    cb(null, './uploaded_file');
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname));
  },
});

/***
 * File validation
 */
const upload = multer({ 
    storage: storage,
    limits: { fileSize: 10 * 1024 * 1024 }
});

/**
 * Make directory to upload
 *  */
if (!fs.existsSync('./uploaded_file')) {
  fs.mkdirSync('./uploaded_file');
}

/***
 * post request
 */
app.post('/upload', upload.single('file'), (req, res) => {
  if (!req.file) {
    return res.status(400).send('No file uploaded');
  }
  res.send(`File uploaded successfully: ${req.file.filename}`);
});

/***
 * get request - front end for end-user 
 */


app.get('/', (req, res) => {
  res.send(`
    <h1>Upload a File</h1>
    <form action="/upload" method="post" enctype="multipart/form-data">
      <input type="file" name="file" />
      <button type="submit">Upload</button>
    </form>
  `);
});


/**
 * server connection
 */
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});