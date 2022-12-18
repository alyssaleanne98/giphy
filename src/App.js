//Import all components
import {useState} from 'react';
import './App.css';
import Form from './components/Form';
import GiphDisplay from './components/GiphDisplay';


function App () {

  // state to hold the giph data
  const [giphData, setGiphData] = useState({});

  const makeApiCall = async () => {
    // make fetch request and store response
    const giphUrl = `https://api.giphy.com/v1/gifs/random?api_key=22rp7DVJX4KQx4Kn5bnHs2jRvlMUsMzA&tag=&rating=g`

    // parse JSON response into a JS object
    const res = await fetch(giphUrl);
    // set the giph state to the giph
    const json = await res.json();

    setGiphData(json)
  } 
  console.log(giphData)



  
  return (
    <div className="App">
      <h1>Giphy Display</h1>
      <Form props={makeApiCall}/> 
      <GiphDisplay giph={giphData}/> 
    </div>
  )
}


export default App;
