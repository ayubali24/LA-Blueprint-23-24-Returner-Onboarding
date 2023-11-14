const express = require('express');

const postRouter = express.Router();
const postController = require('../controllers/postController');

postRouter.post('/create', postController.createPost);
postRouter.get('/getAllPosts', postController.getAllPosts);

module.exports = postRouter;
