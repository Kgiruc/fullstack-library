import axios from 'axios';
import React from 'react';
import { Link } from 'react-router-dom';

function ListBooks({ books, isAdmin }) {
  const handleDelete = async (id) => {
    try {
      await axios.delete('http://localhost:8800/books/' + id);
      window.location.reload();
    } catch (err) {
      console.log(err);
    }
  };

  const handleRent = async (id, e) => {
    e.preventDefault();
    try {
      const rentalData = {
        book_id: id,
        borrow_name: 'Your Name',
      };
      await axios.post('http://localhost:8800/rentals', rentalData);
      window.location.reload();
    } catch (err) {
      console.log(err);
    }
  };


  return (
    <div>
      {books.map((book) => (
        <section key={book.id}>
          <p>{book.title}</p>
          <p>{book.ISBN}</p>
          <p>{book.author}</p>
          <button onClick={(e) => handleRent(book.id, e)} disabled={!book.isAvailable}>Wypożycz</button>
          {isAdmin &&
            <>
              <button>
                <Link to={`/update/${book.id}`}>Edit</Link>
              </button>
              <button
                onClick={() => handleDelete(book.id)}
                disabled={!book.isAvailable}
              >
                delete
              </button>
            </>}
        </section>
      ))}
    </div>
  );
}

export default ListBooks;