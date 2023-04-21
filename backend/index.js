import express from 'express';
import cors from 'cors';
import booksRoutes from './routes/booksRoutes.js';
import rentalsRoutes from './routes/rentalsRoutes.js';

const app = express();
const PORT = 8800;

app.use(cors());
app.use(express.json());
app.use('/', booksRoutes);
app.use('/', rentalsRoutes);

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});