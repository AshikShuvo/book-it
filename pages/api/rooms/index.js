import nc from 'next-connect';
import dbConnect from '../../../config/dbConnect';
import onError from '../../../middlewares/errors'
import { allRooms, createNewRoom } from '../../../Controllers/roomController';
const handler=nc({onError});

dbConnect();

handler.get(allRooms);
handler.post(createNewRoom);

export default handler;