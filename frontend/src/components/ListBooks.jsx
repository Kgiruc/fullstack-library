import axios from 'axios';
import React from 'react';
import { Link } from 'react-router-dom';
import jwt_decode from 'jwt-decode';

function ListBooks({ books, isAdmin, isUser }) {
  const token = localStorage.getItem('token');
  const decodedToken = jwt_decode(token);
  const nameToken = decodedToken.name;

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
        borrow_name: nameToken,
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
          {isUser && (
            <button
              onClick={(e) => handleRent(book.id, e)}
              disabled={!book.isAvailable}
            >
              Wypożycz
            </button>
          )}
          {(isAdmin || isUser) && (
            <>
              <button>
                <Link to={`/update/${book.id}`}>Edit</Link>
              </button>
              {isAdmin && (
                <button
                  onClick={() => handleDelete(book.id)}
                  disabled={!book.isAvailable}
                >
                  delete
                </button>
              )}
            </>
          )}
        </section>
      ))}
    </div>
  );
}

export default ListBooks;