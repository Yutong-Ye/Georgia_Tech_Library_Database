import React, { useEffect, useState } from 'react';
import './BookList.css';


function BookList() {
  const [books, setBooks] = useState([]);
  const [formData, setFormData] = useState({
    title: '',
    author: '',
    isbn: ''
  });
  const [isEditing, setIsEditing] = useState(false);
  const [editingIsbn, setEditingIsbn] = useState(null);

  const fetchBooks = async () => {
    try {
        const res = await fetch(`${process.env.REACT_APP_API_URL}/books`);
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
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = async e => {
    e.preventDefault();

    const bookPayload = {
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
    };

    try {
    if (isEditing) {
        // UPDATE
        await fetch(`${process.env.REACT_APP_API_URL}/books/${editingIsbn}`, {
            method: 'PUT',          
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(bookPayload)
        });
        } else {
        // CREATE
        await fetch(`${process.env.REACT_APP_API_URL}/books`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(bookPayload)
        });
        }

      await fetchBooks();
      setFormData({ title: '', author: '', isbn: '' });
      setIsEditing(false);
      setEditingIsbn(null);
    } catch (err) {
      console.error('Submit error:', err);
    }
  };

  const handleDelete = async isbn => {
    try {
    await fetch(`${process.env.REACT_APP_API_URL}/books/${isbn}`, {
        method: 'DELETE'
        });
      await fetchBooks();
    } catch (err) {
      console.error('Delete error:', err);
    }
  };

  const handleEdit = book => {
    setIsEditing(true);
    setEditingIsbn(book.isbn);
    setFormData({
      title: book.title,
      author: book.author,
      isbn: book.isbn 
    });
  };

  return (
    <div>
      <h2>Library Books</h2>
      <ul>
        {books.map(book => (
          <li key={book.isbn}>
            <strong>{book.title}</strong> by {book.author} (ISBN: {book.isbn}) &nbsp;
            <button onClick={() => handleEdit(book)}>Edit</button> &nbsp;
            <button onClick={() => handleDelete(book.isbn)}>Delete</button>
          </li>
        ))}
      </ul>

      <h2>{isEditing ? 'Edit Book' : 'Add a New Book'}</h2>
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
          disabled={isEditing} 
        />
        <button type="submit">{isEditing ? 'Update Book' : 'Add Book'}</button>
        {isEditing && (
          <button
            type="button"
            onClick={() => {
              setIsEditing(false);
              setFormData({ title: '', author: '', isbn: '' });
            }}
          >
            Cancel
          </button>
        )}
      </form>
    </div>
  );
}

export default BookList;
