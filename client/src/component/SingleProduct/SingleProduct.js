import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {productActions} from "../../redux";
import Product from "../Product/Product";
import {useNavigate, useParams} from "react-router-dom";
import SingleProductDetails from "../SingleProductDetails/SingleProductDetails";

const Products = () => {
    const dispatch=useDispatch();
    const{ product }=useSelector(state => state.productReducer);
    const {id} = useParams();
    let navigate = useNavigate();

    useEffect(()=>{
        dispatch(productActions.getById({id}))
    },[id])

    return (
        <div>
            <button onClick={()=>navigate(-1)}>go back</button>
            {product?.map((item)=><SingleProductDetails key={item.id} product={item}/>)}

        </div>
    );
};

export default Products;