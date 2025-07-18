const express = require("express");
const mongoose = require("mongoose");
const app = express();
const path = require("path");
const Chat = require("./models/chat.js");
const { log } = require("console");

const methodOverride = require('method-override');

app.use(methodOverride('_method'));


app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }));

async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/echat");
  return "Database connected";
}

main()
  .then((res) => {
    console.log(res);
  })
  .catch((err) => console.log(err));

app.get("/", (req, res) => {
  res.send("This is home");
});

// index route
app.get("/chats", async (req, res) => {
  let allChats = await Chat.find();
  // res.send(allChats)
  res.render("index.ejs", { allChats });
});

app.get("/chats/new", async (req, res) => {
  // let allChats =  await Chat.find();
  // res.send("new chat")
  // res.render('index.ejs', {allChats});
  res.render("new.ejs");
});

app.post("/chats/new", async (req, res) => {
  let { from, message, to } = req.body;
  let newChat = new Chat({
    from: `${from}`,
    to: `${to}`,
    message: `${message}`,
  });
  // console.log(newChat);
  // res.send(`new chat working ${newChat}`)
  newChat
    .save()
    .then((res) => {
      console.log(res);
    })
    .catch((e) => {
      console.log("error:", e);
    });
  res.redirect("/chats");
});

app.get("/chats/:id/edit", async (req, res) => {
  let { id } = req.params;
  let chat = await Chat.findById(id);
  if (!chat) {
    return res.status(404).send("Chat not found"); // Handle case where chat isn't found
  }
  // res.send(chat);
  res.render("edit.ejs", { chat });
});

app.put("/chats/:id", async (req, res) => {
  let { id } = req.params;
  let { message } = req.body;
  let chat = await Chat.findByIdAndUpdate(id, { message: message },{runValidators: true, new: true});
  // res.send(chat);
  res.redirect("/chats");
});

app.delete("/chats/:id", async (req, res) => {
  try {
    const chat = await Chat.findByIdAndDelete(req.params.id);
    if (!chat) {
      return res.status(404).send("Chat not found");
    }
    console.log("Deleted:", chat);
    res.redirect("/chats");
  } catch (e) {
    console.error("Delete error:", e);
    res.status(500).send("Internal server error");
  }
});


app.listen(3000, () => {
  console.log("server is listenin on port 3000");
});
