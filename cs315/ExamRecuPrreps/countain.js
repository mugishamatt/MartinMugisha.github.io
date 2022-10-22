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
// associate root with is descendents
abe.descendents.push(homer);
homer.descendents.push(bart, lisa, maggie);


//
function contains(tree,nodename){

    if(tree.value==nodename)
        return true;

    for(let child of tree.descendents){
        let res=contains(child,nodename)
        if(res)
        return true
    }
    return false
    }


console.log(contains(abe,"Bart"))