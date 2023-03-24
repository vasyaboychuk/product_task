import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {productActions} from "../../redux";
import Product from "../Product/Product";

const Products = () => {
    const {products} = useSelector(state => state.productReducer);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(productActions.getALl())
    }, [])
    return (
        <div>
            {products.map(product=><Product key={product._id} product={product}/>)}

        </div>
    );
};

export default Products;