import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router'
import Header from './common/Header'
import UserRead from './PAGES/UserRead'
import AddUser from './PAGES/AddUser'

function App() {
  return (
    <BrowserRouter>
    <Header/>
    <Routes>

      <Route path='/' element={<UserRead/>} />
      <Route path='/add' element={<AddUser/>} />

    </Routes>
    </BrowserRouter>
  )
}

export default App