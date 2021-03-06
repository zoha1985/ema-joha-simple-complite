import React from 'react';
import { useParams } from 'react-router-dom';
import fakeData from '../../fakeData';
import Products from '../Header/Products/Products';

const ProductDetail = () => {
    const {productkey} = useParams();
    const product  = fakeData.find(pd => pd.key === productkey);
    // console.log(product);
    
    return (
        <div>
            <h1>Your product details </h1>
            <Products showAddtoCart={false} product={product}></Products>
        </div>
    );
};

export default ProductDetail;