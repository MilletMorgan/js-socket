const express = require('express');
const http = require('http');

const cors = require('cors')

const app = express();
const server = http.createServer(app);

const io = require("socket.io")(server, {
    cors: {
        origin: "http://localhost:8080",
        methods: ["GET", "POST"]
    }
});

app.use(cors())

app.get('/', (req: any, res: { send: (arg0: string) => void; }) => {
    res.send("ezr");
});

io.on('connection', (socket: { on: (arg0: string, arg1: (msg: string) => void) => void; }) => {
    console.log('a user connected');
    socket.on('send message', (msg: string) => {
        console.log('message: ' + msg)
        io.emit('get message', `Message '${msg}' reçu`)
    })
});

server.listen(3000, () => {
    console.log('listening on *:3000');
});
