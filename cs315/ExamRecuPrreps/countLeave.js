

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

function countLeave(tree){

    if(tree.descendents.length==0){
        return 1;
    }
    let count=0;
        for(let child of tree.descendents){
            count=count+countLeave(child)
        }

        return count;
    }
console.log(countLeave(abe))
    function countParent(tree){
        // let count;
        // if(tree.descendents.length==0){
        //     count=0

        // }else 
        // count=1;
    let count=tree.descendents.length==0?0:1
    for(let child of tree.descendents){
        count=count+ countParent(child)
    }
    return count
    }

console.log(countParent(abe))