import React, {useState} from 'react';
import {BrowserRouter as Router,Link} from 'react-router-dom'

export default function NavBar({pickCity}) {

    

    return (
        <div>
            <nav className="navbar navbar-light bg-secondary">
            <Link to='/'><button className="flex-md-fill text-md-center nav-link active" >Home</button></Link>
  <Link to='/favorites'><button className="flex-md-fill text-md-center nav-link active" >Favorites</button></Link>
  
</nav>
        </div>
    )
}
