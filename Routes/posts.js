const router = require('express').Router()
const Post = require('../Models/blogPost')


router.get('/', async (req,res) => {
  try {
    const posts = await Post.find()
    res.json(posts)
  } catch (err) {
    res.json({ message: err })
  }
})

router.post('/',  async (req, res) => {
  const post = new Post({
    title: req.body.title,
    image: req.body.image,
    body: req.body.body,
    tags: req.body.tags
  })
  //export
  try {
    const savedPost = await post.save()
    res.json(savedPost)
  } catch (err) {
    res.json({ message: err })
  }
})

module.exports = router