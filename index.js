const express = require('express');

const app = express();
const http = require('http');
const { dirname } = require('path');
const server = http.createServer(app);
const{ Server, Socket } = require('socket.io');

const io = new Server(server);

const port = 4000;


app.get('/', (req, res) =>{
    res.sendFile(__dirname + '/frontEnd/index.html');
})

io.on('connect',(socket)=>{
    console.log('a user connect');
    socket.on('disconnect',()=>{
        console.log('user disconnect');
    })
    socket.on('send message', (name, message) =>{
        io.emit('send everyone',name,  message);
    })
    
})



server.listen(port, () =>{
    console.log(`server listen port http://localhost:${port}`);
})
/* app.listen(port,()=>{
    console.log(`app listen port http://localhost:${port}`);
}) */