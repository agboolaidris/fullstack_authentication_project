const jwt = require('jsonwebtoken')

const verifyToken = (token)=>{
    const token = jwt.verify(token, process.env.JWT_SECRET)
    console.log(token)
}
const Authorize = (req,res,next)=>{
   const token = req.cookie['access-token']
   if(!token){
    return res.status(400).json({msg:'unathorize'})
   }
   
   return res.json({msg})
   
}

module.exports = Authorize