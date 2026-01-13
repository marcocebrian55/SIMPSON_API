export const initialStore = () => {
  return {
    characters: [],
    singleCharacters: {},
    favorites: [] 
  };
};

export default function storeReducer(store, action = {}) {
  switch (action.type) {
    case 'GET_CHARACTERS':
      return {
        ...store,
        characters: action.payload
      };

    case 'ADD_FAVORITE':
      
      if (store.favorites.includes(action.payload)) return store;
      return {
        ...store,
        favorites: [...store.favorites, action.payload]
      };

    case 'DELETE_FAVORITE':
      return {
        ...store,
        
        favorites: store.favorites.filter((item) => item !== action.payload)
      };

    default:
      return store;
  }
}