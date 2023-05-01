import { authService } from 'fbase';
import React from 'react';
import { useNavigate } from 'react-router-dom';

const Profile = () => {
  const navigate = useNavigate();

  const onLogOutClick = () => {
    authService.signOut();
    navigate('/');
  };

  return (
    <>
      <div>Profile</div>
      <button onClick={onLogOutClick}>Logout</button>
    </>
  );
};

export default Profile;
