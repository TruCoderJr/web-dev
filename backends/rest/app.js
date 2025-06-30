const express = require("express");
const { v4: uuidv4 } = require("uuid");
var methodOverride = require("method-override");

const app = express();
const port = 3000;
const path = require("path");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(methodOverride("_method"));
app.use(express.static(path.join(__dirname, "public")));

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

let posts = [
  {
    id: uuidv4(),
    username: "apnacollege",
    content: "I love coding!",
  },
  {
    id: uuidv4(),
    username: "shradhakhapra",
    content: "Hard work is important to achieve success",
  },
  {
    id: uuidv4(),
    username: "rahulkumar",
    content: "I got selected for my 1st internship!",
  },
  {
    id: uuidv4(),
    username: "techie_ritu",
    content: "Debugging teaches you patience and logic.",
  },
  {
    id: uuidv4(),
    username: "coder_aman",
    content: "Just built my first full-stack app!",
  },
  {
    id: uuidv4(),
    username: "neha.codes",
    content: "Practice every day, even if it's just 30 minutes.",
  },
  {
    id: uuidv4(),
    username: "dev_siddharth",
    content: "Open-source contributions boosted my confidence!",
  },
];

app.get("/posts", (req, res) => {
  res.render("index.ejs", { posts });
});

app.post("/post", (req, res) => {
  const newpost = req.body;
  let newid = uuidv4();
  posts.unshift({
    id: newid,
    username: newpost.username,
    content: newpost.content,
  });
  res.redirect("/posts");
});

app.get("/posts/new", (req, res) => {
  res.render("form.ejs");
});

app.get("/posts/:id", (req, res) => {
  let { id } = req.params;
  let post = posts.find((p) => id == p.id);
  res.render("post.ejs", { post });
});

app.patch("/posts/:id", (req, res) => {
  let { id } = req.params;
  let newCon = req.body.content;

  let post = posts.find((p) => id == p.id);
  // res.render("post.ejs",{post});
  post.content = newCon;

  console.log(post);

  res.redirect("/posts");
});

app.get("/posts/:id/edit", (req, res) => {
  let { id } = req.params;
  let post = posts.find((p) => id === p.id); // Use strict equality if possible

  if (!post) {
    return res.status(404).send("Post not found");
  }

  res.render("edit.ejs", { post });
});

app.delete("/posts/:id",(req, res) => {
  let { id } = req.params;
  let newPost = posts.filter((p) => id !== p.id);
  posts = newPost;
  res.redirect("/posts");
});

app.listen(port, () => {
  console.log("App is lisening", port);
});
