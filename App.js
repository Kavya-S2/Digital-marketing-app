import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from './components/Login'
import SignUp from './components/SignUp';
import Home from './components/Home';

function App(){
  return(
    <Router>
      <div>
        <Routes>
           <Route path='/' element={<Login/>}/>
           <Route path='/SignUp' element={<SignUp />}/>
           <Route path='/Home' element={<Home />}/>

        </Routes>
        
      </div>
    </Router>
  );
}
export default App;