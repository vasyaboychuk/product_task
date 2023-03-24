import {useDispatch, useSelector} from "react-redux";
import {productActions} from "../../redux";
import Product from "../Product/Product";
import {useEffect, useState} from "react";
import css from './Products.module.css';
import ProductForm from "../ProductForm/ProductForm";
import {Box, Button, Modal, Typography} from "@mui/material";
import {useForm} from "react-hook-form";

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};

const Products = () => {
    const {products} = useSelector(state => state.productReducer);
    const dispatch = useDispatch();
    const {register, handleSubmit, reset, formState: {errors, isValid}, setValue} = useForm({mode: 'all'})

    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    useEffect(() => {
        dispatch(productActions.getALl())
    }, [])

    const submit = async (data) => {
        await dispatch(productActions.addProduct( data))
        console.log(data);
    }

    return (
        <div  className={css.wrapper}>
            <div className={css.button}>
                <Button onClick={handleOpen}>add product</Button>
                <Modal
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="modal-modal-title"
                    aria-describedby="modal-modal-description"
                >
                    <Box sx={style}>
                        <Typography id="modal-modal-title" variant="h6" component="h2">
                            add product
                        </Typography>
                        <Typography id="modal-modal-description" sx={{mt: 2}}>
                            {/*Duis mollis, est non commodo luctus, nisi erat porttitor ligula.*/}
                            <form onSubmit={handleSubmit(submit)}>
                                <input type={'text'} placeholder={'name'} {...register('name')}/>

                                <input type={'number'} placeholder={'count'} {...register('count')}/>

                                <input type={'number'} placeholder={'weight'} {...register('weight')}/>

                                <input type={'text'} placeholder={'imageUrl'} {...register('imageUrl')}/>

                                <button disabled={!isValid}>add</button>
                            </form>
                        </Typography>
                    </Box>
                </Modal>
            </div>

            <div className={css.products}>
                {products.map(product => <Product key={product._id} product={product}/>)}
            </div>

        </div>
    );
};

export default Products;