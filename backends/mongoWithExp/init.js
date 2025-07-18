const mongoose = require("mongoose");
const Chat = require("./models/chat.js");

async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/echat");
  return "Database connected";
}

main()
  .then((res) => {
    console.log(res);
  })
  .catch((err) => console.log(err));

let allChat = [
  {
    from: "bob",
    to: "adam",
    message: "Tell me the starting date of mid-sem exam",
    created: new Date(),
  },
  {
    from: "alice",
    to: "john",
    message: "Hey, are you joining the study group today?",
    created: new Date("2025-07-14T14:05:00"),
  },
  {
    from: "john",
    to: "alice",
    message: "Yeah, I’ll be there around 5 PM.",
    created: new Date("2025-07-14T14:06:30"),
  },
  {
    from: "dave",
    to: "alice",
    message: "Can you share yesterday’s notes?",
    created: new Date("2025-07-14T14:10:00"),
  },
  {
    from: "alice",
    to: "dave",
    message: "Sure, give me 10 minutes.",
    created: new Date("2025-07-14T14:11:00"),
  },
  {
    from: "john",
    to: "dave",
    message: "The notes were really helpful, thanks for the last batch!",
    created: new Date("2025-07-14T14:15:00"),
  },
  {
    from: "dave",
    to: "john",
    message: "No problem! Let me know if you need more.",
    created: new Date("2025-07-14T14:16:00"),
  },
  {
    from: "emma",
    to: "alice",
    message: "What topic are we covering in the study group?",
    created: new Date("2025-07-14T14:20:00"),
  },
  {
    from: "alice",
    to: "emma",
    message: "We’re doing chapter 6 today—Probability.",
    created: new Date("2025-07-14T14:21:00"),
  },
];

Chat.insertMany(allChat);
