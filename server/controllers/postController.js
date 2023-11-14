const Post = require('../models/postModel');

const createPost = async (req, res) => {
  const post = new Post(req.body);
  try {
    const data = await post.save(post);
    res.send(data);
  } catch (err) {
    console.error(err);
    res.status(400).send(err);
  }
};

const getAllPosts = async (req, res) => {
  try {
    const posts = await Post.find({});
    res.send(posts);
  } catch (err) {
    console.error(err);
    res.status(500).send(err);
  }
};

module.exports = {
  createPost,
  getAllPosts,
};
