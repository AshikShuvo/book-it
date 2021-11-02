import nc from 'next-connect';
import dbConnect from '../../../config/dbConnect';
import {  getSingleRoom,updateSingleRoom,deleteSingleRoom } from '../../../Controllers/roomController';
const handler=nc();

dbConnect();

handler.get(getSingleRoom);
handler.put(updateSingleRoom)
handler.delete(deleteSingleRoom)
export default handler;