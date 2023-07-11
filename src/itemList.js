import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { deleteAllItems, deleteItem } from './actions';
import { deleteItemAsync, getItemsAsync, increaseQuantityAsync, decreaseQuantityAsync } from './thunks';
import { async } from 'q';

const styles = {
  itemListContainer: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '20px',
    marginTop: '20px',
  },
  itemCard: {
    border: '1px solid #ccc',
    borderRadius: '4px',

    padding: '10px',
    width: '300px',
    position: 'relative',
    cursor: 'pointer',
  },
  itemImage: {
    width: '100%',
    height: '200px',
    objectFit: 'cover',
    marginBottom: '10px',
    borderRadius: '4px',
  },
  deleteButton: {
    backgroundColor: 'red',
    color: 'white',
    border: 'none',
    borderRadius: '4px',
    padding: '5px 10px',
    cursor: 'pointer',
  },
  itemDetails: {
    marginTop: '10px',
  },
  detailTitle: {
    fontSize: '16px',
    fontWeight: 'bold',
  },
};

function ItemList() {

  const items = useSelector((state) => state.items); 
  const [selectedItemId, setSelectedItemId] = useState(null);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getItemsAsync());
  }, [dispatch])

  
  

  console.log(items);
  const handleDeleteAll = () => {
    dispatch(deleteAllItems());
  };

  const handleDeleteItem = async (itemId) => {

   await dispatch(deleteItemAsync(itemId));
  //  await dispatch(getItemsAsync())
    if (selectedItemId === itemId) {
      setSelectedItemId(null);
    }
  };

  const handleItemSelect = (itemId) => {
    setSelectedItemId(itemId);
  };

  const handleItemDeselect = () => {
    setSelectedItemId(null);
  };

  const handleIncreaseQuantity = async (itemId) => {
    await dispatch(increaseQuantityAsync(itemId))
    if (selectedItemId === itemId) {
      setSelectedItemId(null);
    }
  }

  const handleDecreaseQuantity = async (itemId) => {
    await dispatch(decreaseQuantityAsync(itemId))
    if (selectedItemId === itemId) {
      setSelectedItemId(null);
    }
  }





  return (
    <div>
      {items.length > 0 && (
        <div>
          <button
            type="button"
            style={styles.deleteButton}
            onClick={handleDeleteAll}
          >
            Delete All
          </button>
        </div>
      )}

      <div style={styles.itemListContainer}>
        {items.map((item) => (
          <div
            key={item.id}
            style={styles.itemCard}
            onClick={() => handleItemSelect(item._id)}
          >
            <img
              src={item.image}
              alt={item.itemName}
              style={styles.itemImage}
            />
            <h4>{item.itemName}</h4>
            <button
              style={styles.deleteButton}
              onClick={(e) => {
                e.stopPropagation();
                handleDeleteItem(item.itemName);
              }}
            >
              Delete
            </button>
            {selectedItemId === item._id && (
              <div style={styles.itemDetails}>
                <h4 style={styles.detailTitle}>Details:</h4>
                <p>Description: {item.description}</p>
                <p>Price: {item.price}</p>
                <p>Reviews: {item.reviews}</p> 
                <div>
                  <p>Quantity: {item.quantity}</p>
                  <button onClick={() => handleIncreaseQuantity(item.itemName)}>+</button>
                  <button onClick={() => handleDecreaseQuantity(item.itemName)}>-</button>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default ItemList;
