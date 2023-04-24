import React from 'react';
import jwt_decode from 'jwt-decode';
import LogoutButton from '../components/LogoutButton';
import RentalsButton from '../components/RentalsButton';


function Profile() {
  const token = localStorage.getItem('token');
  const decodedToken = jwt_decode(token);
  const isAdmin = decodedToken.isAdmin;
  const name = decodedToken.name;
    
  return (
    <div className='profile'>
      {isAdmin ? <p className='admin'>{`Witaj adminie! ${name}`}</p> : <p className='user'>{`Witaj użytkowniku! ${name}`}</p>}
      <RentalsButton />
      <LogoutButton />
    </div>
  );
}

export default Profile