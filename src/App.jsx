import { useState } from 'react';
import {NavigationBar} from './components/NavigationBar.jsx';
import {Profile} from "./components/Profile.jsx";
import { BrowserRouter, Outlet, Route, Routes } from 'react-router-dom';


 const Home = () => {
    return (
        <div className="home-page">
            <h1>Welcome to TaskMaster</h1>
        </div>
    );
};


const HomeLayout = () => {
    return (
        <div>
            <main>
                <Outlet />
            </main>

            <NavigationBar />
        </div>
    );
};


const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<HomeLayout />}>
                    <Route  path='home' element={<Home />} />
                    <Route path='profile' element={<Profile />}/>
                </Route>
            </Routes>
        </BrowserRouter>
    );
};

function App() {
    return <Router />;
}

export default App;
