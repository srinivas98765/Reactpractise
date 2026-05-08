//without dependencies
import logo from './logo.svg';
import './App.css';
import { use, useState,useEffect } from 'react';

const App = () => {
  const [count, setCount] = useState(0);
  
  useEffect(()=>{
    document.title = `Counter : ${count}`;
  });
  return(
    <div>
   <h3>{count} new messages!</h3>
   
    <div>
      <button onClick={()=> setCount(count+1)}>+</button>
    
    </div>
    </div>

  );
}

export default App;
