import products from "../../data/products";
const initialState = {
    products:products,
  };
  

const productsReducer = (state=initialState, action) =>{
    switch(action.type){
        case "SET_PRODUCTS":
            return{
                ...state,
                products:action.products,
            };
        case "SET_PRODUCTS_NULL":
            return{
                ...state,
                products: null,
            }
        default:
            return state;
    }
};
export default productsReducer;