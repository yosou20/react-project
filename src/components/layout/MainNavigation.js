import React from 'react';
import { Link } from 'react-router-dom';
import './MainNavigation.Modules.css';

export default function MainNavigation() {
    return (
      <header className='header'>
        <div className='logo'>React Meetup !</div>
        <nav>
          <li>
            <Link to="/">All Meetup</Link>
          </li>
          <li>
            <Link to="/new-meetup">New Meetup</Link>
          </li>
          <li>
            <Link to="/favorites">My Favorites Meetup !! </Link>
          </li>
        </nav>
      </header>
    );
}

