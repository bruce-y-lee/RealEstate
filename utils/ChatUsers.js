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
      
      var namesArray = this.users.map((user)=>{
          return user.name
      })
      return namesArray;
    }
  }
  
  module.exports = {ChatUsers};
  