import logo from './logo.svg';
import './App.css';
import { use, useState } from 'react';

const App = () => {
                                                                      //const array=useState(0);
  const [counter, setCounter] = useState(0);                          //const counter=array[0];
                                                                     // const setCounter=array[1];
  function increase(){
    setCounter(counter+1);
  }
  return(
    <div>
      <h1>Counter : {counter}</h1>
      <button onClick={increase}>Increase</button>
    </div>

  );
}

export default App;
