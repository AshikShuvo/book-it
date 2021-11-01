import nc from 'next-connect';
import { allRooms } from '../../../Controllers/roomController';
const handler=nc();

handler.get(allRooms);

export default handler;