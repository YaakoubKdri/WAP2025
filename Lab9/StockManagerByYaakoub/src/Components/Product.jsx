import React from 'react';
import '../App.css';

function Product({ id, name, price, inStock, onToggle }) {
  const nameColor = {
    color: inStock ? 'green' : 'red'
  };

  const imageSrc = `/images/${name.toLowerCase()}.png`;
  return (
    <div className="myProduct">
        <div>
            <span style={nameColor}>{name}</span> - ${price} - 
            {inStock ? ' In Stock' : ' Out of Stock'}
            <br />
        </div>
        <div>
        <button onClick={onToggle}>
            Toggle Stock
        </button>
        </div>
      <img src={imageSrc} alt={name} width="40" height="40" />
    </div>
  );
}

export default Product;