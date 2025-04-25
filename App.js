import React, { useState } from 'react';
import './App.css';

function App() {
  const [rating, setRating] = useState(0);

  const handleRating = (value) => {
    setRating(value);
  };

  return (
    <div className="App">
      <h1>Store Rating App</h1>
      <p>Rate the store:</p>
      <div>
        {[1, 2, 3, 4, 5].map((value) => (
          <button key={value} onClick={() => handleRating(value)}>
            {value} Star{value > 1 ? 's' : ''}
          </button>
        ))}
      </div>
      <p>Your rating: {rating} ⭐</p>
    </div>
  );
}

export default App;
