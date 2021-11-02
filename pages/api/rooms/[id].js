import nc from 'next-connect';
import dbConnect from '../../../config/dbConnect';
import { allRooms, createNewRoom, getSingleRoom } from '../../../Controllers/roomController';
const handler=nc();

dbConnect();

handler.get(getSingleRoom);
export default handler;