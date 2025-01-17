// let quantity = 0;

// function showQuantity(){
//     document.querySelector('.cartview').innerHTML = `cart quantity is ${quantity}`;
// }

// showQuantity() ;    // to show the quantity on page load

// function add(num){
//   if (quantity+ num > 10) {
//     alert('cart quantiy can not be more than 10 items');
//   } else {
//     quantity+=num;
//     showQuantity();
//   }
// };



// function remove(num){
//   if (quantity-num < 0) {
//     alert('CART CANT BE EMPTY');
//   } else {
//     quantity-=num;
//     showQuantity();
//   }
// };


let quantity = 0;

function showQuantity() {
    document.querySelector('.cartview').innerHTML = `Cart quantity is ${quantity}`;
}

function updateQuantity(num) {
    if (quantity + num < 0) {
        alert('Cart cannot be empty');
    } else if (quantity + num > 10) {
        alert('Cart quantity cannot be more than 10 items');
    } else {
        quantity += num;
        showQuantity();
    }
}

showQuantity();  // Display quantity on page load
