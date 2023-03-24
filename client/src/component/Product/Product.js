import React from 'react';
import {useNavigate, useParams} from "react-router-dom";

const Product = ({product}) => {
    const {_id,imageUrl, name, count, size, weight} = product;
    const navigate = useNavigate();

    const getDetails=()=>{
        navigate(`${_id}`)
    }
    console.log(product);
    return (
        <div onClick={getDetails}>
            <h1>Name :{name}</h1>
            <img src={imageUrl} alt={name}/>
            <h3>count: {count}</h3>
            <h3>size: height-{size.height}
                width-{size.width}
            </h3>

        </div>
    );
};

export default Product;