const mongoose = require("mongoose");

main()
  .then((res) => {
    console.log(res);
  })
  .catch((err) => console.log(err));

async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/userdb");
  return "Database connected";
}

// Tyre rent service DB

const userSchema = new mongoose.Schema({
  date: { type: Date, default: Date.now },
  vehno: { type: String, required: true },
  tg: { type: Number, min: 0 },
  tr: { type: Number, min: 0 },
  dno: { type: String },
  Tno: { type: String },
  tname: { type: String, trim: true },
  isDone: { type: Boolean, default: false },
});

// Set tr = tg if tr is not explicitly provided
userSchema.pre("save", function (next) {
  if (this.tr === undefined && this.tg !== undefined) {
    this.tr = this.tg;
  }
  next();
});

const User = mongoose.model("User", userSchema);

const u1 = new User({
  vehno: "TN 28 AU 5013",
  tg: 2,
  dno: "9632145785",
});

// async function saveUser(user) {
//   try {
//     const res = await user.save();
//     console.log("Saved successfully:", res);
//   } catch (err) {
//     console.error("Save error:", err.message);
//   }
// }

// saveUser(u1);

User.insertMany([{
      vehno: "TN 28 AU 1001",
      tg: 2,
      dno: "9876543210",
      Tno: "9123456780",
      tname: "Fast Movers",
    },
    {
      vehno: "TN 28 AU 1002",
      tg: 4,
      tr: 4, // optional if you want to override the default hook
      dno: "9988776655",
      Tno: "9876543210",
      tname: "Quick Transport",
    },
    {
      vehno: "TN 28 AU 1003",
      tg: 1,
      dno: "9012345678",
      Tno: "9123456789",
      tname: "Speedy Logistics",
    }])
    .then((res) => {
      console.log("Saved successfully:", res);
    })
    .catch((err) => {
      console.log("Save error", err);
    });