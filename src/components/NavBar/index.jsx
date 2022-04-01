import React from 'react';
import { Link, useLocation } from 'react-router-dom';


const Navbar = () => {

    
const location = useLocation();
console.log(location.pathname)
    return (
        <div>
          <nav className='navbar navbar-light bg-light'>
            <div className='d-flex'>
              <Link to='/' className={`mx-2 ${location.pathname === '/' ? 'text-primary' : 'text-secondary'}`}>Home</Link>
              <br />
              <Link to='/posts' className={`mx-2 ${location.pathname === '/posts' ? 'text-primary' : 'text-secondary'}`}>All Posts</Link>
              <br />
              <Link to='/posts/new' className={`mx-2 ${location.pathname === '/posts/new' ? 'text-primary' : 'text-secondary'}`}>New Post</Link>
            </div>
          </nav>
        </div>
    )

};

export default Navbar;