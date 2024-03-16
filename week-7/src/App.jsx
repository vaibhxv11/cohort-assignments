import React from "react";
import {BrowserRouter , Route, Routes} from 'react-router-dom'
import { Dashboard } from "../component/Dashboard";
import { Landing } from "../component/Landing";

function App(){
   return( 

    <BrowserRouter>
    <Routes>
      <Route path="/dashboard" element={<Dashboard/>} />
      <Route path="/" element={<Landing/>} />
    </Routes>

    </BrowserRouter>


   )
}

export default App;