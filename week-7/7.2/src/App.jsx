// import React, { Suspense } from "react";
// import { BrowserRouter, Route, Routes, useNavigate } from 'react-router-dom';
// const Dashboard = React.lazy(() => import('../component/Dashboard'))
// const Landing = React.lazy(() => import('../component/Landing'));

// import { useState } from "react";

// function App() {
//   return (
//     <div>
//       <BrowserRouter>
//         <Appbar />
//         <Routes>
//           <Route path="/dashboard" element={ <Suspense fallback={"loading..."}><Dashboard /></Suspense>  } />
//           <Route path="/" element={<Suspense fallback={"loading..."}><Landing /></Suspense> } />
//         </Routes>
//       </BrowserRouter>
//     </div>
//   );
// }

// function Appbar() {
//   const navigate = useNavigate();

//   return (
//     <div>
//       <button onClick={() => {
//         navigate("/");
//       }}>Landing Page</button>
//       <button onClick={() => {
//         navigate("/dashboard");
//       }}>Dashboard</button>
//     </div>
//   );
// }

// export default App;

// import React, { useContext } from "react";
// import { useState } from "react";
// import { CountContext } from "./context";


// function App(){

//   const [count , setCount]=useState(0);

//   return (
//     <div>
//      <CountContext.Provider value={count}>
//       <Count setCount={setCount} />
//       </CountContext.Provider>
     



//     </div>



//   )
// }

// function Count({setCount}){
//   return <div>
//     <CountRenderer/>
//     <Buttons   setCount={setCount}/>
//   </div>

// }

// function CountRenderer(){
//   const count=useContext(CountContext);
//   return <div>
//     {count}
//   </div>
// }

// function Buttons({setCount}){
//   const count=useContext(CountContext);
//   return <div>
//     <button onClick={()=>{
//       setCount(count+1)

//     }}>Increase</button>

// <button onClick={()=>{
//    setCount(count - 1)

// }}>Decrease</button>


//   </div>

// }

// export default App;


// Recoil- state management library ---

import React from "react";
import { RecoilRoot , useRecoilState , useRecoilValue } from "recoil";
import { countAtom, evenSelector } from "./store/stoms/count";



function App(){

  

  return (
    <div>
      <RecoilRoot>
      <Count  />
      </RecoilRoot>
    </div>



  )
}

function Count(){
  return <div>
    <CountRenderer/>
    <Buttons />
  </div>

}

function CountRenderer(){
  const count=useRecoilValue(countAtom);
  return <div>
    {count}

    <EvenCountRenderer/>
  </div>
}

function  EvenCountRenderer(){
  const isEven=useRecoilValue(evenSelector)
  return <div>
    { isEven ? "It is even" :null}

  </div>

}


function Buttons({}){
  const [count , setCount]=useRecoilState(countAtom)
 
  return <div>
    <button onClick={()=>{
      setCount(count+1)

    }}>Increase</button>

<button onClick={()=>{
   setCount(count - 1)

}}>Decrease</button>


  </div>

}

export default App;