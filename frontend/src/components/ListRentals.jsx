import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function ListRentals({ rentals, isAdmin }) {
  const navigate = useNavigate()
  console.log(rentals)

  const handleDelete = async (id) => {
    try {
      await axios.delete('http://localhost:8800/rentals/' + id);
      navigate('/')
    } catch (err) {
      console.log(err);
    }
  };



  return (
    <div className='books-list'>
      {rentals.map((rental) => (
        <section key={rental.id} className='book'>
          <p className='title'>{rental.title}</p>
          <p className='author'>{rental.borrow_name}</p>
          <p className='numbers'>{new Date(rental.date_rented).toLocaleDateString()}</p>
          <p className='numbers'>{new Date(rental.date_returned).toLocaleDateString()}</p>
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