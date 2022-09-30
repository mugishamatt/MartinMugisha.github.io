
function User(firstname, lastname, birthDate) { this.firstname = firstname;
    this.lastname = lastname;
    this.birthDate = birthDate;
    }
    let user1 = new User('John', 'Smith', new Date('2000-10-01'));
    let user2 = new User('Edward', 'Hopkins', new Date('1991-11-14'));
    function getFullName() { return this.firstname + ' ' + this.lastname;}
    function getAge() {return new Date().getFullYear() - this.birthDate.getFullYear();}

    User.prototype.getFullName=getFullName;
    User.prototype.getAge=getAge;

    //complete the code so that the above functions reside in a single object and are inherited by all User //objects that are created using User as a constructor function.
    console.log(user1.getFullName()); //John Smith 
    console.log(user1.getAge()); //21
    console.log(user2.getFullName()); //John Smith 
    console.log(user2.getAge()); //21


//


let animal = {
    eats: true,
    walk() {
    console.log("Animal walk");
    }
  };
  
  let rabbit = {
    jumps: true,
   // __proto__: animal    
  };
  rabbit.__proto__=animal;
  // walk is taken from the prototype
  rabbit.walk(); // Animal walk
 
  console.log(animal.isPrototypeOf(rabbit))//false



  console.log("***************************************************** *")

  let user = {
    name: "John",
    surname: "Smith",
  

    set fullName(value){
       [this.name,this.surname]=value.split(" ");
    },

    get fullName(){ 
        return `${this.name} ${this.surname}`;

    },
}

  let admin = {
    __proto__: user,
    isAdmin: true
  };
  
  console.log(admin.fullName); // John Smith (*)
  
  // setter triggers!
 admin.fullName = "Alice Cooper"; // (**)
  
   console.log(admin.fullName); // Alice Cooper, state of admin modified
  console.log(user.fullName); // John Smith, state of user protected