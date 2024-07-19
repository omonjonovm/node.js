const express = require('express')
const mongoose = require('mongoose')
const dotenv = require('dotenv')
const PostSchema = require('./models/post.js')


dotenv.config();

const app = express()

app.use(express.json())

app.get("/", (req,res) => {
  res.send("hello olam")
})

app.get("/posts",async (req,res) => {
  try {
    const posts = await PostSchema.find();
    return res.json(posts)
  } catch (error) {
    console.log(error);
  }
})

app.post('/', async (req,res) => {
  try {
    const newPost = new PostSchema(req.body);
    newPost.save()
    res.json({data:newPost})
  } catch (error) {
    console.log(error);
  }
})
async function startApp(){
  try {
    await mongoose.connect(process.env.MONGO_URI)
    app.listen(process.env.PORT, () => {
      console.log(`server is runing on port http://localhost:${process.env.PORT}`);
    })
  } catch (error) {
    console.log(error);
  }
}
startApp()