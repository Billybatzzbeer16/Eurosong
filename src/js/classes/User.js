export class User{
    constructor(firstname, lastname){
      this.firstname = firstname;
      this.lastname = lastname;
    }
  
    getfullname(){
      console.log(this.firstname + " " + this.lastname);
    }
  }
  
  let user1 = new User("Yannick", "Robijn");
  let user2 = new User("Brad", "Pitt");
  
  user1.getfullname();