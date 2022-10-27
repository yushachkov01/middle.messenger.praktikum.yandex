const express = require('express');
const router = express.Router();

router.get('/chats', function (req, res) {
  res.render('chats');
});
