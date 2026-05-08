//without dependencies
import logo from './logo.svg';
import './App.css';
import { use, useState,useEffect } from 'react';

const App = () => {
  const [count, setCount] = useState(0);
  
  useEffect(()=>{                                                              // If we pass empty array then only one time it renders the title
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


// the useEffect is executed when it is mounted, unmounted, updated
// cleanup function 
// Fetching data from Api
//updating Dom -document & window
// Timer Function - setInterval and setTimers
