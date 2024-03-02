const User=require('../model/user')

exports.getUser=(req,res,next)=>{
    User.findAll().then((users)=>{
        console.log(users)
        res.status(200).json({user:users})
    }).catch(err=>console.log(err))
}

exports.PostUser=async (req,res,next)=>{
    const name=req.body.name;
    const email=req.body.email;
    const number=req.body.number;
   const data=await User.create({
        name:name,
        email:email,
        number:number
    })
     res.status(200).json({user:data})
}

exports.Deleteuser=(req, res, next) => {
    const uId=req.params.id;
    console.log(uId);
    User.destroy({where:{id:uId}}).then((result)=>{
        console.log(result)
        res.status(200).json({message:'Successfull'})
    }).catch(err=>console.log(err))
  }

