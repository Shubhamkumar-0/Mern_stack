const express=require('express')
const app=express();
const router=express.Router();

// app.get('/',(req,res)=>{
//     res.status(200).send("Welcome on home page");
// });
// app.get('/register',(req,res)=>{
//     res.status(200).send("welcome on registration page");
// });
// app.listen(PORT,()=>{
//     console.log(`https://localhost:${PORT}`);
// }) 

router.get('/',(req,res)=>{
    res.status(200).send("Welcome on home page using router");
});

router.get('/register',(req,res)=>{
    res.status(200).send("welcome on registration page using router");
});

module.exports=router;
