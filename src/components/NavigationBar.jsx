import {Link} from "react-router-dom";
import {Home, List, PlusCircle, BarChart, User} from 'luci'
import React from "react";
import '../style/_navigationbar.scss';
  export const NavigationBar = () =>{
    return(
        <>
            <div className='navigation-bar'>
                <li>Home</li>
                <li>Tasks</li>
                <li>Add Button</li>
                <li>Stats</li>
                <li>Profile</li>
            </div>
    </>
    )
}

