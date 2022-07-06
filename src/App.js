
import React from 'react'
import {
  Routes,
  Route,
  BrowserRouter
} from "react-router-dom";
import Logement from './components/Logement';

const App = () => (
  <BrowserRouter>
  <Routes>
        <Route path="/" element={<Logement />} />
                
                    </Routes>
                    </BrowserRouter>
)


export default App