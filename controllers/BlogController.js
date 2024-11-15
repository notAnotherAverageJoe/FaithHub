const res = require("express/lib/response");
const BlogPost = require("../models/BlogPosts");

class BlogPostController {
  static async createBlogPost(req, res) {
    try {
      const { title, content, author, published_date } = req.body;
      const newBlogPost = await BlogPost.create({
        title,
        content,
        author,
        published_date,
      });
      res.status(201).json(newBlogPost);
    } catch (error) {
      res.status(500).json({
        message: "Error creating a new blog, check blog creation controller",
      });
    }
  }
  static async getAllBlogPosts(req, res) {
    try {
      const blogs = await BlogPost.findAll();
      res.status(201).json(blogs);
    } catch (error) {
      res
        .status(500)
        .json({ message: "Failed to fetch all of the blog posts" });
    }
  }
}

module.exports = BlogPostController;
