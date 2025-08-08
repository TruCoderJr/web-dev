const mongoose = require("mongoose");
const { Schema } = require("mongoose");

main()
  .then(() => console.log("Connection successful"))
  .catch((err) => console.log(err));

async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/relation");

  // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
}

const userSchema = new Schema({
  username: String,
  email: String,
});

const postSchema = new Schema({
  content: String,
  likes: Number,
  user: [
    {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
  ],
});

const User = mongoose.model("User", userSchema);
const Post = mongoose.model("Post", postSchema);

let addData = async (u) => {
  let u1 = await User.findOne({username: "rahul"});

  let p1 = new Post({
    content: "Hello world",
    likes: 4,
  });

  p1.user = u1;

  // let res = await u1.save();
  let res1 = await p1.save();

  // console.log(res);
  console.log(res1);
};

addData();