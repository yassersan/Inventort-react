const getItems = async () => {
    const res = await fetch('http://localhost:3005/api/items', {
        method: 'GET'
    });
    return res.json();
};

const addItem = async (name) => {
    const response = await fetch('http://localhost:3005/api/items', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(name)
    });
  
    const data = await response.json();
    if (!response.ok) {
      const errorMsg = data?.message;
      throw new Error(errorMsg)
    }
    
    return data;
  };

  const deleteItem = async (name) => {
    const response = await fetch('http://localhost:3005/api/items/${itemId}', {
      method: 'DELETE',
     
    });
  
    const data = await response.json();
    if (!response.ok) {
      const errorMsg = data?.message;
      throw new Error(errorMsg)
    }
    
    return data;
  };


  const editItem = async (itemId, newPrice) => {
    const response = await fetch('http://localhost:3005/api/items/${itemId}', {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({price: newPrice}),
    });
  
    const data = await response.json();
    if (!response.ok) {
      const errorMsg = data?.message;
      throw new Error(errorMsg)
    }
    
  };

export default {
    getItems,
    addItem,
    deleteItem,
    editItem
}