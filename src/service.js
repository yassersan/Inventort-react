const getItems = async () => {
  const res = await fetch('http://localhost:3005/api/items', {
    method: 'GET'
  });
  return res.json();
};

const addItem = async (item) => {
  console.log(item);
  const response = await fetch('http://localhost:3005/api/items', {
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
  const response = await fetch('http://localhost:3005/api/items/' + itemID, {
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


const editItem = async (itemId, newPrice) => {
  const response = await fetch('http://localhost:3005/api/items/' + itemId, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ price: newPrice }),
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
  editItem
}