import React from 'react';
import { auth } from '../../config/firebase';
import { signOut } from 'firebase/auth';
import { Link } from 'react-router-dom';
import './header.css';


const NavUser = ({ user }) => {
  const handleLogOut = async () => {
    try {
      await signOut(auth);
    } catch (err) {
      console.log(err.message);
    }
  };

  return (
    <div className="header-user">
      <img alt="avatar" src={user.photoURL} />
      <ul className="header-user-list">
        <li className="header-user-item">{user.displayName}</li>
        <li className="header-user-item">{user.email}</li>
        <li className="header-user-item">
          <Link to="/favorite-movie">My Favorite Movie</Link>
        </li>
        <li className="header-user-item" onClick={handleLogOut}>
          Log Out
        </li>
      </ul>
    </div>
  );
};

export default NavUser;
