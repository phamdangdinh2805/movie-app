import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import './header.css';
import { MdSmartDisplay } from 'react-icons/md';
import { FaSearch } from 'react-icons/fa';
import { useStore } from '../../stored';
import NavUser from './NavUser';

const Header = () => {
  const headerRef = useRef(null);
  const user = useStore((state) => state.user);
  const loading = useStore((state) => state.loading);
  useEffect(() => {
    const handleFixedHeader = () => {
      if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        headerRef.current.classList.add('sticky');
      } else {
        headerRef.current.classList.remove('sticky');
      }
    };
    window.addEventListener('scroll', handleFixedHeader);

    return () => {
      window.removeEventListener('scroll', handleFixedHeader);
    };
  });
  return (
    <div ref={ headerRef }className="header">
      <div className="header-list">
        <Link to="/" className="header-logo">
          <MdSmartDisplay color="#04aa6d" />
          <span>TheUTHMovies</span>
        </Link>
      </div>

      <div className="header-info">
        <Link className="header-search" to="/search">
          <FaSearch color="#fff" />
        </Link>
        {user ? (
          <NavUser user={user} />
        ) : (
          <Link to="/login" className={`bnt-login ${loading ? 'disabled-link' : ''}`}>
            Login
          </Link>
        )}
      </div>
    </div>
  );
};

export default Header;
