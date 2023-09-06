import React, { useContext, useEffect } from 'react';
import '../css/all_pages.css';
import Librarian from './Librarian/Librarian';
import Customer from './Customer/Customer';
import AuthContext from '../context/AuthContext';

// Define the book categories and their titles
const bookCategories = [
  {
    category: 'Sci-Fi',
    books: ['The Lost World', 'Dune'],
  },
  {
    category: 'Fiction',
    books: ['Alchemist', 'Brave New World'],
  },
  {
    category: 'Comedy',
    books: ['Champak', 'Tenaliraman'],
  },
];

function Collection() {
  const { person } = useContext(AuthContext);

  useEffect(() => {
    document.title = 'Collection | Library';
  }, []);

  return (
    <div>
      {person.role === 'librarian' || person.role === 'Librarian' ? (
        <Librarian />
      ) : (
        <Customer />
      )}

      {/* Display the book categories and their titles */}
      <div className="book-categories">
        {bookCategories.map((category, index) => (
          <div key={index} className="category">
            <h2>{category.category}</h2>
            <ul>
              {category.books.map((book, bookIndex) => (
                <li key={bookIndex}>{book}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Collection;
