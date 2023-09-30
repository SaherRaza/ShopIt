

const ADD_TO_FAVORITES = 'ADD_TO_FAVORITES';
const REMOVE_FROM_FAVORITES = 'REMOVE_FROM_FAVORITES';

  export const addToFavorites = (data) => ({
    type: ADD_TO_FAVORITES,
    item: data,
  });
  
  export const removeFromFavorites = (id) => ({
    type: REMOVE_FROM_FAVORITES,
    item: id,
  });

export const emptyFavorites = () =>{
    return {
        type : "EMPTY_FAVORITES"
    };
}