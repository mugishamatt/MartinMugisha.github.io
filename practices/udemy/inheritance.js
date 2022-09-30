

const Person =function(name,birthYear){
    this.name=name;
    this.birthYear=birthYear;

}
//Person.prototype=new Person();
Person.prototype.calcAge=function(){
console.log(2022-this.birthYear)
};
const jonas=new Person('jonas',1980);

console.log(jonas.__proto__);
console.log(Person.prototype.constructor)
console.log(Person.prototype.isPrototypeOf(jonas))//tue
console.log(Person.prototype.isPrototypeOf(Person))//tue
jonas.calcAge();