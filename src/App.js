import React, { useState, useEffect } from 'react';
import './App.css';
import DATASET from './data.js'
import FilterComponent from './components/filter-component';

function App() {
  const [allData, setAllData] = useState([]);
  useEffect(() => {
    // Instead of geting data locally we can make a call to the api and get the data from there ex.(firebase or custom api)
    setAllData(DATASET)
  }, []);
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Filter (Search) APP
        </p>
      </header>
      {allData.length>0 && <FilterComponent data={allData}></FilterComponent>}
    </div>
  );
}

export default App;
