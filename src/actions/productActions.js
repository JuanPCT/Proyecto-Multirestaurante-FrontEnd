import axios from "axios";
import { ADD_PRODUCT_ENDPOINT } from "../helpers/endpoints";


export const addProduct = (producto_id, userEmail) => {
    console.log(producto_id+" "+userEmail)
    axios.post(ADD_PRODUCT_ENDPOINT+"/"+producto_id);
}

export const deleteProduct = (producto_id, userEmail) => {
    axios.post(ADD_PRODUCT_ENDPOINT,{producto_id, userEmail});
}