import { useState } from 'react';
import {NavigationBar} from './components/NavigationBar.jsx';
import { BrowserRouter, Outlet, Route, Routes } from 'react-router-dom';

// Przykładowy komponent strony głównej
const Home = () => {
    return (
        <div className="home-page">
            <h1>Welcome to TaskMaster</h1>
        </div>
    );
};

// Layout ogólny z paskiem nawigacji
const HomeLayout = () => {
    return (
        <div>
            {/*<header className="app-header">*/}
            {/*    /!* Można dodać logo lub nazwę aplikacji tutaj *!/*/}
            {/*</header>*/}

            <main>
                <Outlet />
            </main>

            <NavigationBar />
        </div>
    );
};

// Konfiguracja routera
const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<HomeLayout />}>
                    <Route index element={<Home />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
};

function App() {
    return <Router />;
}

export default App;
