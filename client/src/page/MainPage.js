import React from 'react';
import Products from "../component/Products/Products";
import ProductForm from "../component/ProductForm/ProductForm";
import css from './MainPage.module.css'

const MainPage = () => {
    return (
        <div className={css.mainPage}>
            {/*<ProductForm/>*/}
            <hr/>
            <Products/>

        </div>
    );
};

export default MainPage;