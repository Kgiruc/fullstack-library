import db from '../database/db.js';

const getBooks = (req, res) => {
  const q = 'SELECT * FROM library.books';
  db.query(q, (err, data) => {
    if (err) return res.json(err);
    const books = data;
    const q2 = 'SELECT book_id FROM library.rentals';
    db.query(q2, (err, data) => {
      if (err) return res.json(err);
      const rentedBooks = data.map((item) => item.book_id);
      const bookList = books.map((book) => ({
        ...book,
        isAvailable: !rentedBooks.includes(book.id),
      }));
      return res.json(bookList);
    });
  });
};

const createBook = (req, res) => {
  const q =
    'INSERT INTO library.books (`title`,`ISBN`,`author`) VALUES (?)';
  const values = [req.body.title, req.body.ISBN, req.body.author];

  db.query(q, [values], (err, data) => {
    if (err) return res.json(err);
    return res.json('book has been created successfully');
  });
};

const deleteBook = (req, res) => {
  const bookId = req.params.id;
  const q = 'DELETE FROM library.books WHERE id = ?';

  db.query(q, [bookId], (err, data) => {
    if (err) return res.json(err);
    return res.json('book has been deleted successfully');
  });
};

const updateBook = (req, res) => {
  const bookId = req.params.id;
  const q =
    'UPDATE library.books SET `title` = ?,`ISBN` = ?,`author` = ? WHERE id = ?';

  const values = [req.body.title, req.body.ISBN, req.body.author];

  db.query(q, [...values, bookId], (err, data) => {
    if (err) return res.json(err);
    return res.json('book has been updated successfully');
  });
};

export { getBooks, createBook, deleteBook, updateBook };
