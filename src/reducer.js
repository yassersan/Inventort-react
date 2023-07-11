

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
        items: state.items.filter((item) => item._id !== action.payload),
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
        items: state.items.filter((item) => item.itemName !== action.payload),

      };

      case 'INCREASE_QUANTITY':
      return {
        ...state,
        items: state.items.map((item) =>
          item.itemName === action.payload.itemId
            ? { ...item, quantity: item.quantity + 1 }
            : item
        ),
      };

      case 'Decrease_QUANTITY':
      return {
        ...state,
        items: state.items.map((item) =>
          item._id === action.payload.itemId
            ? { ...item, quantity: item.quantity - 1 }
            : item
        ),
      };


    default:
      return state;
  }
};

export default reducer;