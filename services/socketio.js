const socketIO = require('socket.io');
const {generateMessage} = require('../utils/message');
const {isRealString} = require('../utils/isRealString');
const {ChatUsers} = require('../utils/ChatUsers');


module.exports = server => {

    var io = socketIO(server);
    var users = new ChatUsers();

    io.on('connection', (socket)=>{
    console.log('New user connected');

    io.emit('updateUserList', users.getUserList());
    console.log(users.getUserList())

    socket.on('join', (params,callback)=>{
        if(!isRealString(params.name) || !isRealString(params.room)){
            callback('Name and room name are required!')
        }

        callback();

        socket.join(params.room);

        users.removeUser(socket.id);
        users.addUser(socket.id, params.name, params.room);
        // console.log(req.user)
       
         //io.emit -> everyone io.to('room2')
      //socket.broadcast everyone except itself -> socket.broadcast.to('room2')
      // socket.emit -> socket.emit('room2')

      //io.emit send message to evverybody connected
//socket.emit from Admin text welcome to the chat ap
    socket.emit('newMessage', generateMessage('Admin',` Hello ${params.name}! Welcome to the chat. Agent will join the chat soon.`));
  
    //socket.broadcast.emit from Admin text New user joined except the new user
    socket.broadcast.to(params.room).emit('newMessage',generateMessage('Admin', `${params.name} has joined`));
  

    })


    socket.on('createMessage', (message, callback)=>{
        console.log(message);
        //send message all client and server
        // io.to(message.room).emit('newMessage', generateMessage(message.from,message.text));
        // callback('This is from the server'); //acknowledgement

        var user = users.getUser(socket.id);
        if(user && isRealString(message.text)){
          io.to(user.room).emit('newMessage', generateMessage(user.name,message.text));
        }
        //send message all but me
        // socket.broadcast.emit('newMessage',{
        //   from: message.from,
        //   text: message.text,
        //   createdAt: new Date().getTime()
        // });
      })
  

    socket.on('disconnect',(e)=>{
        console.log(e);
        // console.log('User was disconnected');
        var user = users.removeUser(socket.id);

      if(user){
        io.to(user.room).emit('updateUserList', users.getUserList(user.room));
        io.to(user.room).emit('newMessage',generateMessage('Admin',`${user.name} has left.`));
      }
      })
})

};