import React from 'react';

import Result from './components/Result';
import Summary from './components/Summary';
import data from './data.json';
import './App.css';


const App = () => {
  return (
    <div className="app">
      <div className="card">
        <Result data={data} />
        <Summary data={data} />
      </div>
    </div>
  );
};

export default App;