import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

export default function Home() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    fetchBooks();
  }, []);

  const fetchBooks = async () => {
    const response = await axios.get('http://localhost/Ujian/api/Books.php');
    setBooks(response.data);
  };

  const deleteBook = async (id) => {
    await axios.delete(`http://localhost/Ujian/api/Books.php?id=${id}`);
    fetchBooks();
  };

  return (
    <div>
      <Link to="/create" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700">Add New Book</Link>
      <table className="table-auto w-full mt-4 text-blue-900 border-blue-500">
        <thead>
          <tr>
            <th className="px-4 py-2 border">ID</th>
            <th className="px-4 py-2 border">Title</th>
            <th className="px-4 py-2 border">Author</th>
            <th className="px-4 py-2 border">Actions</th>
          </tr>
        </thead>
        <tbody>
          {books.map(book => (
            <tr key={book.id} className="hover:bg-blue-200">
              <td className="border px-4 py-2">{book.id}</td>
              <td className="border px-4 py-2">{book.title}</td>
              <td className="border px-4 py-2">{book.author}</td>
              <td className="border px-4 py-2">
                <Link to={`/edit/${book.id}`} className="bg-yellow-500 text-white px-4 py-2 rounded hover:bg-yellow-700 mr-2">Edit</Link>
                <button onClick={() => deleteBook(book.id)} className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-700">Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}