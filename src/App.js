import React, { useState, useEffect } from 'react';
import axios from 'axios';
import FilterForm from './FilterForm';
import PostList from './PostList';

const App = () => {
  const [posts, setPosts] = useState([]);
  const [filteredUserId, setFilteredUserId] = useState(null);
  const [sortOrder, setSortOrder] = useState('asc');
  const [searchText, setSearchText] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(process.env.REACT_APP_API_URL);
        setPosts(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  const onFilterChange = (userId) => {

    if (userId !== undefined) {
      setFilteredUserId(userId);
    }
  };

  const filteredPosts = posts
    .filter(post => (filteredUserId ? post.userId === filteredUserId : true))
    .filter(post => (searchText ? post.body.includes(searchText) : true))
    .sort((a, b) => (sortOrder === 'asc' ? a.title.localeCompare(b.title) : b.title.localeCompare(a.title)));

  return (
    <div className="container mt-4">
      <h1 className="mb-4">Lista de Posts</h1>
      <FilterForm
        onFilterChange={onFilterChange}
        onSortChange={(e) => setSortOrder(e.target.value)}
        onSearchChange={(e) => setSearchText(e.target.value)}
      />
      <PostList posts={filteredPosts} />
    </div>
  );
};

export default App;
