import React from 'react';
import ProductsList from './Components/ProductsList1'; // for  useState() version
// import ProductsList from './Components/ProductsList2'; // for  useReducer() version

function App() {
  return (
    <div>
      <h1>Stock Manager By Yaakoub Kadri</h1>
      <ProductsList />
    </div>
  );
}

export default App;
