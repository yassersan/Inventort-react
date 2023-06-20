import { getItemsAsync } from "./thunks";

const initialState = {
    items: []
  };
  
  const reducer = (state = initialState, action) => {
    switch (action.type) {
      case 'ADD_ITEM':
        return {
          ...state,
          items: [...state.items, action.payload],
        };
      case 'DELETE_ITEM':
        return {
            ...state,
            items: state.items.filter((item) => item.id !== action.payload),
          };
      case 'DELETE_ALL_ITEMS':
        return {
          ...state,
          items: [],
        };

      case getItemsAsync.fulfilled:
        return {
          ...state, items: action.payload,
        }

      default:
        return state;
    }
  };
  
  export default reducer;
  