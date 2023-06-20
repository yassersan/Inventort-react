import { createAsyncThunk } from "@reduxjs/toolkit"
import ItemService from './service'



  export const getItemsAsync = createAsyncThunk('GET_ITEMS', async (_, thunkAPI) => {
    const items = await ItemService.getItems();
    thunkAPI.dispatch({ type: 'GET_ITEMS/success', payload: items }); // feel free to name the action type whatever
  });

  export const AddItemAsync = createAsyncThunk('ADD_ITEM', async (_, thunkAPI) => {
    const items = await ItemService.addItem();
    thunkAPI.dispatch({ type: 'ADD_ITEM/success', payload: items }); // feel free to name the action type whatever
  });

  export const deleteItemAsync = createAsyncThunk('DELETE_ITEM', async (_, thunkAPI) => {
    const items = await ItemService.deleteItem();
    thunkAPI.dispatch({ type: 'DELETE_ITEM/success', payload: items }); // feel free to name the action type whatever
  });

  export const editItemAsync = createAsyncThunk('EDIT_ITEM', async (_, thunkAPI) => {
    const items = await ItemService.editItem();
    thunkAPI.dispatch({ type: 'EDIT_ITEM/success', payload: items }); // feel free to name the action type whatever
  });

  