const User = require('../Module/AuthModule')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

//handle the cookie token
 const handleToken = (userID)=>{
   return  jwt.sign(userID, process.env.JWT_SECRET)
}


const Login = async(req,res)=>{
  try { 
    const {email, password} = req.body;
    if(!email, !password){
     return res.status(400).json({msg:'the field is required'})   
    }
     const user = await User.findOne({email})
     if(!user){
         return res.status(400).json({msg:'no such an account is register'})
     }

     const verifyPassword = await bcrypt.compare(password, user.password)
     if(!verifyPassword) {
         return res.status(400).json({msg:'email or password does not match'})
     } 
     console.log(user._id)
     const access_token = await handleToken(user._id)
     console.log(access_token)
     //res.cookie('access-token',access_token)
     return res.json({msg:'successful'})
         
   }

   catch(err){
       res.status(401).json({msg:err.message})
   }

}

module.exports = Login