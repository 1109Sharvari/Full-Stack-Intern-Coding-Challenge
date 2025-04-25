import React, { useState, useEffect } from 'react';
import axios from 'axios';

const StoreList = () => {
  const [stores, setStores] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/stores')
      .then(res => setStores(res.data))
      .catch(error => console.log(error));
  }, []);

  return (
    <div>
      {stores.map(store => (
        <div key={store.id}>
          <h3>{store.name}</h3>
          <p>{store.address}</p>
          <p>Rating: {store.avg_rating}</p>
        </div>
      ))}
    </div>
  );
};

export default StoreList;
