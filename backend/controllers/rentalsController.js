import db from '../database/db.js';

const getRentals = (req, res) => {
  const q = 'SELECT rentals.*, books.title FROM library.rentals JOIN library.books ON rentals.book_id = books.id';
  db.query(q, (err, data) => {
    if (err) return res.json(err);
    return res.json(data);
  });
};

const createRental = (req, res) => {
  const bookId = req.body.book_id;
  const today = new Date();
  const nextMonth = new Date(today);
  nextMonth.setMonth(nextMonth.getMonth() + 1);
  const q = 'INSERT INTO library.rentals (`book_id`, `date_rented`, `date_returned`, `borrow_name`) VALUES (?, ?, ?, ?)';
  const values = [bookId, today, nextMonth, req.body.borrow_name];

  db.query(q, values, (err, data) => {
    if (err) return res.json(err);
    return res.json('Rental has been created successfully');
  });
};

const deleteRental = (req, res) => {
  const rentalId = req.params.id;
  const q = 'DELETE FROM library.rentals WHERE id = ?';

  db.query(q, [rentalId], (err, data) => {
    if (err) return res.json(err);
    return res.json('Rental has been deleted successfully');
  });
};

// const updateRental = (req, res) => {
//   const rentalId = req.params.id;
//   const q = 'UPDATE library.rentals SET `book_id` = ?, `date_rented` = ?, `date_returned` = ?, `borrow_name` = ? WHERE id = ?';
//   const values = [req.body.book_id, req.body.date_rented, req.body.date_returned, req.body.borrow_name, rentalId];

//   db.query(q, values, (err, data) => {
//     if (err) return res.json(err);
//     return res.json('Rental has been updated successfully');
//   });
// };

export { getRentals, createRental, deleteRental };