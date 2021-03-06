import React from 'react';
import './Products.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart} from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';

const Products = (props) => {
    // console.log(props);
    const { img, name, seller, price, stock,key } = props.product;
    return (
        <div className="product">
            <div>
                <img src={img} alt="" />
            </div>
            <div>
                <h4 className="product-name"><Link to={"/product/"+key}>{name}</Link></h4>
                <br/>
                <p><small>by:{seller}</small></p>
                <p>${price}</p>
                <br/>
                <p> <small> only : {stock} left in stock - order soon</small> </p>
               { props.showAddtoCart && <button className="main-button" onClick={() => props.handelAddproducts(props.product)}>
                     <FontAwesomeIcon icon={faShoppingCart} />Add to cart </button>}
            </div>
            

        </div>
    );
};

export default Products;