const Post = require("../models/postModel");

exports.createPost = async(req, res) => {
    try {
        const post = await Post.create(req.body)
        res.status(200).json({
            ok: true,
            messaje: "Post created successfully",
            data: {
                post
            }
        });
    } catch (e) {
        res.status(400).json({
            ok: false,
            messaje: "Error in server",
        });
    }
};

exports.getAllPosts = async (req, res) => {
    try {
        const allPosts = await Post.find();
        
        res.status(200).json({
            ok: true,
            messaje: "Those are all the posts",
            results: allPosts.length,
            data:{posts: allPosts}
        });
    } catch (e) {
        res.status(400).json({
            ok: false,
            messaje: "Error in server",
        });
    }
};


exports.getOnePost = async (req, res) => {
    try {
        const post = await Post.findById(req.params.id);
        
        res.status(200).json({
            ok: true,
            messaje: "Those are all the posts",
            data:{post: post}
        });
    } catch (e) {
        res.status(400).json({
            ok: false,
            messaje: "Error in server",
        });
    }
};


exports.updatePost = async (req, res) => {
    try {
        const post = await Post.findByIdAndUpdate(req.params.id, req.body);

        res.status(200).json({
            ok: true,
            messaje: "Updated successfully",
            post: post,
        });
    } catch (e) {
        res.status(400).json({
            ok: false,
            messaje: "Error in server",
        });
    }
};

exports.deletePost = async (req, res) => {
    try {
        const post = await Post.findByIdAndUpdate(req.params.id, req.body);

        res.status(200).json({
            ok: true,
            messaje: "Delete succesfully"
        });
    } catch (e) {
        res.status(400).json({
            ok: false,
            messaje: "Error in server",
        });
    }
};


