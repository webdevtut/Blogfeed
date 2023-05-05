const mongoose = require('mongoose');
const requireLogin = require('../middlewares/requireLogin');
const cleanCache = require('../middlewares/cleanCache');

const Blog = mongoose.model('Blog');

module.exports = app => {
  app.get('/api/blogs/:id', requireLogin, async (req, res) => {
    const blog = await Blog.findOne({
      _user: req.user.id,
      _id: req.params.id
    });

    res.send(blog);
  });

  app.get('/api/publicblogs', async (req, res) => {
    const blogs = await Blog.find({ blogType: 'public' });
    res.send(blogs);
  });

  app.get('/api/like/:id', requireLogin,  async (req, res) => {
    console.log('working');
    const blogs = await Blog.findByIdAndUpdate(
      { 
        "_id": mongoose.Types.ObjectId(req.params.id), 
        "likes": { "$ne": mongoose.Types.ObjectId(req.user.id) }
    },
      {
        "$addToSet": {"likes": mongoose.Types.ObjectId(req.user.id)}
      }
    )
    res.send(blogs);
  });

  app.get('/api/blogs', requireLogin, async (req, res) => {
    const blogs = await Blog.find({ _user: req.user.id }).cache({key: req.user.id});
    res.send(blogs);
  });

  app.post('/api/blogs', requireLogin, cleanCache,  async (req, res) => {
    const { title, content } = req.body;

    const blog = new Blog({
      title,
      content,
      _user: req.user.id
    });

    try {
      await blog.save();
      res.send(blog);
    } catch (err) {
      res.send(400, err);
    }
  });
};
