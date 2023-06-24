

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

    case 'GET_ITEMS/success':
      return {
        ...state, items: action.payload,
      }

    case 'ADD_ITEM/success':
      return {
        ...state,
        items: [...state.items,action.payload]
      };

    case 'DELETE_ITEM/success':
      return {
        ...state,
        items: state.items.filter((item) => item.id !== action.payload),

      };

    case 'EDIT_ITEM/success':
  
      const updatedItems = state.items.map((item) => {
        if (item.id === action.payload.itemId) {
          // Update the price of the item
          return { ...item, price: action.payload.updatedPrice };
        }
        return item;
      });
      return {
        ...state,
        items: updatedItems,
      };

    default:
      return state;
  }
};

export default reducer;
