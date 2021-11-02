import Room from "../modals/room"

const allRooms=(req,res)=>{
    res.status(200).json({
        success:true,
        message:"all rooms"
    })
}

const createNewRoom=async (req,res)=>{
    console.log(req.body,"{}")
try { 
   
    const room=await Room.create(req.body);

    res.status(200).json({
        success:true,
        room
    })
}catch(error){
    res.status(400).json({
        success:false,
        error:error.message
    })
}

  
}

export {
    allRooms,
    createNewRoom
}