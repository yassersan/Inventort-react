import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addItem } from './actions';
import { AddItemAsync, getItemsAsync } from './thunks';
const { v4: uuid } = require('uuid');

const styles = {
  formContainer: {
    maxWidth: '400px',
    margin: '0 auto',
  },
  formGroup: {
    marginBottom: '20px',
  },
  formLabel: {
    display: 'block',
    marginBottom: '5px',
  },
  formInput: {
    width: '100%',
    padding: '5px',
    borderRadius: '4px',
    border: '1px solid #ccc',
  },
  formButton: {
    backgroundColor: '#4CAF50',
    color: 'white',
    border: 'none',
    borderRadius: '4px',
    padding: '10px 20px',
    marginRight: '10px',
    cursor: 'pointer',
  },
};

function ItemForm() {
  const [itemName, setItemName] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');
  const [image, setImage] = useState('');

  const dispatch = useDispatch();

  const handleSubmit = async (e) =>  {
    e.preventDefault();
    

    var newItem = {
      "id": uuid(),
      "itemName": itemName,
      "description": description,
      "price": price,
      "image": image,
    };


    await dispatch(AddItemAsync(newItem));
    
    // await dispatch(getItemsAsync());
    setItemName('');
    setDescription('');
    setPrice('');
    setImage('');
  };

  const handleClear = () => {
    setItemName('');
    setDescription('');
    setPrice('');
    setImage('');
  };

  return (
    <div style={styles.formContainer}>
      <h2>Add Item</h2>
      <form onSubmit={handleSubmit}>
        <div style={styles.formGroup}>
          <label htmlFor="itemName" style={styles.formLabel}>
            Item Name
          </label>
          <input
            type="text"
            id="itemName"
            value={itemName}
            onChange={(e) => setItemName(e.target.value)}
            style={styles.formInput}
          />
        </div>
        <div style={styles.formGroup}>
          <label htmlFor="description" style={styles.formLabel}>
            Description
          </label>
          <textarea
            id="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            style={styles.formInput}
          ></textarea>
        </div>
        <div style={styles.formGroup}>
          <label htmlFor="price" style={styles.formLabel}>
            Price
          </label>
          <input
            type="number"
            id="price"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            style={styles.formInput}
          />
        </div>
        <div style={styles.formGroup}>
          <label htmlFor="image" style={styles.formLabel}>
            Image
          </label>
          <input
            type="text"
            id="image"
            value={image}
            onChange={(e) => setImage(e.target.value)}
            style={styles.formInput}
          />
        </div>
        <button type="submit" style={styles.formButton}>
          Add
        </button>
        <button type="button" style={styles.formButton} onClick={handleClear}>
          Clear
        </button>
      </form>
    </div>
  );
}

export default ItemForm;
