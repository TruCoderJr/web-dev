const mongoose = require("mongoose");
const { Schema } = require("mongoose");

main()
  .then(() => console.log("Connection successful"))
  .catch((err) => console.log(err));

async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/relation");

  // use `await mongoose.connect('mongodb://post:password@127.0.0.1:27017/test');` if your database has auth enabled
}

const postSchema = new Schema({
  item: String,
  price: Number,
});


const Post = mongoose.model("Post", postSchema);

// let addpost = async () => {
//     let res = await post.insertMany([
//         {item:"Samosa", price: 12},
//         {item:"Chips", price: 10},
//         {item:"Chocolate", price: 40},]
//     )

//     console.log(res);
    
// }

// addpost();