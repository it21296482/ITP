const express = require('express');
const Posts = require('../models/posts');

const router = express.Router();

// save post 
router.post('/posts/save', async (req, res) => {
  try {
    const newPost = new Posts(req.body);
    await newPost.save();
    console.log('Post saved successfully');
    res.send('Post saved successfully');
  } catch (error) {
    console.error('Error while saving post:', error);
    res.status(500).send('Error while saving post');
  }
});

// get all posts
router.get('/posts', async (req, res) => {
  try {
    const posts = await Posts.find();
    console.log('Posts retrieved successfully');
    res.json(posts);
  } catch (error) {
    console.error('Error while retrieving posts:', error);
    res.status(500).send('Error while retrieving posts');
  }
});

// update post by ID
router.put('/posts/:id', async (req, res) => {
  try {
    const updatedPost = await Posts.findByIdAndUpdate(req.params.id, req.body, { new: true });
    console.log('Post updated successfully');
    res.send(updatedPost);
  } catch (error) {
    console.error('Error while updating post:', error);
    res.status(500).send('Error while updating post');
  }
});

// delete post by ID
router.delete('/posts/:id', async (req, res) => {
  try {
    const deletedPost = await Posts.findByIdAndDelete(req.params.id);
    console.log('Post deleted successfully');
    res.json(deletedPost);
  } catch (error) {
    console.error('Error while deleting post:', error);
    res.status(500).send('Error while deleting post');
  }
});

// get post by ID
router.get('/posts/:id', async (req, res) => {
  try {
    const post = await Posts.findById(req.params.id);
    console.log('Post retrieved successfully');
    res.json(post);
  } catch (error) {
    console.error('Error while retrieving post:', error);
    res.status(500).send('Error while retrieving post');
  }
});

module.exports = router;
