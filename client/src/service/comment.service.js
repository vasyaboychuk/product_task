import {axiosService} from "./axios.service";
import {urls} from "../config";

const commentService={
    create: (comment) => axiosService.post(urls.comment, comment),
    deleteById: (id) => axiosService.delete(`${urls.comment}/${id}`),
}

export {commentService};