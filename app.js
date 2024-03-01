const Express=require('express');
const bodyParser=require('body-parser');
const Cors=require('cors');
const sq=require('./utility/database');
const User=require('./model/user');
const app=Express();
sq.sync().then((result)=>{
    //console.log(result)
}).catch(err=>console.log(err))
app.use(Cors());

app.use(bodyParser.json({extended:false}))

app.post('/add-user',async (req,res,next)=>{
    const name=req.body.name;
    const email=req.body.email;
    const number=req.body.number;
   const data=await User.create({
        name:name,
        email:email,
        number:number
    })
     res.status(201).json({user:data})
})


app.listen(5000);