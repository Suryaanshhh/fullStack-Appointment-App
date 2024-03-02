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

const userRoute=require('./routes/userRoutes')

app.use(bodyParser.json({extended:false}))

app.use(userRoute)


app.listen(5000);