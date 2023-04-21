import axios from 'axios';
import React from 'react';
import { useNavigate } from 'react-router-dom';


function ListBooks({ rentals }) {
  const navigate = useNavigate()

  const handleDelete = async (id) => {
    try {
      await axios.delete('http://localhost:8800/rentals/' + id);
      navigate('/')
    } catch (err) {
      console.log(err);
    }
  };

  

  return (
    <div>
      {rentals.map((rental) => (
        <section key={rental.id}>
          <p>{rental.title}</p>
          <p>{rental.borrow_name}</p>
          <button onClick={() => handleDelete(rental.id)}>Zwróć</button>
        </section>
      ))}
    </div>
  );
}

export default ListBooks;