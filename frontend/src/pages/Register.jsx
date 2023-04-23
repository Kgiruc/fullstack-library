import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Register() {
  const [name, setName] = useState('');
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');
  const [isAdmin, setIsAdmin] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post('http://localhost:8800/register', {
        name,
        login,
        password,
        isAdmin,
      });
      console.log(response.data);
      navigate('/login');
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={(event) => setName(event.target.value)}
        />
      </div>
      <div>
        <label htmlFor="login">Login:</label>
        <input
          type="text"
          id="login"
          value={login}
          onChange={(event) => setLogin(event.target.value)}
        />
      </div>
      <div>
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
        />
      </div>
      <div>
        <label htmlFor="isAdmin">Admin:</label>
        <input
          type="checkbox"
          id="isAdmin"
          checked={isAdmin}
          onChange={(event) => setIsAdmin(event.target.checked)}
        />
      </div>
      <button type="submit">Register</button>
    </form>
  );
}

export default Register;