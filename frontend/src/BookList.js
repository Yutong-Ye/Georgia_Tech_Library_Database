import React, { useEffect, useState } from 'react';

function BookList() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    fetch('/books')
      .then(res => res.json())
      .then(data => setBooks(data))
      .catch(err => console.error('Failed to fetch books:', err));
  }, []);

  return (
    <div>
      <h2>Library Books</h2>
      <ul>
        {books.map(book => (
          <li key={book.isbn}>
            <strong>{book.title}</strong> by {book.author} (ISBN: {book.isbn})
          </li>
        ))}
      </ul>
    </div>
  );
}

export default BookList;
