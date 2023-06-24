import { createAsyncThunk } from "@reduxjs/toolkit"
import ItemService from './service'



  export const getItemsAsync = createAsyncThunk('GET_ITEMS', async (_, thunkAPI) => {
    const items = await ItemService.getItems();
    thunkAPI.dispatch({ type: 'GET_ITEMS/success', payload: items }); // feel free to name the action type whatever
  });

  export const AddItemAsync = createAsyncThunk('ADD_ITEM/success', async (item, thunkAPI) => {
    await ItemService.addItem(item);
    thunkAPI.dispatch({ type: 'ADD_ITEM/success', payload: item }); // feel free to name the action type whatever
  });

  export const deleteItemAsync = createAsyncThunk('DELETE_ITEM', async (id, thunkAPI) => {
    await ItemService.deleteItem(id);
    thunkAPI.dispatch({ type: 'DELETE_ITEM/success', payload: id}); // feel free to name the action type whatever
  });

  export const editItemAsync = createAsyncThunk('EDIT_ITEM', async (updatedItem, thunkAPI) => {
    const { itemId, updatedPrice } = updatedItem;
    await ItemService.editItem(itemId, updatedPrice);
    thunkAPI.dispatch({ type: 'EDIT_ITEM/success', payload: { itemId, updatedPrice } });
  });
  
  