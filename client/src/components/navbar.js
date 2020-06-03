import React from 'react';
import {Link} from 'react-router-dom';

const NavBar = () => (
  <div>
    <ul>
      <div>
        <Link to="/"> Home </Link>
      </div>
      <div>
        <Link to="/bestsellers"> Best Sellers Books </Link>
      </div>
      <div>
        <Link to="/current_sellers">Current Best Sellers list</Link>
      </div>
    </ul>
  </div>
)

export default NavBar;
