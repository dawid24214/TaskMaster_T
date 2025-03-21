import { useState } from 'react'
import {Header} from  './components/Header.jsx';
import {NavigationBar} from './components/NavigationBar.jsx';
import {BrowserRouter, Outlet, Route, Routes} from "react-router-dom";
import './App.css'

const HomeLayout = () => {
    return(
        <div>
            <div className='header'>
                <NavigationBar/>
                <Header/>

            </div>




            <main>
        <Outlet/>
            </main>
        </div>
    )
}


const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<HomeLayout />}>

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
