import { root } from "./config";
import axios from "axios";

export const api = Object.freeze({
    products: {
        fetch: () => {
            return axios(`${root}/products`);
        },
    },
});