import React, { useEffect, useState } from 'react';

function BookList() {
  const [books, setBooks] = useState([]);
  const [formData, setFormData] = useState({
    title: '',
    author: '',
    isbn: '',
  });

  // Fetch books on mount
  const fetchBooks = async () => {
    try {
      const res = await fetch('http://localhost:3001/books');
      const data = await res.json();
      setBooks(data);
    } catch (err) {
      console.error('Fetch error:', err);
    }
  };

  useEffect(() => {
    fetchBooks();
  }, []);

  const handleChange = e => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async e => {
    e.preventDefault();
    try {
      await fetch('http://localhost:3001/books', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...formData,
          subject_area: 'Computer Science',
          description: '',
          publish_date: '2025-01-01',
          publisher: 'Default Publisher',
          language: 'English',
          binding_type: 'Paperback',
          edition: '1st',
          is_lendable: true,
          acquisition_status: 'Available'
        }),
      });
      await fetchBooks();
      setFormData({ title: '', author: '', isbn: '' });
    } catch (err) {
      console.error('Insert error:', err);
    }
  };

  const handleDelete = async isbn => {
    try {
      await fetch(`http://localhost:3001/books/${isbn}`, {
        method: 'DELETE'
      });
      await fetchBooks();
    } catch (err) {
      console.error('Delete error:', err);
    }
  };

  return (
    <div>
      <h2>Library Books</h2>
      <ul>
        {books.map(book => (
          <li key={book.isbn}>
            <strong>{book.title}</strong> by {book.author} (ISBN: {book.isbn})
            &nbsp;
            <button onClick={() => handleDelete(book.isbn)}>Delete</button>
          </li>
        ))}
      </ul>

      <h2>Add a New Book</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="title"
          placeholder="Title"
          value={formData.title}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="author"
          placeholder="Author"
          value={formData.author}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="isbn"
          placeholder="ISBN"
          value={formData.isbn}
          onChange={handleChange}
          required
        />
        <button type="submit">Add Book</button>
      </form>
    </div>
  );
}

export default BookList;
