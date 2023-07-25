const getItems = async () => {
  const res = await fetch('http://localhost:4000/api/items', {
    method: 'GET'
  });
  return res.json();
};

const addItem = async (item) => {
  console.log(item);
  const response = await fetch('http://localhost:4000/api/items/add', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },

    body: JSON.stringify(item)
  });

  const data = await response.json();
  if (!response.ok) {
    const errorMsg = data?.message;
    throw new Error(errorMsg)
  }

  return data;
};

const deleteItem = async (itemID) => {
  const response = await fetch('http://localhost:4000/api/items/' + itemID, {
    method: 'DELETE',
    headers: {"Content-Type":"application/json"},
    
  });

  const data = await response.json();
  console.log(data);
  if (!response.ok) {
    const errorMsg = data?.message;
    throw new Error(errorMsg)
  }

  return data;
};


const increaseQuantity = async (itemId) => {
  const response = await fetch('/api/edit/' + itemId, {
    method: 'PATCH',
  });

  const data = await response.json();
  if (!response.ok) {
    const errorMsg = data?.message;
    throw new Error(errorMsg);
  }

  return data;
};

const decreaseQuantity = async (itemId) => {
  const response = await fetch(`/api/items/${itemId}/decreaseQuantity`, {
    method: 'PATCH',
  });

  const data = await response.json();
  if (!response.ok) {
    const errorMsg = data?.message;
    throw new Error(errorMsg);
  }

  return data;
};

export default {
  getItems,
  addItem,
  deleteItem,
  increaseQuantity,
  decreaseQuantity,
}
