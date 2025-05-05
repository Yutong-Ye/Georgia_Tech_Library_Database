const express = require('express');
const mariadb = require('mariadb');
const cors = require('cors');
require('dotenv').config();


// const booksRouter = require('./routes/books'); 
// app.use('/books', booksRouter);

const app = express();
app.use(cors());
app.use(express.json());


// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: 'Something went wrong!' });
});

// Start server
const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

// Create MariaDB pool
const pool = mariadb.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD || '',
  database: process.env.DB_NAME,
  port: process.env.DB_PORT || 3306,
  connectionLimit: 5,
});

// CREATE a new book
app.post('/books', async (req, res) => {
  const {
    isbn, title, author, subject_area, description,
    publish_date, publisher, language, binding_type,
    edition, is_lendable, acquisition_status
  } = req.body;

  let conn;
  try {
    conn = await pool.getConnection();
    await conn.query(
      `INSERT INTO books 
      (isbn, title, author, subject_area, description, publish_date, publisher, language, binding_type, edition, is_lendable, acquisition_status) 
      VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
      [isbn, title, author, subject_area, description, publish_date, publisher, language, binding_type, edition, is_lendable, acquisition_status]
    );
    res.status(201).send('Book inserted successfully');
  } catch (err) {
    console.error('Insert error:', err);
    res.status(500).send('Failed to insert book');
  } finally {
    if (conn) conn.end();
  }
});

// READ all books
app.get('/books', async (req, res) => {
  let conn;
  try {
    conn = await pool.getConnection();
    const rows = await conn.query("SELECT * FROM books");
    res.json(rows);
  } catch (err) {
    console.error('Fetch all error:', err);
    res.status(500).send('Error fetching books');
  } finally {
    if (conn) conn.end();
  }
});

// READ a single book by ISBN
app.get('/books/:isbn', async (req, res) => {
  let conn;
  try {
    conn = await pool.getConnection();
    const rows = await conn.query("SELECT * FROM books WHERE isbn = ?", [req.params.isbn]);
    if (rows.length === 0) return res.status(404).send('Book not found');
    res.json(rows[0]);
  } catch (err) {
    console.error('Fetch single error:', err);
    res.status(500).send('Failed to fetch book');
  } finally {
    if (conn) conn.end();
  }
});

// UPDATE a book by ISBN
app.put('/books/:isbn', async (req, res) => {
  const { isbn } = req.params;
  const {
    title,
    author,
    subject_area,
    description,
    publish_date,
    publisher,
    language,
    binding_type,
    edition,
    is_lendable,
    acquisition_status
  } = req.body;

  let conn;
  try {
    conn = await pool.getConnection();
    await conn.query(
      `UPDATE books SET 
        title = ?, author = ?, subject_area = ?, description = ?, publish_date = ?, 
        publisher = ?, language = ?, binding_type = ?, edition = ?, 
        is_lendable = ?, acquisition_status = ? 
      WHERE isbn = ?`,
      [
        title,
        author,
        subject_area,
        description,
        publish_date,
        publisher,
        language,
        binding_type,
        edition,
        is_lendable,
        acquisition_status,
        isbn
      ]
    );
    res.send('Book updated successfully');
  } catch (err) {
    console.error('Update error:', err);
    res.status(500).send('Failed to update book');
  } finally {
    if (conn) conn.end();
  }
});



// DELETE a book by ISBN
app.delete('/books/:isbn', async (req, res) => {
  console.log('DELETE request for ISBN:', req.params.isbn);
  const { isbn } = req.params;
  let conn;
  try {
    conn = await pool.getConnection();
    const result = await conn.query('DELETE FROM books WHERE isbn = ?', [isbn]);
    if (result.affectedRows === 0) {
      return res.status(404).send('Book not found');
    }
    res.send('Book deleted successfully');
  } catch (err) {
    console.error('Delete error:', err);
    res.status(500).send('Failed to delete book');
  } finally {
    if (conn) conn.end();
  }
});
app.listen(3001, () => {
  console.log('Server running on port 3001');
});
