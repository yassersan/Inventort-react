import React from 'react';
import ItemForm from './itemForm';
import ItemList from './itemList';
import { useEffect, useState } from "react";

function App() {
  const [message, setMessage] = useState("");

  useEffect(() => {
    fetch("https://inventory-manager-im94.onrender.com")
      .then((res) => res.json())
      .then((data) => setMessage(data.message));
  },[]);

  return (
    <div>
      <h1>Item List</h1>
      <ItemForm />
      <ItemList />
    </div>
  );
}

export default App;
