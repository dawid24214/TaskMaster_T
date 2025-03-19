import { useState } from 'react'
import {Header} from  './components/Header.jsx';
import {BrowserRouter, Outlet, Route, Routes} from "react-router-dom";
import './App.css'

const HomeLayout = () => {
    return(
        <div>
        <Header/>
        <Outlet/>
        </div>
    )
}


const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<HomeLayout/>}>
                </Route>
            </Routes>
        </BrowserRouter>
    )
}


function App() {


  return (
      <>
      <Router/>
      </>
  )
}

export default App
