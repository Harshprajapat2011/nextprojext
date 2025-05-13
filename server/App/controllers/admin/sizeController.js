let sizeview=(req,res)=>{
    res.send("size view")
}

let sizeinsert=(req,res)=>{
    res.send("size add")
}

let sizedelete=(req,res)=>{
    res.send("size delete")
}

module.exports={sizeview,sizeinsert,sizedelete}