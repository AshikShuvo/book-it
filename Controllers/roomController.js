
import Room from "../modals/room"
import ErrorHandler from "../utils/errorHandler";
import catchAsyncError from '../middlewares/asyncError'
const allRooms=catchAsyncError(async (req,res)=>{
        const rooms = await Room.find();
        res.status(200).json({
            success:true,
            rooms
        })
})

const createNewRoom=catchAsyncError(async (req,res,next)=>{
    const room=await Room.create(req.body);
    res.status(200).json({
        success:true,
        room
    })
})


const getSingleRoom=catchAsyncError(async (req,res,next)=>{
        const room = await Room.findById(req.query.id);
        if(!room){
           return next(new ErrorHandler("rom not found",404))
        }
        res.status(200).json({
            success:true,
            room
        })
})

const updateSingleRoom=catchAsyncError(async (req,res,next)=>{
    
        let room = await Room.findById(req.query.id);
        if(!room){
            return next(new ErrorHandler("rom not found",404))
        }
        room=await Room.findByIdAndUpdate(req.query.id,req.body,{
            new:true,
            runValidators:true,
            useFindAndModify:false
        })
        res.status(200).json({
            success:true,
            room
        })
})
const deleteSingleRoom=catchAsyncError(async (req,res,next)=>{
        const room = await Room.findById(req.query.id);
        if(!room){
            return next(new ErrorHandler("rom not found",404))
        }
        await room.remove();
        res.status(200).json({
            success:true,
            message:"room is deleted"
        })
})
export {
    allRooms,
    createNewRoom,
    getSingleRoom,
    updateSingleRoom,
    deleteSingleRoom
}