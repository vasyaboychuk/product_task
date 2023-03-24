import {useDispatch, useSelector} from "react-redux";
import {productActions} from "../../redux";
import Product from "../Product/Product";
import {useEffect} from "react";
import css from './Products.module.css';

const Products = () => {
    const {products} = useSelector(state => state.productReducer);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(productActions.getALl())
    }, [])
    return (
        <div className={css.products}>
            {products.map(product=><Product key={product._id} product={product}/>)}

        </div>
    );
};

export default Products;