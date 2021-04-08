const express = require('express')
const post = require('./models/blog')
const router = express.Router()

router.get('/',async (req,res) =>{
    try{
        const blog = await post.find();
        res.json(blog);
    }catch(err){
        res.json({message : err});
    }
});

router.post('/',async (req,res) =>{
    const blog = await post({
        title: req.body.title,
        description: req.body.description,
        author: req.body.author
    });
    try{
        const savedBlog = await blog.save();
        res.json(savedBlog);
    }catch(err){
        res.json({message:err});
    }
});

module.exports = router