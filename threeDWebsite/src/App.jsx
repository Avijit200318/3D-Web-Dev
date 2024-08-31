import React from 'react'
import {BrowserRouter, Routes, Route} from "react-router-dom";
import CircularBanar from './pages/CircularBanar';
import MacLanding from './pages/MacLanding';

export default function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<CircularBanar />} />
        <Route path='/mac' element={<MacLanding />} />
      </Routes>
    </BrowserRouter>
  )
}
