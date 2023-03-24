// import {useForm} from "react-hook-form";
// import {useDispatch, useSelector} from "react-redux";
// import {useEffect} from "react";
// import {productActions} from "../../redux";
//
// const ProductForm = () => {
//
//     const{register,handleSubmit,reset,formState:{errors,isValid},setValue}=useForm({ mode:'all'})
//
//     const dispatch = useDispatch();
//
//     const {productForUpdate} = useSelector(state => state.productReducer);
//
//
//     useEffect(() => {
//         if (productForUpdate) {
//             setValue('name', productForUpdate.name)
//             setValue('count',productForUpdate.count)
//             setValue('weight',productForUpdate.weight)
//             setValue('imageUrl',productForUpdate.imageUrl)
//
//         }
//     }, [productForUpdate,setValue]);
//
//     const submit = async (data) => {
//         await dispatch(productActions.updateById({id: productForUpdate._id, product: data}))
//         reset();
//     };
//
//     return (
//         <form onSubmit={handleSubmit(submit)}>
//             <input type={'text'} placeholder={'name'} {...register('name')}/>
//
//             <input type={'number'} placeholder={'count'} {...register('count')}/>
//
//             <input type={'number'} placeholder={'weight'} {...register('weight')}/>
//
//             <input type={'text'} placeholder={'imageUrl'} {...register('imageUrl')}/>
//
//             <button disabled={!isValid}>update</button>
//         </form>
//     )
// }
// export default ProductForm;