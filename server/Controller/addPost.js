const Article = require('../Module/TodoModule')

const AddPost = async(req,res,next)=>{
    try{
        if(req.isAuthenticated()){
            const {username} = req.user;
            const New_Article = {username, ...req.body};

            const Save_article = new Article(New_Article)
            Save_article.save()
            .then(response=>{
                req.user.Article.push(response)
                req.user.save()
                .then(()=>{
                    res.json('post save!!!')
                })
                .catch(err=>{
                    res.status(400).json({msg:err})
                })
              
            })
            .catch(err=>{
               res.status(400).json({msg:err})
            })
        }


   }
        

    catch(err){
        res.status(400).json({msg:err})
    }
   
}

module.exports = AddPost