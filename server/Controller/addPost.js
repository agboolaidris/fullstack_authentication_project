const AddPost = async(req,res,next)=>{
    try{
        if(req.isAuthenticated()){
        res.json({msg:req.user}) 
        }


   }
        

    catch(err){
        res.status(400).json({msg:err})
    }
   
}

module.exports = AddPost