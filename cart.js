let quantity = 0;

function showQuantity(){
    document.querySelector('.cartview').innerHTML = `cart quantity is ${quantity}`;
}

showQuantity() ;    // to show the quantity on page load

function add(num){
  if (quantity+ num > 10) {
    alert('cart quantiy can not be more than 10 items');
  } else {
    quantity+=num;
    showQuantity();
  }
};



function remove(num){
  if (quantity-num < 0) {
    alert('CART CANT BE EMPTY');
  } else {
    quantity-=num;
    showQuantity();
  }
};
