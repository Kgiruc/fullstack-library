import express from 'express';
import {
  getBooks,
  createBook,
  deleteBook,
  updateBook,
} from '../controllers/booksController.js';

const router = express.Router();

router.get('/', (req, res) => {
  res.json('hello backend');
});

router.get('/books', getBooks);

router.post('/books', createBook);

router.delete('/books/:id', deleteBook);

router.put('/books/:id', updateBook);

export default router;