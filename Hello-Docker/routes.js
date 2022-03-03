const express = require("express")
const Post = require("./models/Post")
const router = express.Router()

// Home
router.get("/", async (req, res) => {
    res.send("Welcome to the app, Darling:)")
})

// Get all  posts
router.get("/posts", async (req, res) => {
    const posts = await Post.find()
    res.send(posts)
})

// Create post
router.post("/posts", async (req, res) => {
    const post = new Post({
        title: req.body.title,
        content: req.body.content,
    })
    await post.save()
    res.send(post)
})

// Get one post
router.get("/posts/:id", async (req, res) => {
    try {
        const post = await Post.findOne({_id: req.params.id})
        res.send(post)
    } catch {
        res.status(404)
        res.send({ error: "Post doesn't exist!"})
    }
}) 

// Update post
router.patch("/posts/:id", async (req, res) => {
	try {
		const post = await Post.findOne({ _id: req.params.id })

		if (req.body.title) {
			post.title = req.body.title
		}

		if (req.body.content) {
			post.content = req.body.content
		}

		await post.save()
		res.send(post)
	} catch {
		res.status(404)
		res.send({ error: "Post doesn't exist!" })
	}
})

// Delete post
router.delete("/posts/:id", async (req, res) => {
	try {
		await Post.deleteOne({ _id: req.params.id })
		res.status(204).send("Post Deleted")
	} catch {
		res.status(404)
		res.send({ error: "Post doesn't exist!" })
	}
})

module.exports = router