import React from 'react';
import './App.css';
//Import all components
import Form from './components/Form';
import GiphDisplay from './components/GiphDisplay';


function App () {

// all components in App's returned JSX
  return (
    <div className="App">
      <GiphDisplay /> 
      <Form /> 

    </div>
  )
}


export default App;
