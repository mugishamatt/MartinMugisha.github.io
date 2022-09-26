
let animal = {
    eats: true
  };
  
  let rabbit = {
    jumps: true,
    __proto__: animal
  };

//console.log(animal.prototype.isPrototypeOf(rabbit))
  console.log(Object.getPrototypeOf(rabbit))//

  console.log(Object.keys(rabbit))// only in rabbit
  for(let pro in rabbit){
    console.log(pro)
  }