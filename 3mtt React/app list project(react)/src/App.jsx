// src/App.jsx

import React, { useEffect, useState } from 'react';
import ListComponent from './components/ListComponent';

const App = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const res = await fetch('https://jsonplaceholder.typicode.com/users');
        if (!res.ok) throw new Error('Failed to fetch data');
        const data = await res.json();
        setUsers(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchUsers();
  }, []);

  if (loading) return <p>Loading users...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div style={{ padding: '2rem' }}>
      <h1>Users List</h1>
      <ListComponent
        items={users}
        renderItem={(user) => (
          <div>
            <strong>{user.name}</strong> <br />
            <span>{user.email}</span>
          </div>
        )}
      />
    </div>
  );
};

export default App;
