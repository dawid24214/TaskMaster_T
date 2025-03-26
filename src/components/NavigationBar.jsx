import {Link} from "react-router-dom";
import {Home, List, PlusCircle, BarChart, User} from 'lucide-react';
import React from "react";
import '../style/_navigationbar.scss';
  export const NavigationBar = () =>{
    return(
        <>
            <nav className='navigation-bar'>
                <div className='nav-item'>
                    <Home size={24}/>
                    <span className='nav-label'>Home</span>
                </div>

                <div className='nav-item'>
                    <List size={24}/>
                    <span className='nav-label'>Tasks</span>
                </div>

                <div className='nav-item'>
                    <PlusCircle size={34}/>
                </div>

                <div className='nav-item'>
                    <BarChart size={24}/>
                    <span className='nav-label'>Stats</span>
                </div>

                <div className='nav-item'>
                    <User size={24}/>
                    <span className='nav-label'>Profile</span>
                </div>
            </nav>
    </>
    )
}

