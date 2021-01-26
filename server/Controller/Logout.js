const User = require('../Module/AuthModule')
const Logout = async(req,res)=>{
  try{
    const user = await User.findById(req.userID)
    if(user){   
         res.cookie()
         res.json({msg:'logout successful'})
      }
  } 

   catch(err){
       res.status(400).json({msg:err.message})
   }
}

module.exports = Logout