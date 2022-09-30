let animal = {
    eats: true
  };
  
  function Rabbit(name) {
    this.name = name;
  }

 Rabbit.prototype=animal;

  Rabbit.prototype.walk=function(){
    console.log("jumps")
  }
  let rabbit=new Rabbit("test")
  console.log(Rabbit.prototype)
  console.log(rabbit.eats)
  rabbit.walk();
  
  console.log(Rabbit.prototype.isPrototypeOf(rabbit))//true
  console.log(Rabbit.isPrototypeOf(rabbit))//false

