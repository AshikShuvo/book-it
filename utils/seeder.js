const Room = require( "../modals/room");
const dbConnect = require( '../config/dbConnect');
const rooms = require( '../data/rooms.json');
dbConnect()
const seedRooms=async ()=>{
    try{
        await Room.deleteMany();
        console.log('rooms are deleted')
        await Room.insertMany(rooms);
        console.log('all rooms are added')
    }catch(error){
        console.log(error)
    }
}
seedRooms();