import React, { useEffect, useState } from 'react';
import fakeData from '../../fakeData';
import {  getDatabaseCart, processOrder, removeFromDatabaseCart } from '../../utilities/databaseManager';
import Cart from '../Cart/Cart';
import ReviewItem from '../ReviewItem/ReviewItem';
import happyImg from '../../images/giphy.gif'

const Review = () => {
   const [cart,setCart] = useState([]);
   const [oederPleased, setOrderPleased] = useState(false);
    const handelPlaceOrder = () => {
        setCart([]);
        setOrderPleased(true);
        processOrder();
        // console.log('click the ')
    }
   const  removeHandel = (productkey) => {
    // console.log("removeHandel",productkey);
    const newCart = cart.filter(pd => pd.key !== productkey);
    setCart(newCart);
    removeFromDatabaseCart(productkey);
   }

    useEffect(()=>{
        
        const savedCart = getDatabaseCart();
        const productKey = Object.keys(savedCart);
        const cardProduct  =  productKey.map(key => {
            const product = fakeData.find(pd => pd.key === key);
            product.quantity = savedCart[key];
            return product;
            
        });
        // console.log(cardProduct);
        setCart(cardProduct);
},[])
    let thanks;
    if(oederPleased){
        thanks = <img src={happyImg} alt=""/>
        
    }
    return (
        <div className="twin-container">
            <div className="product-container">
                { 
                    thanks
                }
            <h2>this is review : {cart.length}</h2>
            {/* <ReviewItem ></ReviewItem> */}
            {
                cart.map(pd => <ReviewItem 
                    removeHandel={removeHandel}
                    key={pd.key} 
                    product={pd}>

                    </ReviewItem>)
            }
            </div>
            <div className="cart-container">
                <Cart cart={cart}>
                    <button onClick={handelPlaceOrder} className="main-button" >Place Order</button>
                </Cart>
            </div>
    
        </div>
    );
};

export default Review;