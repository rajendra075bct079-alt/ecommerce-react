import { useState } from 'react';
import './App.css'


  function Showname(props){
    return(<div><h1>I am developer {props.name} </h1></div>)
  } 

  function Name({name, age}){
    return(<div><h3>My team name is {name}. His age is {age}</h3></div>)
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
      <Name name={"Akash"} age={14}/>
      

    </>
  )
}

export default App
