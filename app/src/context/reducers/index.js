import {combineReducers} from "redux";
import favoriteReducer from "./favoriteReducer";
import productsReducer from "./productsReducer";
import cartReducer from "./cartReducer";

const myReducer = combineReducers({
    favoritesItems: favoriteReducer,
    products:productsReducer,
    cart:cartReducer
});

export default myReducer;