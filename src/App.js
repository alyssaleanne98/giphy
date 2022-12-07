import React from 'react';
import './App.css';
//Import all components
import Form from './components/Form';
import GiphDisplay from './components/GiphDisplay';
import Button from './components/Button';


function App () {

// all components in App's returned JSX
  return (
    <div className="App">
      <Button /> 
      <Form /> 
      <GiphDisplay /> 
      
      

    </div>
  )
}


export default App;
