import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import '../App.css'
import Home from './Home';
import SignIn from './../auth/SignIn';
import SignUp from '../auth/SignUp';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' exact element={<Home />} />
          <Route path='/sign-in' exact element={<SignIn />} />
          <Route path='/sign-up' exact element={<SignUp />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
