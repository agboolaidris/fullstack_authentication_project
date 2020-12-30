const jwt = require('jsonwebtoken')
const Auth = (req,res,next)=>{
    const token = req.header('X-auth-token')
    if(!token){
     return  res.status(401).json({msg:'token is not available'})   
    }
    const verifed_token = jwt.verify(token,process.env.JWT_SECRET)
    if(!verifed_token){
        return res.status(401).json({msg:'token/....'})
    }  

    req.user = verifed_token.id
    next()
}

module.exports = Auth;