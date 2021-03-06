import React from 'react';

const ReviewItem = (props) => {
    console.log(props);
    const {name, quantity,key,price} = props.product;
    const resuewIremStyle={
        borderBottom : '1px solid lightgray',
        magrinBottom : '5px',
        paddingBottom : '5px',
        marginLeft : '200px'
    }
    return (
        <div style={resuewIremStyle}>
             <h4> Quentity : {quantity}</h4>
            <h4> Name : {name}</h4>
            <h4><small>Price : $ {price}</small></h4>
           
            {/* <h4>Product name</h4> */}
            <br/>
            <button 
            onClick={() => props.removeHandel(key)}
            className="main-button">
                RemoveItem</button>
        </div>
    );
};

export default ReviewItem;