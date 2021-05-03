const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const requireLogin = require("../middleware/requireLogin");
const Post = mongoose.model("Post");

router.get("/allpost", (req, res) => {
  Post.find()
    // the populate function is used to expand the id of the user with all his/her details
    .populate("postedBy", "_id name")
    .then((posts) => {
      res.json({ posts });
    })
    .catch((err) => {
      console.log(err);
    });
});

// A user can create the post and upload it.
/* If the title and the body isnt there then it will show an error message of status 422
then we save the Post Schema into a const called post and we save it with the function .save() and then using the .then() function we result in json format the result*/
router.post("/createpost", requireLogin, (req, res) => {
  const { title, body, pic } = req.body;
  if (!title || !body || !pic) {
    return res.status(422).json({ error: "Plase add all the fields" });
  }
  req.user.password = undefined;
  const post = new Post({
    title,
    body,
    photo: pic,
    postedBy: req.user,
  });
  post
    .save()
    .then((result) => {
      res.json({ post: result });
    })
    .catch((err) => {
      console.log(err);
    });
});

router.get("/userpost", requireLogin, (req, res) => {
  Post.find({ postedBy: req.user._id })
    .populate("postedBy", "_id name")
    .then((userposts) => {
      res.json({ userposts });
      console.log(userposts);
    })
    .catch((err) => {
      console.log(err);
    });
});
module.exports = router;
