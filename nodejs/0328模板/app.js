const express = require('express');
const app = express()



const userRouter = require("./router/user.js");

app.use("/user", userRouter);

app.listen(3000, () =>{
    console.log('server running')
})