'use strict';

console.log('Hello World');

const express = require('express');
const app = express();
const multer = require('multer');

const upload = multer({ dest: 'public/uploads/' });

app.use(express.static('public'));

app.post('/image', upload.single('my-image'),(req, res)=>{
  const response = {
    message: 'File uploaded',
    file: req.file
  };
  res.send(response);
});

app.listen(3000);