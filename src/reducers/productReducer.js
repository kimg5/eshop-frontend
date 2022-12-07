import { GET_PRODUCTS_SEARCH } from "../actions";
import {  api_search_url } from "../utils/constants";
import http from "../utils/http";

const productReducer = async (state, action) => {
    if (action.type === GET_PRODUCTS_SEARCH) {
        const content = await http.post(api_search_url,action.filters);
        console.log(content);
        return {...state,isLoading:false,products: content};
      }
};
export default productReducer;