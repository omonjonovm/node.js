const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const PostSchema = require("./models/post.js");

dotenv.config();

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello world");
});

app.get("/posts", async (req, res) => {
  try {
    const posts = await PostSchema.find();
    return res.json(posts);
  } catch (error) {
    console.log(error);
  }
});

app.post("/", async (req, res) => {
  const { title, decription } = req.body;
  try {
    if (req.body) {
      if (title && decription) {
        const newPost = new PostSchema(req.body);
        newPost.save();
        return res.json({ message: "Yangi post yaratildi!" });
      } else {
        return res.json({ message: "Malumotlarni to'ldiring!" });
      }
    } else {
      return res.json({ message: "Notog'ri sorov!" });
    }
  } catch (error) {
    console.log(error);
  }
});

app.delete("/:id", async function (req, res) {
  const postId = req.params.id;
  try {
    const deletedPost = await PostSchema.findByIdAndDelete(postId);
    return res.json({ message: "Post muvaffaqiyatli o'chirildi" });
  } catch (error) {
    return res.json({ message: "Error" });
  }
});

async function startApp() {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    app.listen(process.env.PORT, () => {
      console.log(`server is running on http://localhost:${process.env.PORT}`);
    });
  } catch (err) {
    console.log(err);
  }
}

startApp();
