class ChatUsers {
    constructor() {
      this.users = [];
    }
  
    addUser (id, name, room) {
      var user = {id, name, room};
      this.users.push(user);
      return user;
    }
  
    removeUser(id){
      // var users = this.users.filter((user)=>user.id !== id);
      // console.log("users :",users);
      // this.users = users;
      // return users;
  
      var user = this.getUser(id);
      if(user) {
        this.users = this.users.filter((user)=> user.id !== id);
      }
      return user;
    }
    getUser(id){
      var idUser = this.users.filter((user)=>user.id === id)[0];
      return idUser;
    }
    getUserList(){
      // var users = this.users.filter((user)=>user.room === room);
      var namesArray = this.users.map((user)=>{
          return user.name
      })
      return namesArray;
    }
  }
  
  module.exports = {ChatUsers};
  