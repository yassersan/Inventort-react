import { createAsyncThunk } from "@reduxjs/toolkit"
import ItemService from './service'

export const getItemsAsync = createAsyncThunk('GET_ITEMS', async () => {
    const items = await ItemService.getItems();
    return items; // Return the fetched items directly
  });

