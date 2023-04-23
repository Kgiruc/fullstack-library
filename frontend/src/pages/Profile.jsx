import React from 'react';
import jwt_decode from 'jwt-decode';
import LogoutButton from '../components/LogoutButton';


function Profile() {
  const token = localStorage.getItem('token');
  const decodedToken = jwt_decode(token);
  const isAdmin = decodedToken.isAdmin;
  const name = decodedToken.name;
    
  return (
    <div className='profile'>
      {isAdmin ? <p className='admin'>{`Witaj adminie! ${name}`}</p> : <p className='user'>{`Witaj użytkowniku! ${name}`}</p>}
      <LogoutButton />
    </div>
  );
}

export default Profile