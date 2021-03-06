import React from 'react';


const Cart = (props) => {
    const cart = props.cart
    // console.log (props)
    // const totalPrices = cart.reduce((total, prd)=>total + prd.price,0);
    let total = 0;
    for (let i = 0; i < cart.length; i++) {
        const product = cart[i];
        total = total + product.price * product.quantity;
   
        
    }
    let shipping = 0;
    if(total > 35){
        shipping = 0;
    }
    else if(total > 15){
        shipping = 4.99;
    }
    else if(total > 0){
        shipping  = 12.99;
    }
    const tax = (total /10).toFixed(2);

   // const total = cart
   const formateNumber = num => {
       const precision = num.toFixed(2);
       return Number(precision)
   }
    return (
        <div>
            <h3>order summery</h3>
            <p>Items Orders : {cart.length}</p>
            <p>Product Price : {formateNumber(total)}</p>
            <p>shipping Caust: {shipping}</p>
            <p><small>tax + vat : {tax}</small></p>
            <p>Grand Total price : {total + shipping + Number(tax)}</p>
            {
             props.children
            
            }
           
        </div>
    );
};

export default Cart;