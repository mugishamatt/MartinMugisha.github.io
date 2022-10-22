function TreeNode(value) {
    this.value = value;
    this.descendents = [];
}
// create nodes with values
const abe = new TreeNode('Abe');
const homer = new TreeNode('Homer');
const bart = new TreeNode('Bart');
const lisa = new TreeNode('Lisa');
const maggie = new TreeNode('Maggie');


abe.descendents.push(homer);
homer.descendents.push(bart, lisa, maggie);

function treeColector(abe){

    let arr=[abe.value];
    for ( let child of abe.descendents){
        arr=arr.concat(treeColector(child))
    }
    return arr;

}
console.log(treeColector(abe))

