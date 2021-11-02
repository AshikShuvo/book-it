import nc from 'next-connect';
import dbConnect from '../../../config/dbConnect';
import { allRooms, createNewRoom } from '../../../Controllers/roomController';
const handler=nc();

dbConnect();

handler.get(allRooms);
handler.post(createNewRoom);

export default handler;