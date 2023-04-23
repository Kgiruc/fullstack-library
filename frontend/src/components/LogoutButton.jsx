import React, { useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function LogoutButton() {
    const navigate = useNavigate()
    const handleLogout = async () => {
        try {
          await axios.post('http://localhost:8800/logout');
          localStorage.removeItem('token');
          navigate('/login');
        } catch (error) {
          console.log(error);
        }
      };

  return <button onClick={handleLogout}>Wyloguj</button>;
}

export default LogoutButton;