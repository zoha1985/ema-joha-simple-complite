import React, { useEffect, useState } from 'react';
import fakeData from  '../../../fakeData';
import { addToDatabaseCart, getDatabaseCart } from '../../../utilities/databaseManager';
import Cart from '../../Cart/Cart';
import Products from '../Products/Products';
import './Shop.css';
import { Link } from 'react-router-dom';
const Shop = () => {
    const first10 = fakeData.slice(0,10);
   const[products, setProducts] = useState(first10);
   const [cart,setCart] = useState([]);
    useEffect(() => {
        const savedCart = getDatabaseCart();
        const productKeys = Object.keys(savedCart);
         const priviousCart =  productKeys.map(existingkey => {
             const product = fakeData.find(pd => pd.key === existingkey)
             product.quantity = savedCart[existingkey];
             return product;
         })
        // console.log(productKeys);
        setCart(priviousCart);

    }, [])

   const handelAddproducts = (product) => {
    const toBeaddedKey = product.key;
    const sameProduct = cart.find(pd => pd.key === toBeaddedKey)
    let count = 1;
    let newCart;
    if(sameProduct){
         count = sameProduct.quantity + 1;
        sameProduct.quantity = count;
        const other = cart.filter(pd => pd.key !== toBeaddedKey)
        newCart = [...other, sameProduct]

    }else{
        product.quantity = 1;
        newCart = [...cart, product]
    }
       setCart(newCart);
       addToDatabaseCart(product.key, count)
   }
   


    return (
        <div className="twin-container">
            <div className="product-container">
          
            {
                products.map(product => <Products 
                    key={product.key}
                    showAddtoCart ={true}
                    handelAddproducts = {handelAddproducts}
                     product={product}
                     ></Products>)
            }
            
            </div>
            
            <div className="cart-container">
                <Cart cart={cart}>
                <Link to={'/review'}> <button className="main-button">Review Order</button></Link>
                </Cart>
            </div>
        </div>
    );
};

export default Shop;