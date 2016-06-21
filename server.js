import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import http from 'http';
import socket from 'socket.io';
import ENV from './env';
import socketEvt from './socket';

const app = express();
const server = http.createServer(app);
const io = socket(server);
socketEvt(io, app);
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
mongoose.connect(ENV.MONGO_URI);
const listener = server.listen(ENV.SERVER_PORT, () => console.log(
  `Express Server is now running on port ${listener.address().port}`
));
export default app;
