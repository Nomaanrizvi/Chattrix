const express = require('express')
const http = require('node:http')
const { Server } = require('socket.io');
const cors = require('cors')
const { addUser, removeUser, getUser, getUsersInRoom } = require('./services');
const PORT = process.env.PORT || 3000

const app = express()
const server = http.createServer(app);
const io = new Server(server, {
    cors: {
        origin: "*",
        methods: ['GET', 'POST', 'PUT', 'DELETE'],
        credentials: true
    }
});


io.on('connection', (socket) => {
    console.log(`user connected with id: ${socket.id}`);


    socket.on('join', (data, callback) => {
        const { error, user } = addUser({ id: socket.id, name: data.name, room: data.room })

        if (error) return callback(error)

        socket.join(user.room)

        socket.emit('message', { user: 'admin', text: `${user.name}, welcome to room: ${user.room}` })

        socket.broadcast.to(user.room).emit('message', { user: 'admin', text: `${user.name}, has joined` })

        io.to(user.room).emit('roomData', { room: user.room, users: getUsersInRoom(user.room) })

        callback()
    })


    socket.on('sendMessage', (message, callback) => {
        const user = getUser(socket.id)

        if (!user) {
        console.log(`User not found for socket.id: ${socket.id}`);
        return callback("User not found.");
    }

        io.to(user.room).emit('message', { user: user.name, text: message })

        io.to(user.room).emit('roomData', { room: user.room, users: getUsersInRoom(user.room) })

        callback()
    })


    socket.on('disconnect', () => {
        // console.log('user disconnected');

        const user = removeUser(socket.id)

        if (user) {
            io.to(user.room).emit('message', { user: 'admin', text: `${user.name}, has left` })
            io.to(user.room).emit('roomData', { room: user.room, users: getUsersInRoom(user.room) })
        }
    })
})

app.use(cors())

app.get('/', (req, res) => {
    console.log('hey from server');
})

server.listen(PORT, () => {
    console.log(`server started on http://localhost:${PORT}`);
})