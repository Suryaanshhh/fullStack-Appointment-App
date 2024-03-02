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

app.get('/get-user',(req,res,next)=>{
    User.findAll().then((users)=>{
        console.log(users)
        res.status(200).json({user:users})
    }).catch(err=>console.log(err))
})



app.post('/add-user',async (req,res,next)=>{
    const name=req.body.name;
    const email=req.body.email;
    const number=req.body.number;
   const data=await User.create({
        name:name,
        email:email,
        number:number
    })
     res.status(200).json({user:data})
})



app.delete(`/delete-user/:id`,(req, res, next) => {
    const uId=req.params.id;
    console.log(uId);
    User.destroy({where:{id:uId}}).then((result)=>{
        console.log(result)
        res.status(200).json({message:'Successfull'})
    }).catch(err=>console.log(err))
  }
)

app.listen(5000);