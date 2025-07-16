import React from 'react'
import { Route, Routes } from 'react-router'
import Layout from './pages/layout/layout'
import Yoqub1 from './pages/home/yoqub1';
import Yoqub2 from './pages/home/yoqub2';
import Azam1 from './pages/service/azam1';
import Azam2 from './pages/service/azam2';
import Ahliddin1 from './pages/contact/ahliddin1';
import Ahliddin2 from './pages/contact/ahliddin2';
import Fahim1 from './pages/catalog/fahim1';
import Fahim2 from './pages/catalog/fahim2';

const App = () => {
  return (
    <>

    <Routes>
      <Route path='/' element={<Layout/>}>
      <Route index element={<Yoqub1/>} />
      <Route path='yoqub2' element={<Yoqub2/>} />
      <Route path='azam1' element={<Azam1/>} />
      <Route path='azam2' element={<Azam2/>} />
      <Route path='ahliddin1' element={<Ahliddin1/>} />
      <Route path='ahliddin2' element={<Ahliddin2/>} />
      <Route path='fahim1' element={<Fahim1/>} />
      <Route path='fahim2' element={<Fahim2/>} />
      </Route>
    </Routes>

    </>
  )
}

export default App