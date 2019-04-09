var socket = io();

var socketChat = document.getElementById('socketChat-wrapper');
var chatJoin = document.getElementById('centered-form-wrapper');
window.onclick = function(event) {
    if (event.target == socketChat) {
        socketChat.style.display = "none";
    }
    if(event.target == chatJoin){
        chatJoin.style.display='none';
    }
}

function scrollToBottom() {
    //Selectors
    var messages = jQuery('#messages');
    var newMessage = messages.children('li:last-child');
  
    //heights
    var clientHeight = messages.prop('clientHeight');
    var scrollTop = messages.prop('scrollTop');
    var scrollHeight = messages.prop('scrollHeight');
    var newMessageHeight = newMessage.innerHeight();
    var lastMessageHeight = newMessage.prev().innerHeight();
  
    if(clientHeight + scrollTop + newMessageHeight + lastMessageHeight >= scrollHeight) {
      // console.log('Shoul scroll');
      messages.scrollTop(scrollHeight);
    }
  
  }
var loginUser 

loginUser = jQuery.get('/api/current_user', function(data,status){
    //get current user info
    loginUser = data.name;
})

if(loginUser == 'Agent'){ //if user is Agent
    document.getElementById('userList').style.display='block';
}
jQuery('.socketChat-float').on('click',function(){
    //if user is Agent
    if(loginUser == 'Agent'){
        document.getElementById('centered-form-wrapper-agent').style.display=='flex'? 
        document.getElementById('centered-form-wrapper-agent').style.display='none':document.getElementById('centered-form-wrapper-agent').style.display='flex'
    }
    else{
        // console.log("not agent");
        document.getElementById('centered-form-wrapper').style.display=='flex'? 
        document.getElementById('centered-form-wrapper').style.display='none':document.getElementById('centered-form-wrapper').style.display='flex'
    }
    
})

//join the chat
jQuery('#centered-form').on('submit', function(e) {
  e.preventDefault();
  
    var params={name:jQuery('[name=chatJoinName]').val(),
                room:jQuery('[name=chatJoinName]').val()
            }
    
    socket.emit('join', params, function(err){
        if(err){
            // console.log(err);
            alert(err);
        }
        else{
            document.getElementById('centered-form-wrapper').style.display='none';
            document.getElementById('socketChat-wrapper').style.display='block';
        }
    })

});
//join as agent to the chat
jQuery('#centered-form-agent').on('submit', function(e) {
    e.preventDefault();
    
      var params={name:jQuery('[name=chatJoinNameAgent]').val(),
                  room:jQuery('[name=chatJoinRoom]').val()
              }
              
      socket.emit('join', params, function(err){
          if(err){
              // console.log(err);
              alert(err);
          }
          else{
              document.getElementById('centered-form-wrapper').style.display='none';
              document.getElementById('socketChat-wrapper').style.display='block';
          }
      })
  
  });

socket.on('connect', function() {
    console.log('connected to server');

    
})


  
//get newMessage from the server
socket.on('newMessage', function(message) {
    // console.log(message);
    var formattedTime = moment(message.createdAt).format('h:mm a');
    var li = jQuery('<li></li>');
    // li.text(`${message.from}: ${message.text}`);
    li.text(`${message.from} ${formattedTime}: ${message.text}`);
  
    jQuery('#messages').append(li);
    scrollToBottom();

});

socket.on('disconnect',function() {
    console.log('disconnected from server');
})
//get user list
socket.on('updateUserList', function(users) {
    // console.log('Users list', users);
    var ul = jQuery('<ul></ul>');
  
    users.forEach(function(user) {
      ul.append(jQuery('<li></li>').text(user));
    });
  
    jQuery('#userList').html(ul);
  
  })
  


jQuery('#message-form').on('submit', function(e) {
    e.preventDefault();
    
    var messageTextbox = jQuery('[name=message]');
    // var messageUser = jQuery('[name=chatJoinName]');
    // var messageRoom = jQuery('[name=chatJoinName]');

    socket.emit('createMessage',{
    //   from: messageUser.val(),
      text: messageTextbox.val()
    //   room: messageRoom.val()
    },function(){ //acknowledgement

        messageTextbox.val('');
  
    });
    messageTextbox.val('');
  });