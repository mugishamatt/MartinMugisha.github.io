const me = {
  first: "Tina",
  last: "Xing",
  getFullName: function () {
    return this.first + " " + this.last;
  },
};
const log = function (height, weight) {
  // ‘this’ refers to the invoker
  console.log(this.getFullName() + height + " " + weight);
};
const logMe = log.bind(me);
logMe("180cm", "70kg"); // Tina Xing 180cm 70kg;

log.call(me, "180cm", "70kg"); // Tina Xing 180cm 70kg ;
log.apply(me, ["180cm", "70kg"]); // Tina Xing 180cm 70kg ;
log.bind(me, "180cm", "70kg")(); // Tina Xing 180cm 70kg;


//
const abc = {
    name: "",
    log: function() {
  this.name = "Hello";
  console.log(this.name); //Hello
  const setFrench = (newname => this.name = newname); //inner function 
  setFrench("Bonjour");
  console.log(this.name); //Bonjour
  } };
  abc.log();

  //
  let group = {
    title: "Our Group",
    students: ["John", "Pete", "Alice"],
    showList: function() { this.students.forEach(
    //function(){console.log(this.title + ': ' + student);//error – ‘this’ is undefined (or window)


    student => console.log(this.title + ': ' + student) //works as expected – ‘this’ from lexical environment, showList method
   
    ); }}; 
    group.showList();
    
    //works as expected – ‘this’ from lexical environment, showList method

//
console.log("***********************************")
function User(name){
    console.log("1:" , this);
    this.name = name;
    console.log("2:" , this);
    }
  tina = {};
  const thisUser = User.bind(tina);
  thisUser("Rujuan");
  thisUser("Tina");
  console.log("3: ", tina);  