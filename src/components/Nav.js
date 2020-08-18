import React from 'react';
import '../App.css';
import {Link} from 'react-router-dom';
import {  Image } from 'semantic-ui-react'
import logo from './logo.png';


function Nav() {
  const navStyle = {
    color: 'white'
  }
  return (
    <nav>
        <Link style={navStyle} to='/'>
        <Image src={logo} size='tiny' />
        </Link>
        <ul className="nav-links">
          <Link style={navStyle} to='/nasaphoto'>
            <li>Image Of The Day</li>
          </Link>
          <Link style={navStyle} to='/marsweather'>
            <li>Mars Weather Service</li>
          </Link>
            
        </ul>
    </nav>
  );
}

export default Nav;
