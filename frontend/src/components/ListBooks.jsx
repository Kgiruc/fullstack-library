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
    <div className='books-list'>
      {books.map((book) => (
        <section className='book' key={book.id}>
          <p className='title'>{book.title}</p>
          <p className='numbers'>{book.ISBN}</p>
          <p className='author'>{book.author}</p>
          {isUser && (
            <button
              className=''
              onClick={(e) => handleRent(book.id, e)}
              disabled={!book.isAvailable}
            >
              Wypożycz
            </button>
          )}
          {(isAdmin || isUser) && (
            <div className='actions'>
              {isAdmin && (
                <button
                  className='delete-button'
                  onClick={() => handleDelete(book.id)}
                  disabled={!book.isAvailable}
                >
                  delete
                </button>
              )}
              {isAdmin && (
                <button className='edit-button'>
                  <Link to={`/update/${book.id}`}>Edit</Link>
                </button>
              )}
            </div>
          )}
        </section>
      ))}
    </div>
  );
}

export default ListBooks;