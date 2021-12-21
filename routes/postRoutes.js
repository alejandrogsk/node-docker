const express = require('express');
const postController = require('../controllers/postController');

const router = express.Router();

router.route("/posts").get(postController.getAllPosts);

router.route("/post").post( postController.createPost);

router.route("/post/:id")
.get(postController.getOnePost)
.put( postController.updatePost)
.delete( postController.deletePost);

module.exports = router;