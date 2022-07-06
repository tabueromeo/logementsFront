
import React from 'react'
import {
  Routes,
  Route,
  BrowserRouter
} from "react-router-dom";

import Logement from './components/Logement';
import Login from './components/Login';
import SignUp from './components/SignUp';

const App = () => (
  <BrowserRouter>
    <Routes>
        <Route path="/" element={<Logement />} />                  
        <Route path="/login" element={<Login />} />                  
        <Route path="/signup" element={<SignUp />} />                  
    </Routes>
  </BrowserRouter>
)


export default App