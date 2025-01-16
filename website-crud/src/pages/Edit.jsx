import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';

export default function Edit() {
  const { id } = useParams();
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    fetchBook();
  }, []);

  const fetchBook = async () => {
    const response = await axios.get(`http://localhost/api/books.php?id=${id}`);
    setTitle(response.data.title);
    setAuthor(response.data.author);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios.put(`http://localhost/api/books.php?id=${id}`, { title, author });
    navigate('/');
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto bg-sky-200 p-6 text-blue-900 border-blue-500 rounded shadow">
      <label className="block mb-2">Title:</label>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className="border w-full px-4 py-2 mb-4 bg-white text-blue-900 focus:outline-blue-500"
        required
      />
      <label className="block mb-2">Author:</label>
      <input
        type="text"
        value={author}
        onChange={(e) => setAuthor(e.target.value)}
        className="border w-full px-4 py-2 mb-4 bg-white text-blue-900 focus:outline-blue-500"
        required
      />
      <button type="submit" className="bg-yellow-500 text-white px-4 py-2 rounded hover:bg-yellow-700">Update</button>
    </form>
  );
}