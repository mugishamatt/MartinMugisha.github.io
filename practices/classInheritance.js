
class Animal { 
    constructor(name) {
    this.speed = 0;
    this.name = name; }
    run(speed) {
    this.speed += speed;
    alert(`${this.name} runs with speed ${this.speed}.`);
    } stop() {
    this.speed = 0;
    alert(`${this.name} stands still.`); }}

//     class Rabbit { 
//     constructor(name) {
//     this.name = name; }
//     hide() {
//     alert(`${this.name} hides!`);
//     } 
// }
//using extends

class Rabbit extends Animal{
    hide(){
        alert(`${this.name} hides`)
    }
}

const rabbit=new Rabbit("white rabbit");



//rabbit.hide();
rabbit.run(5)
