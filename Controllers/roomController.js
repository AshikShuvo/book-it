const allRooms=(req,res)=>{
    res.status(200).json({
        success:true,
        message:"all rooms"
    })
}

export {
    allRooms
}