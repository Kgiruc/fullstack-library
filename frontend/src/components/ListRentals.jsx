import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function ListRentals({ rentals, isAdmin }) {
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
          {isAdmin ? (
            <button disabled>Zwróć</button>
          ) : (
            <button onClick={() => handleDelete(rental.id)}>Zwróć</button>
          )}
        </section>
      ))}
    </div>
  );
}

export default ListRentals;