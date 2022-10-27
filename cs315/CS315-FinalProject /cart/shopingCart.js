const urlParams = new URLSearchParams(window.location.search);

const names = urlParams.get('name');
const price = Number(urlParams.get('price'));
const id = Number(urlParams.get('id'));
const image = urlParams.get('image');
let totalPrice;
let shoppingcardArr= JSON.parse(localStorage.getItem("cart"));

function addtocardfunc(){
    if(names){
    shoppingcardArr.push({name: names, price: price, image: image});
    localStorage.setItem("cart",JSON.stringify(shoppingcardArr));
    totalPrice = shoppingcardArr.reduce((sum, current)=>sum + current.price,0);
  
}
console.log(shoppingcardArr)
}

addtocardfunc();