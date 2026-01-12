const express= require('express')
const app=express();
const PORT = process.env.PORT || 5000;
const authRouter = require('./router/auth-router');

app.use('/', authRouter);

// app.get('/',(req,res)=>{
//     res.status(200).send("Welcome on home page");
// });
// app.get('/register',(req,res)=>{
//     res.status(200).send("welcome on registration page");
// });

// app.get and router then router path will be considered first 
app.listen(PORT,()=>{
    console.log(`https://localhost:${PORT}`);
})