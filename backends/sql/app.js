import { faker } from "@faker-js/faker";
import mysql from "mysql2/promise";
import express from "express";
import path from "path";
import methodOverride from "method-override";
import { fileURLToPath } from "url";
import { dirname } from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express(); // ✅ app is now defined before usage

// MIDDLEWARES
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride("_method"));

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

// app.use(express.urlencoded({ extended: true }));
// app.use(express.json());
// app.use(methodOverride("_method"));
// app.use(express.static(path.join(__dirname, "public")));

// app.set("view engine", "ejs");
// app.set("views", path.join(__dirname, "views"));

// Create the connection to database
const connection = await mysql.createConnection({
  host: "localhost",
  user: "root",
  database: "delta_app",
  password: "Tufail7@",
});

// let q = "INSERT INTO user (id, username, email, password) VALUES ("123d", "newuserd", "abcd@gmail.com", "abcd")"
let user = ["123d", "newuserd", "abcd@gmail.com", "abcd"];
let users = [
  ["123b", "newuserb", "abcb@gmail.com", "abcb"],
  ["123c", "newuserc", "abcc@gmail.com", "abcc"],
];

// let data =[];
let getRandomUser = () => {
  return [
    faker.string.uuid(),
    faker.internet.username(),
    faker.internet.email(),
    faker.internet.password(),
  ];
};

app.get("/", async (req, res) => {
  let q = "SELECT count(*) from user";

  try {
    const [results] = await connection.query(q);

    console.log(results[0]["count(*)"]); // ✅
    // results contains rows returned by server
    //   console.log(fields); // fields contains extra meta data about results, if available
    let ans = results[0]["count(*)"];
    res.render("home.ejs", { ans });
  } catch (error) {
    console.log(error);
    res.send("Sorry, something is wrong:", error);
  }
});

app.get("/users", async (req, res) => {
  let q = "SELECT * from user";

  try {
    const [results] = await connection.query(q);

    // console.log(results); // ✅
    // results contains rows returned by server
    //   console.log(fields); // fields contains extra meta data about results, if available
    let ans = results[0]["count(*)"];
    res.render("users.ejs", { results });
    // res.send("working");
  } catch (error) {
    console.log(error);
    res.send("Sorry, something is wrong:", error);
  }
});

app.get("/users/:id/edit", async (req, res) => {
  let id = req.params.id;
  let error = req.query.error || null; // capture error flag from query
  let q = "SELECT id, username from user where id = ?";
  // console.log("id",id);
  try {
    const [results] = await connection.query(q, id);
    console.log(results);
    res.render("user.ejs", { results, error });
  } catch (error) {
    console.log(error);
    res.send(`Sorry, something is wrong ${error}`);
  }
});

app.patch("/users/:id", async (req, res) => {
  let id = req.params.id;
  let newUsername = req.body.username;
  let pass = req.body.pass;
  let q = `SELECT * FROM user where id =?`;

  try {
    const [results] = await connection.query(q, id);
    console.log(results);
    let userPass = results[0].PASSWORD;
    console.log(userPass);

    if (userPass != pass) {
      return res.render("user.ejs", {
        results,
        error: true, // ✅ flag to trigger the error box
        newUsername: newUsername, // ✅ send new username back to prefill
      });
    } else {
      q = `UPDATE user SET username = ? WHERE id = ? AND password = ?`;
      try {
        const [results] = await connection.query(q, [newUsername, id, pass]);
        console.log(results);
      } catch (error) {
        console.log(error);
        res.send(`Sorry, something is wrong: ${error}`);
      }
    }
    res.redirect("/users");
  } catch (error) {
    console.log(error);
    res.send(`Sorry, something is wrong: ${error}`);
  }
});

app.get("/users/:id/delete", async (req, res) => {
  let id = req.params.id;
  let error = req.query.error || null; // capture error flag from query
  let q = "SELECT * from user where id = ?";
  // console.log("id",id);
  try {
    const [results] = await connection.query(q, id);
    console.log(results);
    res.render("delete.ejs", { results, error });
  } catch (error) {
    console.log(error);
    res.send(`Sorry, something is wrong ${error}`);
  }
});

app.post("/users/:id/delete", async (req, res) => {
  let id = req.params.id;
  let fromEmail = req.body.email;
  let fromPass = req.body.pass;
  let q = `SELECT * FROM user where id =?`;

  fromEmail = fromEmail.trim();
  fromPass = fromPass.trim();

  try {
    const [results] = await connection.query(q, id);
    console.log(results);
    let userPass = results[0].PASSWORD;
    let userEmail = results[0].email;
    console.log(userPass);

    if (userPass != fromPass || userEmail != fromEmail) {
      return res.render("delete.ejs", {
        results,
        error: true,
      });
    } else {
      q = `DELETE FROM user WHERE email = ? AND password = ?`;
      try {
        const [results] = await connection.query(q, [fromEmail, fromPass]);
        console.log(results);
      } catch (error) {
        console.log(error);
        res.send(`Sorry, something is wrong: ${error}`);
      }
    }
    res.redirect("/users");
  } catch (error) {
    console.log(error);
    res.send(`Sorry, something is wrong: ${error}`);
  }
});

app.get("/users/add", (req, res) => {
  res.render("addUser.ejs");
});

app.post("/users/add", async (req, res) => {
  let { id, username, email, password } = req.body;

  if (!id || !username || !email || !password) {
    return res.render("addUser.ejs", { id, username, email, password });
  }
  let q = `INSERT INTO user (id, username, email, PASSWORD) VALUES (?, ?, ?, ?)`;
  try {
    const [results] = await connection.query(q, [
      id,
      username,
      email,
      password,
    ]);
    console.log(results);
  } catch (error) {
    console.log(error);
    res.send(`Sorry, something is wrong: ${error}`);
  }
  res.redirect("/users");
});

app.listen(3000);

// for (let i = 0; i <100; i++) {
//   data[i] = getRandomUser();
// }

// console.log(data.length);

// try {
//   const [results, fields] = await connection.query(q,[data]);

//   console.log(results); // results contains rows returned by server
// //   console.log(fields); // fields contains extra meta data about results, if available
// } catch (error) {
//     console.log(error);
// }

// connection.end();

// console.log(getRandomUser());
