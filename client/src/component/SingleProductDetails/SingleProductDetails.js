import css from './SingleProductDetails.module.css'
import {useDispatch, useSelector} from "react-redux";
import {commentActions, productActions} from "../../redux";
import {useNavigate} from "react-router-dom";
import {Box, Button, Modal, Typography} from "@mui/material";
import {useEffect, useState} from "react";
import {useForm} from "react-hook-form";
import {joiResolver} from "@hookform/resolvers/joi";
import {productValidator} from "../../validator/product.validator";

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

const SingleProductDetails = ({product}) => {
    let {_id, name, weight, size, comments, imageUrl} = product;

    const [open, setOpen] = useState(false);
    const handleOpen = () => {
        setOpen(true)
        dispatch(productActions.setProductForUpdate(product))
    };
    const handleClose = () => setOpen(false);

    let {products,productForUpdate} = useSelector(state => state.productReducer);
    const{register,handleSubmit,reset,formState:{errors,isValid},setValue}=useForm({resolver:joiResolver(productValidator), mode:'all'})
    let navigate = useNavigate();
    const dispatch = useDispatch();

    useEffect(() => {
         if (productForUpdate) {
             setValue('name', productForUpdate.name)
             setValue('count',productForUpdate.count)
             setValue('weight',productForUpdate.weight)
             setValue('imageUrl',productForUpdate.imageUrl)

         }
     }, [productForUpdate,setValue]);

    const deleteItem = () => {
        dispatch(productActions.deleteProduct(_id));
        navigate('/products')
    }
    const submit = async (data) => {
        await dispatch(productActions.updateById({id: productForUpdate._id, product: data}));
        reset()
        navigate('/products')
    }

    return (
        <div className={css.main}>
            <div className={css.image}>
                <img src={imageUrl} alt={name}/>
            </div>
            <div>
                weight: {weight}
                size: <br/> width:{size.width} <br/> height:{size.height}
            </div>
            <div>
                Comments
                <ul>
                    {comments.map((item) => <li>{item.description}
                        <button >delete</button>
                        <button>add</button>
                    </li>)}
                </ul>
            </div>
            <button onClick={deleteItem}>Delete</button>

            <Button onClick={handleOpen}>Update</Button>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <Typography id="modal-modal-title" variant="h6" component="h2">
                        Text in a modal
                    </Typography>
                    <Typography id="modal-modal-description" sx={{mt: 2}}>
                        <form onSubmit={handleSubmit(submit)}>
                            <input type={'text'} placeholder={'name'} {...register('name')}/>
                            {errors.name&&<h4>{errors.name.message}</h4>}
                            <input type={'number'} placeholder={'count'} {...register('count')}/>
                            {errors.count&&<h4>{errors.count.message}</h4>}
                            <input type={'text'} placeholder={'weight'} {...register('weight')}/>
                            {errors.weight&&<h4>{errors.weight.message}</h4>}
                            <input type={'text'} placeholder={'imageUrl'} {...register('imageUrl')}/>
                            {errors.imageUrl&&<h4>{errors.imageUrl.message}</h4>}
                            <button >update</button>
                        </form>
                    </Typography>
                </Box>
            </Modal>
        </div>
    );
};

export default SingleProductDetails;