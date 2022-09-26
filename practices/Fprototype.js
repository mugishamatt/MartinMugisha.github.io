let animal = {
    eats: true
  };
  
  function Rabbit(name) {
    this.name = name;
  }

 Rabbit.prototype=animal;

  Rabbit.prototype.greet=function(){
    console.log("hello")
  }

  let rabbit=new Rabbit("test")
  
  console.log(Rabbit.prototype)
  console.log(rabbit.eats)
  rabbit.greet();
  
  console.log(Rabbit.prototype.isPrototypeOf(rabbit))//true
  console.log(Rabbit.isPrototypeOf(rabbit))//false

