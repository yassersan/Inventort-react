let nextItemId = 0;

export const addItem = (item) => ({
  type: 'ADD_ITEM',
  payload: {
    ...item,
    id: nextItemId++,
  },
});

export const deleteItem = (itemId) => ({
    type: 'DELETE_ITEM',
    payload: itemId,
  });

export const deleteAllItems = () => ({
  type: 'DELETE_ALL_ITEMS',
});
