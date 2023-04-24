import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

function Register() {
  const [name, setName] = useState('');
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');
  const [isAdmin, setIsAdmin] = useState(false);
  const [error, setError] = useState('');
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
      if (response.data === 'User has been created successfully') {
        navigate('/login');
      }
    } catch (error) {
      console.log(error.response.data);
      setError(error.response.data.error);
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          id="name"
          placeholder='name'
          value={name}
          onChange={(event) => setName(event.target.value)}
        />
        <input
          type="text"
          id="login"
          placeholder='login'
          value={login}
          onChange={(event) => setLogin(event.target.value)}
        />
        <input
          type="password"
          id="password"
          placeholder='password'
          value={password}
          onChange={(event) => setPassword(event.target.value)}
        />
        <label
          htmlFor="checkbox"
          className='checkbox'
        >
          Zarejestruj jako Admin
          <input
            type="checkbox"
            id="isAdmin"
            checked={isAdmin}
            onChange={(event) => setIsAdmin(event.target.checked)}
          />
        </label>
        {error && <p className="error">{error}</p>}
        <button type="submit">Register</button>
        <Link 
          to={"/login"}
          className="register"
        >
          Logowanie
          </Link>
      </form>
      
    </>
  );
}

export default Register;