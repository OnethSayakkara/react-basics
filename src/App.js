import Activity1 from './Activity1';
import logo from './logo.svg';
import { useState } from 'react';


function App() {

  const [count, setCount] = useState(0)

  function increase(){
    setCount(count+1);
    console.log(count);
  }
  return (
    <div className="App">

      <Activity1/>
      
       <h1 className="text-3xl mt-5 ml-10">Activity 1- part B</h1>
      <h1 className='mt-5 ml-10'>counter : {count}</h1>

      <button className='px-3 py-2 bg-amber-400 rounded-md mt-5 ml-10' onClick={increase}>Increse</button>
      
       
    </div>
  );
}



export default App;
