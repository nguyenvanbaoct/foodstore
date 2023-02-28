import axios from "axios";
import { BASE_URL } from "./config.url";

export const getFoodListServ = () => {
    return axios.get(`${BASE_URL}/food`);
};

export const getCartList = () => {
    return axios.get(`${BASE_URL}/cart`);
};

export const postCart = (dataCart) => {
    return axios.post(`${BASE_URL}/cart`, dataCart);
};

export const putCart = (dataCart) => {
    return axios.put(`${BASE_URL}/cart`, dataCart);
};
