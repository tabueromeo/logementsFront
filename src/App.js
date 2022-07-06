
import React from 'react'
import {
  Routes,
  Route,
  BrowserRouter
} from "react-router-dom";
import Listlogement from './components/Listlogement';

import Logement from './components/Logement';
import Login from './components/Login';
import SignUp from './components/SignUp';

const App = () => (
  <BrowserRouter>
    <Routes>
        <Route path="/" element={<Listlogement />} />                  
        <Route path="/login" element={<Login />} />                  
        <Route path="/signup" element={<SignUp />} />                  
    </Routes>
  </BrowserRouter>
)


export default App