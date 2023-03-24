import React from 'react';
import {useNavigate} from "react-router-dom";
import css from './Product.module.css';

const Product = ({product}) => {
    const {_id,imageUrl, name, count, size, weight} = product;
    const navigate = useNavigate();

    const getDetails=()=>{
        navigate(`${_id}`)
    }

    return (
        <div onClick={getDetails} className={css.product}>
            <div className={css.image}>
                <img src={imageUrl} alt={name}/>
            </div>
            <div >
                <p>
                    Name :{name} <br/>
                    count: {count} <br/>
                    size: height-{size.height} <br/>
                    width-{size.width}
                </p>
            </div>
        </div>
    );
};

export default Product;