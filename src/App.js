import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './App.css';
import PostCard from './components/Post-card/Pc';  // Import the PostCard component

const App = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios.get('https://www.reddit.com/r/reactjs.json')
      .then(response => {
        const postsData = response.data.data.children.map(child => child.data);
        setPosts(postsData);
      })
      .catch(error => {
        console.error('Error fetching data from Reddit', error);
      });
  }, []);

  return (
    <div className="app">
      <h1>Reddit ReactJS Posts</h1>
      <div className="posts-container">
        {posts.map((post, index) => (
          <PostCard key={index} post={post} />
        ))}
      </div>
    </div>
  );
};

export default App;

