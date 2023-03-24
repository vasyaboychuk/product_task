import {axiosService} from "./axios.service";
import {urls} from "../config";

const productService={
    getAll: () => axiosService.get(urls.product),
    create: (car) => axiosService.post(urls.product, car),
    getById: (id) => axiosService.get(`${urls.product}/${id}`),
    updateById: (id, product) => axiosService.put(`${urls.product}/${id}`, product),
    deleteById: (id) => axiosService.delete(`${urls.product}/${id}`),
}

export {productService};