import { useState } from 'react';
import './App.css'


  function Showname(props){
    return(<div><h1>I am developer {props.name} </h1></div>)
  } 

function App() {
  const [count, setCount] = useState(0);

  const name="Rajendra";
  const age= 24;



  return (
    <>
      {/* Part 1 */}
      <h1>My company name is {name} and this company is {age} year old</h1>
      <Showname name={"Asmeet"}/>

    </>
  )
}

export default App
