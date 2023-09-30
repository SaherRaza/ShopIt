export const setProducts = (products) =>{
    return{
        type: "SET_PRODUCTS",
        products: products ,
    };
};

export const setProductsNull = () =>{
    return{
        type: "SET_PRODUCTS_NULL",
        products: null,
    };
};