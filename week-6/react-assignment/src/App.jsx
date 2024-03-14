import {  useState} from "react";

function App() {

  const [counter , setCounter]=useState(0);
  const [inputvalue , setInputValue]=useState(1);
  
  // let count=0;
  // for(let i=0 ; i<=inputvalue ;  i++)
  // {
  //   count=count+i;
  // }

  




 return ( <div>

  <input onChange={function(e){
    console.log()
    setInputValue(e.target.value);
  }} placeholder="Find sum form 1 to n" />
  <br/>
 Sum from  1 to {inputvalue} is {count}
 <br/>

 <button onClick={function(){
  setCounter(counter +1);
 }}> Counter : {counter}</button>

  
 </div>
 )
}




export default App
