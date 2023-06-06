import React from 'react';

const styles = {
  itemDetails: {
    marginTop: '10px',
  },
  detailTitle: {
    fontSize: '16px',
    fontWeight: 'bold',
  },
};

function ItemDetail({ item }) {
  return (
    <div style={styles.itemDetails}>
      <h4 style={styles.detailTitle}>Details:</h4>
      <p>Description: {item.description}</p>
      <p>Price: {item.price}</p>
    </div>
  );
}

export default ItemDetail;
