import Room from "../modals/room"

const allRooms=async (req,res)=>{
    try{
        const rooms = await Room.find();
        res.status(200).json({
            success:true,
            rooms
        })
    }catch(error){
        res.status(400).json({error:error.message,success:false})
    }
    
}

const createNewRoom=async (req,res)=>{
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


const getSingleRoom=async (req,res)=>{
    try{
        const room = await Room.findById(req.query.id);
        if(!room){
           return res.status(404).json({error:'room not found with this id',success:false})
        }
        res.status(200).json({
            success:true,
            room
        })
    }catch(error){
        res.status(400).json({error:error.message,success:false})
    }
}
export {
    allRooms,
    createNewRoom,
    getSingleRoom
}