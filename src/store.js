export const initialStore = () => {
  return {
    characters: [],
    favorites: [], 
    Locations: [],
  }
}

export default function storeReducer(store, action = {}) {
  switch (action.type) {
    case 'GET_CHARACTERS':

      return {
        ...store,
        characters: action.payload

      };

      case 'GET_LOCATIONS':

      return {
        ...store,
        Locations: action.payload

      };
    


      case 'ADD_FAVORITES':
        if (store.favorites.includes(action.payload)) {
          return store;
          
        }

  return {
    ...store,
    favorites: [...store.favorites, action.payload]

  };

  case 'DELETE_FAVORITES':
    return {
      ...store,
      favorites: store.favorites.filter((fav)=> fav !==action.payload)
    };
   default: 
  return store;
  }




}
