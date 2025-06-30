const express = require('express');
const app = express();
const port = 3000;

// console.dir(app);

app.listen(port,()=>{
    console.log("app is listening",port);
});

app.use((req,res)=>{
    console.log("reqest is receved");
    res.send("This is a responce")
});
