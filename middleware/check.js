const check = (req,res,next)=>{
    let {email, password} = req.body

    if(email&&password){
        next()
    }
    else{
        res.status(404).send("All fields are required")
    }
}

module.exports = check