import { GET_PRODUCTS_SEARCH } from "../actions";

const productReducer = (state, action) => {
    if (action.type === GET_PRODUCTS_SEARCH) {
        console.log("action.type === GET_PRODUCTS_SEARCH")
        return { ...state, isLoading: false };
      }
};
export default productReducer;